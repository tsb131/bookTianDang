<template>
	<!--ifdef APP-PLUS -->
	<view>
		<image @click="Clicked1" :src="scanCodeImage"></image>
	</view>
	<!--endif -->
</template>

<script>
	export default {
		data() {
			return {
				scanCodeImage:'/static/picture/scan.png',
				account_info:'13187246069',
				text:''
			}
		},
		methods: {
			Clicked1:function(event){
				uni.scanCode({
					onlyFromCamera:true,
					success:function(res){
						this.text=res.result
					}
				})
				var u1='http://100.67.3.102:5000/login/Code_confirm'
				uni.request({
					url:u1,
					data:{
						account_info:this.account_info,
						str:this.text
					},
					header:{
						
					},
					method:'POST',
					success:(res)=>{
						uni.showToast({
							icon:'none',
							position:'bottom',
							title:res.data['message']
						})
					}
				})
				
			}
		}
	}
</script>

<style>

</style>
