<template>
	<view class="content">
		<view v-if="showLogin" class="header">
			<input @blur="Writted1" :value="phone_number" placeholder="手机号/用户名/邮箱">
			<input @blur="Writted2" :value="password" type="password" placeholder="密码">
		</view>
		
		<view v-if="showCode" class="header">
			<canvas class="Code" canvas-id="Code"></canvas>
		</view>
		<view v-if="showFindingPass" class="header">
			<view class="header1">
				<input @blur="Writted3" placeholder="请输入注册账号时所用的邮箱">
			</view>
			<view class="header2">
				<input @blur="Writted4" placeholder="请输入收到的验证码">
				<button @click="Clicked5">{{text}}</button>
			</view>
			<view class="header3">
				<input @blur="Writted5" placeholder="请输入设置的密码">
				<input @blur="Writted6" placeholder="请确认密码">
			</view>
			<view class="header4">
				<button @click="Clicked6">修改密码</button>
			</view>
		</view> 
		<view class="main">
			<button @click="Clicked4">密码登录</button>
			<!--#ifdef MP-WEIXIN -->
			<button @click="Clicked0">微信登录</button>
			<!--#endif -->
			<!--#ifndef MP-WEIXIN  -->
			<button @click="Clicked1">短信验证码快捷登录</button>
			<!--#endif -->
			<!--#ifdef H5 -->
			<button @click="Clicked2">客户端扫码登录</button>
			<!--#endif-->
			<button @click="Clicked3">忘记密码</button>
		</view>
		<view class="footer">
			<button @click="Load">登录</button> 
		</view>
		
	</view>
</template>

