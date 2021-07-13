<template>
	<view class="content">
		<view  v-if="showheader" class="header">
			<view @click="Clicked1" class="back">
				<image class="t1" src="/static/picture/back.png"></image>
			</view>
			<view class="title">{{book_title}}</view>
			<view  @click="Clicked2" class="auto_read">
				<image class="t2" src="/static/picture/auto.png"></image>
			</view>
			<view @click="Clicked3" class="listenbook">
				<image class="t3" src="/static/picture/listen.png"></image>
			</view>
			<view @click="Clicked4" class="more">
				<image class="t4" src="/static/picture/more.png"></image>
			</view>
		</view>
		<view v-if="showMore" class="selection">
			<button @click="Clicked5">添加书签</button>
			<button @click="Clicked6">图书详情</button>
			<button @click="Clicked7">书贴吧</button>
		</view>
		<view @click="Clicked14" class="main">{{book_content}}</view>
		<view v-if="showfooter" class="footer">
			<view class="top">
				<button @click="Clicked8">上一章</button>
				<slider min="0" :max="page_length" step="1" :value="book_pointer" @changing="Changed1" show-value></slider>
				<button @click="Clicked9">下一章</button>
			</view>
			<view class="bottom">
				<button class="table" @click="Clicked10">目录</button>
				<button class="evening" @click="Clicked11">{{evening}}</button>
				<button class="download" @click="Clicked12">全书下载</button>
				<button class="setting" @click="Clicked13">设置</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showheader:false,
				showfooter:false,
				showMore:false,
				book_title:'',
				book_content:'',
				page_length:'',
				book_pointer:'0',
				book_id:'1',
				evening:'夜间模式'
			}
		},
		onLoad:function(option){
			//this.book_id=option.book_id
			//this.book_pointer=option.book_pointer
			uni.request({
				url:'http://localhost:5000/read/read',
				data:{
					book_id:this.book_id,
					book_pointer:this.book_pointer
				},
				method:'POST',
				success:(res)=>{
					this.book_content=res.data['book_content']
					this.book_title=res.data['book_title']
					this.page_length=res.data['page_length']
				}
			})
		},
		methods: {
			Clicked1:function(){
				var str1='/pages/book/book?book_id=t1&book_pointer=t2'
				uni.redirectTo({
					url:str1.replace(/t1/,this.book_id).replace(/t2/,this.book_pointer)
				})
			},
			Clicked2:function(){
				uni.pageScrollTo({
					scrollTop:1,
					duration:100
				})
			},
			Clicked14:function(){
				this.showheader=!this.showheader
				this.showfooter=!this.showfooter
				if(!this.showheader)this.showMore=false
			},
			Clicked4:function(){
				this.showMore=!this.showMore
				if(!this.showheader)this.showMore=false
			}
		}
	}
</script>

<style>
	.content{
		width:1200upx;
		height:800upx;
		left:50upx;
		right:50upx;
		top:10upx;
		bottom:10upx;
		border:solid;
		position:absolute;
	}
	.header{
		
		width:1200upx;
		height:100upx;
		position:absolute;
		top:10upx;
		bottom:10upx;
		left:auto;
		display:flex;
		flex-direction: row;
		border:solid;
		background-color:#007AFF;
		opacity: 1;
	}
	.back{
		width:180upx;
		height:100upx;
		margin-left:10upx;
		margin-right:10upx;
		
	}
	.t1{
		width:100upx;
		height:100upx;
		margin-left:40up;
		margin-right:40upx;
	}
	.title{
		width:180upx;
		height:100upx;
		margin-left:10upx;
		margin-right:10upx;
		text-align: center;
		font-size:70upx;
		font-weight: 200;
		
	}
	.auto_read{
		width:180upx;
		height:100upx;
		margin-left:210upx;
		margin-right:10upx;
		
	}
	.t2{
		width:100upx;
		height:100upx;
		margin-left:40upx;
		margin-right:40upx;
	}
	.listenbook{
		width:180upx;
		height:100upx;
		margin-left:10upx;
		margin-right:10upx;
	}
	.t3{
		width:100upx;
		height:100upx;
		margin-left:40upx;
		margin-right:40upx;
	}
	.more{
		width:180upx;
		height:100upx;
		margin-left:10upx;
		margin-right:10upx;
	}
	.t4{
		width:100upx;
		height:100upx;
		margin-left:40upx;
		margin-right:40upx;
	}
	.selection{
		position:absolute;
		
		top:100upx;
		left:1000upx;
		width:200upx;
		height:300upx;
		display:flex;
		flex-direction: column;
		justify-content: center;
	}
	.selection button{
		width:200upx;
		height:80upx;
		margin-top:10upx;
		margin-bottom:10upx;
	}
	.main{
		
		position:absolute;
		top:50upx;
		left:100upx;
		width:1000upx;
		height:700upx;
		border:solid;
		overflow:scroll;
	}
	.footer{
		
		position:absolute;
		top:600upx;
		left:100upx;
		justify-content: center;
		width:1000upx;
	    height:200upx;
	}
	.top{
		width:1000upx;
		height:80upx;
		margin-top:10upx;
		margin-bottom:10upx;
		display:flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.bottom{
		width:1000upx;
		height:80upx;
		margin-top:10upx;
		margin-bottom:10upx;
		display:flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
