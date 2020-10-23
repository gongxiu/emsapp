<template>
	<view class="content">
		<view class="btn-row">
			<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
			<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {getDashboard} from'../../services/home'
	export default {
		computed: {
			...mapState(['hasLogin', 'forcedLogin'])
		},
		mounted() {
			this.getData()
		},
		methods: {
			...mapMutations(['logout']),
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			bindLogout() {
				this.logout();
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/login',
					});
				}
			},
			getData(){
				getDashboard({userId: 10062739965568,
      tokenId: 16688287678848}).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style>

</style>