<script>
	import drawQrcode from "../../utils/weapp.qrcode.esm.js"
	export default {
		data() {
			return {
				phone_number:'',
				password:'',
				showCode:false,
				showLogin:true,
				showFindingPass:false,
				
				text:'发送验证码'
			}
		},
		onLoad:function(option){
			this.phone_number=option.phone_number
			this.password=option.password
		},
		methods: {
			Writted1:function(event){
				this.phone_number=event.target.value
			},
			Writted2:function(event){
				this.password=event.target.value
			},
			Writted3:function(event){
				var value=event.target.value
				var i=value.indexOf('@')
				if(i==0||i==value.length-1||i==-1){
					uni.showToast({
						icon:'None',
						position:'bottom',
						title:'您输入的邮箱格式有误，请重新输入！'
					})
				}
				else uni.setStorage({
					key:'email',
					data:value
				})
				
			},
			Writted4:function(event){
				uni.setStorage({
					key:'confirm_code',
					data:event.target.value
				})
			},
			Writted5:function(event){
				uni.setStorage({
					key:'password',
					data:event.target.value
				})
			},
			Writted6:function(event){
				uni.setStorage({
					key:'password_confirm',
					data:event.target.value
				})
			},
			Clicked0:function(event){
				
			},
			Clicked2:function(event){
				this.showLogin=false
				this.showFindingPass=false
				this.showCode=true	
				var str=this.rn()
				drawQrcode({
				  x:0,
				  y:0,
				  width: 200,
				  height: 200,
				  canvasId: 'Code',
				
				  text: str,
			      
				  
				})
				//#ifndef H5
				var u1='http://100.67.3.102:5000/login/Code'
				//#endif
				//#ifdef H5
				var u1='http://localhost:5000/login/Code'
				//#endif
				uni.request({
					url:u1,
					data:{
						'str':str
					},
					header:{
					    //'content-type': 'application/x-www-form-urlencoded'
						
					},
					method:'POST',
					success:(res)=>{
						var str1="亲爱的t1，你好"
						str1=str1.replace(/t1/,res.data['account'])
						if(res.data['message']!="success"){
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
								title:str1
							})
						}
						var str2='/pages/bookself/bookself?account_info=t1'
						uni.redirectTo({
							url:str2.replace(/t1/,res.data['account'])
						})
					}
				})
				

			},
			rn:function(event){
				var pool=['A','B','C','D','E','F','G','Q','W','R','T','Y','U','I','O','P','S','H','J','K','L','Z','X','V','N','M',
				'0','1','2','3','4','5','6','7','8','9']
				var str=''
				for(var i=0;i<26;i++){
					var index=Math.floor(Math.random()*26-1)
					str+=pool[index]
				}
				console.log(str)
				return str
				
			},
			Clicked3:function(event){
				this.showCode=false
				this.showLogin=false
				this.showFindingPass=true
			},
			Clicked5:function(event){
				//这里暂时不实现倒计时
				//#ifndef H5
				var u1='100.67.3.102:5000/login/email_code'
				//#endif
				//#ifdef H5
				var u1='http://localhost:5000/login/email_code'
				//#endif
				uni.request({
					url:u1,
					data:{
						email:uni.getStorageSync('email')
					},
					method:'POST',
					success:(res)=>{
						if(res.data['message']!='success'){
							uni.showToast({
								icon:'None',
								position:'bottom',
								title:res.data['message']
							})
						}
						else{
							uni.showToast({
								icon:'None',
								position:'bottom',
								title:'验证码已发送，请注意查收！'
							})
							uni.setStorage({
								key:'confirm_code_true',
								data:res.data['confirm_code']
							})
						}
					}
				})
			},
			Clicked6:function(event){
				if(uni.getStorageSync('confirm_code')!=uni.getStorageSync('confirm_code_true')){
					uni.showToast({
						icon:'None',
						position:'bottom',
						title:'您输入的验证码有误，请重新输入！'
					})
				}
				else if(uni.getStorageSync('password')!=uni.getStorageSync('password_confirm')){
					uni.showToast({
						icon:'None',
						position:'bottom',
						title:'两次输入的密码不一致，请重新输入！'
					})
				}
				else{
					//#ifndef H5
					var u1='100.67.3.102:5000/login/change_password'
					//#endif
					//#ifdef H5
					var u1='http://localhost:5000/login/change_password'
					//#endif
					uni.request({
						url:u1,
						data:{
							email:uni.getStorageSync('email'),
							password:uni.getStorageSync('password')
						},
						methods:'POST',
						success:(res)=>{
							if(res.data['message']!='success'){
								uni.showToast({
									icon:'None',
									position:'bottom',
									title:res.data['message']
								})
							}
							else{
								uni.showToast({
									icon:'None',
									position:'bottom',
									title:'修改密码成功！'
								})
							}
						}
					})
				}
			},
			Load:function(event){
				//#ifndef H5
				var u1='100.67.3.102:5000/load/load'
				//#endif
				//#ifdef H5
				var u1='http://localhost:5000/load/load'
				//#endif
				uni.request({
					url:u1,
					data:{
						phone_number:this.phone_number,
						password:this.password
					},
					
					method:'POST',
					success:(res)=>{
						if(res.data['message']=='success'){
							uni.showToast({
								icon:'none',
								position:'bottom',
								title:res.data['message']
							})
							let str1='/pages/bookself/bookself?account_info=t1'
							uni.redirectTo({
								url:str1.replace(/t1/,this.phone_number)
							})
						}
						else{
							uni.showToast({
								icon:'none',
								position:'bottom',
								title:res.data['message']
							})
						}
					}
				})
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
		display:flex;
		flex-direction: column;
		justify-content: center;
		height:400upx;
		width:1200upx;
		margin-top:200upx;
		margin-bottom:50upx;
		margin-left:auto;
		margin-right:auto;
	}
	.header input{
		width:1200upx;
		height:100upx;
		margin-top:5upx;
		margin-left:5upx;
		margin-left:auto;
		margin-right:auto;
		border:solid;
		border-radius: 25%;
	}
	.header1{
		width:1200upx;
		height:65upx;
		margin-top:10upx;
		margin-bottom:10upx;
		margin-left:auto;
		margin-right:auto;
	}
	.header1 input{
		border:solid;
		border-radius: 25%;
	}
	.header2{
		width:1200upx;
		height:65upx;
		margin-top:10upx;
		margin-bottom:10upx;
		margin-left:auto;
		margin-right:auto;
		display:flex;
		flex-direction:row ;
		justify-content: space-between;
	}
	.header2 input{
		width:1000upx;
		height:65upx;
		border:solid;
		border-radius: 25%;
	}
	.header2 button{
		width:150upx;
		height:65upx;
		
	}
	.header3{
		width:1200upx;
		height:140upx;
		margin-top:10upx;
		margin-right:10upx;
		margin-left:auto;
		margin-right:auto;
		display:flex;
		flex-direction: column;
		justify-content: center;
	}
	.header3 input{
		width:1200upx;
		height:80upx;
		margin-top:5upx;
		margin-bottom:5upx;
		margin-left:auto;
		margin-right:auto;
		border: solid;
		border-radius: 25%;
	}
	.header4{
		width:1200upx;
		height:50upx;
		margin-top:10upx;
		margin-bottom:10upx;
		margin-left:auto;
		margin-right:auto;
	}
	.header4 button{
		width:100upx;
		height:50upx;
		margin-left:550upx;
		margin-right:550upx;
		font-size:10upx;
	}
	.Code{
		width:400upx;
		height:400upx;
		margin-left:auto;
		margin-right:auto;
	}
	.main{
		width:1200upx;
		height:50upx;
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top:5upx;
		margin-bottom:150upx;
		margin-left:auto;
		margin-right:auto;
	}
	.main button{
		/*border:none;*/
		font-size:20%;
		width:250upx;
		height:50upx;
		
	}
	.main button:after{
		border:none
	}
	.footer{
		
		margin-top:150upx;
		margin-bottom:15upx;
		margin-left:auto;
		margin-right:auto;
	}
</style>
