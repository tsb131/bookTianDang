<template>
    <view class="content">
		<view class="header">
			<image :src="imageURL"></image>
		</view>
      	<view class="main">
			<button class="button" @click="Clicked1" type="default">登录</button>
		
			<button class="button"  @click="Clicked2" type="default">注册</button>
			<button class="button" @click="Clicked3">扫码</button>
		</view>
		
	    
		
	
    </view>
</template>

<script>
	export default {
		data(){
			return{
				imageURL:'/static/picture/logo.png'
			}
			
		},
		onLoad() {

		},
		methods: {
             Clicked1:function(event){
				 uni.redirectTo({
				 	url:'/pages/login/login'
				 })
			 },
			 Clicked2:function(event){
				 uni.redirectTo({
				 	url:'/pages/register/register'
				 })
			 },
			 Clicked3:function(event){
				 uni.redirectTo({
					 url:'/pages/scanCode/scanCode'
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
		width:160upx;
		height:160upx;
		box-shadow:0upx 0upx 60upx 0upx rgba(0,0,0,0.1);
		border-radius: 50%;
		margin-top:128upx;
		margin-bottom:72upx;
		margin-left:auto;
		margin-right:auto;
	}
	.header image{
		width:160upx;
		height:160upx;
		border-radius: 50%;
	}
	.main{
		width:200upx;
		height:80upx;
		
		border-radius: 25%;
		margin-top:200upx;
		margin-bottom:10upx;
		margin-left:auto;
		margin-right:auto;
	}
	.button{
		width:200upx;
		height:80upx;
		border-radius:25%;
		margin-top:10upx;
		margin-bottom:10upx;
	}
</style>
