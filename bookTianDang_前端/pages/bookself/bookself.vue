<template>
	<view :style="header_style" class="content">
		<view class="header">
			<label>我的书架</label>
		</view>
		<view class="main">
			
			<view class="book" v-for="(item,index) in books" :key="index">
				<navigator :url='"/pages/book/book?book_id="+item.id+"&book_pointer="+item.pointer' class="naviator">
					<image class="book_cover" :src="item.cover"></image>
					<view class="book_title">{{item.title}}</view>
				</navigator>
				
			</view>
				
			
		</view>
		<view class="footer">
			<button @click="Clicked1">我的书架</button>
			<button @click="Clicked2">书城</button>
			<button @click="Clicked3">写作</button>
			<button @click="Clicked4">设置</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account_info:'',
				header_style:'',
				books:[]
				
				
				
				
				
			}
		},
		onLoad:function(option){
			let that=this
			if(option==null){
				uni.showToast({
					icon:'None',
					position:'bottom',
					title:'没有登陆，正在为您跳转登陆页面！'
				})
				uni.redirectTo({
					url:'/pages/login/login'
				})
			}
			else{
				this.account_info=option.account_info
				uni.request({
					url:'http://localhost:5000/book/bookself',
					method:'POST',
					data:{
						account_info:this.account_info
					},
					success:(res)=>{
						if(res.data['message']!='success'){
							uni.showToast({
								icon:'None',
								position:'bottom',
								title:res.data['message']
							})
						}
						else{
							
							that.books=res.data['info']
							
						}
					}
				})
	           
			}
		},
		onReady:function(){
			let that=this
			const res=uni.getSystemInfoSync()
			that.header_style='height:'+res.windowHeight+'px;'+'width:'+res.windowWidth+'px'
			console.log(that.header_style)
			
		},
		onResize:function(){
			let that=this
			const res=uni.getSystemInfoSync()
			that.header_style='height:'+res.windowHeight+'px;'+'width:'+res.windowWidth+'px'
			console.log(that.header_style)
			
				
			
		},
		methods: {
			Clicked1:function(event){
				uni.redirectTo({
					url:'#'
				})
			},
			Clicked2:function(event){
				
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
		 width:100%;
		 height:8%;
		 color:#808080;
		 border:solid;
		 margin-top:1%;
		 margin-bottom:1%;
		 margin-left:auto;
		 margin-right:auto;
	 }
	 .header label{
		
		 color:#333333;
		 width:10%;
		 height:16%;
		 margin-top:45%;
		 margin-bottom:45%;
         margin-left:42%;
		 margin-right:42%;
	 }
	 .main{
		 border:solid;
		 width:100%;
		 height:78%;
		 margin-top:1%;
		 margin-bottom:1%;
		 margin-left:auto;
		 margin-right:auto;
		 overflow: scroll;
		
	 }
	 
	
	 .book{
		 display:inline-block;
		 border:solid;
		 width:300upx;
		 height:500upx;
		 margin-top:50upx;
		 margin-bottom:50upx;
		 margin-left:50upx;
		 margin-right:50upx;
	 }
	 .navigator{
		
		 width:300upx;
		 height:500upx;
		 margin:0;
		 display:flex;
		 flex-direction: column;
		 
	 }
	.book_cover{
		width:300upx;
		height:350upx;
		margin-top:0;
		margin-bottom:25upx;
	}
	 .book_title{
		 width:300upx;
		 height:100upx;
		 margin-top:12upx;
		 margin-bottom:13upx;
		 text-align: center;
	 }
	 .footer{
		 width:100%;
		 height:8%;
		 display:flex;
		 flex-direction: row;
		 justify-content: space-between;
		 margin-top:1%;
		 margin-bottom:1%;
		 margin-left:auto;
		 margin-right:auto;
	 }
	 .footer button{
		 width:20%;
		 height:100%;
		 
	 }
</style>
