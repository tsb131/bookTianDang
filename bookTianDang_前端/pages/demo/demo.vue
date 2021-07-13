<template>
	<view>
		<scroll-view class="scroll" scroll-left="0" scroll-with-animation scroll-y>
			<view v-for="(item,index) in d1" :key="index">{{item}}</view>
		</scroll-view>    
			
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				d1:['wdefvrgbt','fergbynyuun','efvtynum','retrytnutm','swvrrnyjm','qswcettynyu','ewfjuntnwe','cevtmuigthsa','efervuvvc']
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.scroll{
		display:flex;
	}
</style>
