<template>
	<view class="content">
		<view class="header">
			<view class="t1">{{book_title}}</view>
			<view class="t2">作者：{{book_author}}</view>
		</view>
		<view class="main">
			<view class="description">{{book_description}}</view>
			<view class="direction">
				<button @click="Clicked1">开始阅读</button>
				<button @click="Clicked2">加入书架</button>
				<button @click="Clicked3">查看目录</button>
			</view>
			<view class="recomation">
				<view class="title">猜你喜欢</view>
				
				<view class="books">
					<view v-for="(item,index) in recomadations" :key="index" class="book">
						<navigator :url='"/pages/book/book?book_id="+item.id+"&book_pointer="+item.pointer' class="naviator">
							<image class="book_cover" :src="item.cover"></image>
							<view class="book_title">{{item.title}}</view>
						</navigator>
						
					</view>
				</view>
				<view class="change" @click="Clicked4">换一批</view>
			</view>
		</view>
		<view class="footer">
			<view class="comments">
				<view v-for="(item,index) in conmments" :key="index" class="comment">
					<view class="user" @click="Clicked5">
						<image class="sculpture" @click="Clicked6" :src="item.sculpture"></image>
						<text>{{item.user_name}}</text>
					</view>
					<view class="infomation" @click="Clicked6">{{item.comment}}</view>
					<view class="more">
						<view v-for="(t1,index) in item.more_conmments" :key="index" class="conmment_small">
							<view class="user" @click="Clicked5">
								<image class="sculpture" @click="Clicked6" :src="t1.sculpture"></image>
								<text>{{t1.user_name}}</text>
							</view>
							<view class="infomation" @click="Clicked6">{{t1.comment}}</view>
						</view>
					</view>
				</view>
				<view class="load" @click="Clicked7">查看更多评论</view>
			</view>
			<view class="to_conmment">
				<textarea @blur="Writted1" placeholder="请输入您的想法"></textarea>
				<button @click="Clicked8">发布</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				book_id:'',
				book_pointer:'',
				book_title:'',
				book_cover:'',
				book_description:'',
				book_author:'',
				book_address:''
				
			}
		},
		onLoad:function(option){
			this.book_id=option.book_id
			this.book_pointer=option.book_pointer
			uni.request({
				url:'http://localhost:5000/book/book_info',
				data:{
					book_id:this.book_id
				},
				method:'POST',
				success:(res)=>{
					this.book_title=res.data['book_title']
					this.book_description=res.data['book_description']
					this.book_address=res.data['book_address']
					this.book_author=res.data['book_author']
				}
			})
		},
		methods: {
			Clicked1:function(){
				var str1="/pages/read/read?book_id=t1&book_pointer=t2"
				uni.redirectTo({
					url:str1.replace(/t1/,this.book_id).replace(/t2/,this.book_pointer)
				})
			}
		}
	}
</script>

<style>
	.content{
		width:1500upx;
		overflow:scroll;
		display:flex;
		flex-direction: column;
		justify-content: center;
		margin-left:auto;
		margin-right:auto;
		border:solid;
	}
	.header{
		width:1500upx;
		height:120upx;
		margin-top:10upx;
		margin-right:10upx;
		margin-left:auto;
		margin-right:auto;
		text-align: center;
		border:solid;
	}
	.t1{
		width:200upx;
		height:60upx;
	     border:solid;
		margin-top:10upx;
		margin-bottom:10upx;
		margin-left:auto;
		margin-right:auto;
	}
	.t2{
		border:solid;
		width:200upx;
		height:20upx;
		margin-top:10upx;
		margin-bottom:10upx;
		margin-left:auto;
		margin-right:auto;
		font-size:3upx;
		
	}
	.main{
		width:1500upx;
		height:800upx;
		border:solid;
		margin-top:10upx;
		margin-bottom:10upx;
		margin-left:auto;
		margin-right:auto;
		display:flex;
		flex-direction: column;
		justify-content: center;
	}
	.description{
		border:solid;
		width:1500upx;
		height:200upx;
		margin-top:25upx;
		margin-bottom:25upx;
		margin-left:auto;
		margin-right:auto;
	}
	.direction{
		border:solid;
		width:1500upx;
		height:100upx;
		margin-top:0;
		margin-bottom:50upx;
		margin-left:auto;
		margin-right:auto;
		display:flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
</style>
