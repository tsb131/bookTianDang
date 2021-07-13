<template>
	<view class="content">
		<view class="header">
			<input  type="number"  @blur="Written1" placeholder="请输入可用的手机号">
			<input type="number" @blur="Written3" placeholder="输入你收到的短信验证码">
			
		</view>
		<view class="main">
			<input  @blur="Written2" placeholder="请输入验证码">
	        
			<canvas @click="Refresh" canvas-id="imgCanvas">
				
			</canvas>
			
		</view>
		<view class="footer">
			<button @click="Clicked">{{text}}</button>
			<button @click="Rigister">注册</button>
		</view>		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone_number:'',
				password:'',
				confirm:'',
				confirm_code:'',
				text:'获取短信验证码'
			}
		},
		onShow(){
			console.log("begin")
			//setTimeout(pause(),1000)
			this.init();
		},
		methods: {
			init:function(){
				var context=uni.createCanvasContext("imgCanvas",this)
				context.setFillStyle("white");
				context.setLineWidth(5);
				var w=300;
				var h=100;
				context.fillRect(0, 0, 300, 100);
				var pool = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "I", "M", "N", "O", "P", "Q", "R", "S",
						"T", "U", "V", "W", "S", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
					],
					str = '';
				for (var i = 0; i < 4; i++) {
					var c = pool[this.rn(0, pool.length - 1)];
					var deg = this.rn(-30, 30);
					context.setFontSize(18);
					context.setTextBaseline("top");
					context.setFillStyle(this.rc(80, 150));
					context.save();
					context.translate(30 * i + 15, parseInt(h / 1.5));
					context.rotate(deg * Math.PI / 180);
					context.fillText(c, -15 + 5, -15);
					context.restore();
					str += c;
				}
				console.log(str);
				uni.setStorage({
					
					key: 'imgcode',
					data: str,
				});
				for (var i = 0; i < 40; i++) {
					context.beginPath();
					context.arc(this.rn(0, w), this.rn(0, h), 1, 0, 2 * Math.PI);
					context.closePath();
					context.setFillStyle(this.rc(150, 200));
					context.fill();
				}
				context.draw();
				console.log('end');
			},
			rc: function(min, max) {
				var r = this.rn(min, max);
				var g = this.rn(min, max);
				var b = this.rn(min, max);
				return "rgb(" + r + "," + g + "," + b + ")";
			},
			rn: function(max, min) {
				return parseInt(Math.random() * (max - min)) + min;
			},
			Refresh:function(event){
				this.init()
			},
			Sub:function(){
				this.text=(parseInt(this.text)-1).toString()
				//console.log(this.text)
			},
			countDown:function(){
				//console.log(parseInt(this.text))
				while(parseInt(this.text)>0){
					//console.log(parseInt(this.text))
					setTimeout(this.Sub(),1000);
				}
				this.text="获取短信验证码"
				
			},
			Written1:function(event){
				
				var value=event.target.value;
				console.log(value)
				if(value.length!=11){
					uni.showToast({
						icon:'none',
						position:'bottom',
						title:'您输入的手机号位数有误，请重新输入'
					})
				}
				else this.phone_number=value
			},
			Written2:function(event){
				var value=event.target.value;
				this.confirm_code=value;
			},
			Written3:function(event){
				var value=event.target.value;
				console.log(value)
				this.confirm=value
			},
			Clicked:function(event){
				
				if(this.phone_number==''){
					uni.showToast({
						icon:'none',
						position:'bottom',
						title:'请先输入手机号'
					})
				}
				else if(this.confirm_code==''){
					uni.showToast({
						icon:'none',
						position:'bottom',
						title:'请先输入图形验证码'
					})
				}
				else if(this.confirm_code.toLowerCase()!=uni.getStorageSync('imgcode').toLowerCase()){
					uni.showToast({
						icon:'none',
						position:'bottom',
						title:'您输入的图形验证码错误，请重新输入'
					})
					this.init()
				}
				else if(this.text!='获取短信验证码'){
					uni.showToast({
						icon:'none',
						position:'bottom',
						title:'请等待60秒再发送短信验证码'
					})
				}
				else{
					//#ifndef H5
					 var u1='100.67.3.102:5000/register/confirm'
					//#endif
					//#ifdef H5
					var u1='http://localhost:5000/register/confirm'
					//#endif
					uni.request({
						url:u1,
						
						data:{
							phone_number:this.phone_number
						},
						header:{
							//'content-type': 'application/x-www-form-urlencoded',
							'Access-Control-Allow-Origin':'*',
							'Cache_Control':'no-cache',
							'Pragma':'no-cache',
							'Expires':0
						},
						method:'POST',
						success:(res)=>{
							uni.showToast({
								icon:'none',
								position:'bottom',
								title:'短信验证码发送成功！'
							})
							console.log(res.data);
							uni.setStorage({
								key:'confirm',
								data:res.data['confirm']
							})
							this.text='60'
							this.countDown()
							
						}
						
					})
				}
				
				
			},
			Rigister:function(event){
				if(uni.getStorageSync('confirm')==this.confirm){
					uni.showToast({
						icon:'none',
						position:'bottom',
						title:'跳转信息完善页面'
					})
					var str='/pages/information/information?phone_number=t1'
					str=str.replace(/t1/,this.phone_number)
					console.log(str)
					uni.redirectTo({
						url:str
					})
				}
				else{
					uni.showToast({
						icon:'none',
						position:'bottom',
						title:'您输入的短信验证码有误！'
					})
					
					
				}
				
				
			}
			
		}
	}
</script>

<style>
	.content{
		display:flex;
		flex-direction: column;
		justify-content: center;
	}
	.header{
		width:500upx;
		height:100upx;
		margin-top:100upx;
		margin-bottom:100upx;
		margin-left:auto;
		margin-right:auto;
	}
	.header input{
		width:500upx;
		height:100upx;
		margin-top:10upx;
		margin-bottom:10upx;
		border:solid;
		border-radius: 25px;
		
		
	}
	.main{
		display:flex;
		flex-direction: row;
		width:500upx;
		height:100upx;
		margin-top:100upx;
		margin-right:100upx;
		margin-left:auto;
		margin-right:auto;
	}
	.main input{
		width:200upx;
		height:100upx;
		
		border:solid;
		border-radius: 25px;
		
	}
	.main canvas{
		width:300upx;
		height:100upx;
		
	}
	.footer{
		display:flex;
		flex-direction: column;
		justify-content: center;
		width:500upx;
		height:250upx;
		margin-top:50upx;
		
		margin-left:auto;
		margin-right:auto;
	}
	.footer button{
		width:300upx;
		height:100upx;
		margin-top:10upx;
		margin-bottom:10upx;
		margin-left:auto;
		margin-right:auto;
	}
</style>
