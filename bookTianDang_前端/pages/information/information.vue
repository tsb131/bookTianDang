<template>
	<view class="content">
		<view class="header">
			<label>个人信息完善</label>
		</view>
		<view class="main">
			<view class="input">
				<input  :value="phone_number" placeholder="不允许输入" disabled="true">
			</view>
			<view class="password">
				<input @blur="Writted1" placeholder="请输入密码" :type="password_or_not">
				<image  @click="ChangeShow" :src="iconImage"></image>
				
			</view>
			<view class="password">
				<input @blur="Writted2" placeholder="请确认密码" :type="password_or_not">
				<image @click="ChangeShow" :src="iconImage"></image>
			</view>
			<view class="input">
				<input @blur="Writted3" placeholder="请输入账号" type="text">
			</view>
			<view class="input">
				<input @blur="Writted4" placeholder="请输入邮箱">
			</view>
			
		</view>
		<view class="footer">
			<button @click="Clicked1">注册</button>
			<button @click="Clicked2">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone_number:'',
				iconImage:'/static/picture/password.png',
				password:'',
				password_confirm:'',
				account:'',
				email:'',
				show:false,
				password_or_not:'password'
			}
		},
		onLoad:function(option){
			console.log(option.phone_number)
			this.phone_number=option.phone_number
		},
		
		methods: {
			Writted1:function(event){
				this.password=event.target.value;
				
			},
			Writted2:function(event){
				this.password_confirm=event.target.value;
				
			},
			Writted3:function(event){
				this.account=event.target.value;
			},
			Writted4:function(event){
				this.email=event.target.value;
				
				
			},
			ChangeShow:function(){
				this.show=!this.show
				if(this.show==true){
					this.password_or_not=''
				}
				else{
					this.password_or_not='password'
				}
			},
			Clicked1:function(){
				if(this.password==''){
					uni.showToast({
						icon:'none',
						position:'bottom',
						title:'请输入密码'
					})
				}
				else if(this.password_confirm==''){
					uni.showToast({
						icon:'none',
						position:'bottom',
						title:'请确认密码'
					})
				}
				else if(this.password!=this.password_confirm){
					uni.showToast({
						icon:'none',
						position:'bottom',
						title:'两次输入的密码不相同'
					})
				}
				else if(this.account=''){
					uni.showToast({
						icon:'none',
						position:'bottom',
						title:'请输入账号名称'
					})
				}
				else{
					if(this.email==''){
						uni.showToast({
							icon:'none',
							position:'bottom',
							title:'输入邮箱可以接收本产品的信息以及找回密码'
						})
					}
					var str=this.email
					var loc=str.indexOf("@")
					if(str!=''&&(loc==-1||loc==0||loc==str.length-1)){
						uni.showToast({
							icon:'none',
							position:'bottom',
							title:'您输入的邮箱格式不对，请重新输入'
						})
					}
					else{
						//#ifndef H5
						 var u1='100.67.3.102:5000/register/register'
						//#endif
						//#ifdef H5
						var u1='http://localhost:5000/register/register'
						//#endif
						uni.request({
							url:u1,
							data:{
								phone_number:this.phone_number,
								password:this.password,
								account:this.account,
								email:this.email
							},
							header:{
							
								'Access-Control-Allow-Origin':'*',
								'Cache_Control':'no-cache',
								'Pragma':'no-cache',
								'Expires':0
							},
							method:'POST',
							success:(res)=>{
								if(res.data['message']!='success'){
									uni.showToast({
										icon:'none',
										position:'bottom',
										title:res.data['message']
									})
									
								}
								
								else{
									uni.showToast({
										icon:'none',
										position:'bottom',
										title:'注册成功，正在跳转登录页面'
									})
									str='/pages/login/login?phone_number=t1&password=t2'
									str=str.replace(/t1/,this.phone_number).replace(/t2/,this.password)
									uni.redirectTo({
										
										url:str
									})
								}
							}
						})
					}
				}
			}
		},
		Clicked2:function(){
			url.redirectTo({
				url:'/pages/login/login'
			})
			
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
		margin-top:0upx;
		margin-bottom:10upx;
		margin-left:auto;
		margin-right:auto;
		font-family: 'Courier New', Courier, monospace;
		color:#C8C7CC;
	}
	.header label{
		width:1000upx;
		height:500upx;
		font-size:130upx;
	}
	.main{
		display:flex;
		flex-direction: column;
		justify-content: center;
		height:500upx;
		margin-top:100upx;
		margin-bottom:10upx;
		margin-left:auto;
		margin-right:auto;
	}
	.input{
		height:90upx;
		margin-top:5upx;
		margin-bottom:5upx;
		margin-left:auto;
		margin-right: auto;
	}
	
	.input input{
		height:60upx;
		border: solid;
		border-radius: 25%;
	}
	.password{
		height:60upx;
		margin-top:5upx;
		margin-bottom:5upx;
		margin-left:auto;
		margin-right: auto;
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		border:solid;
		border-radius: 25%;
		
	}
	.password image{
		width:30upx;
		height:30upx;
	}
	.footer{
		display:flex;
		flex-direction: column;
		justify-content: center;
		margin-top:5upx;
		margin-bottom:10upx;
		margin-left:auto;
		margin-right:auto;
	}
	.footer button{
		width:150upx;
		height:100upx;
		margin-top:5upx;
		margin-bottom:5upx;
		margin-left:auto;
		margin-right:auto;
	}
</style>
