<template>
	<div class="hello">
		<div>{{str}}</div>
		<div>
			<button @click="testQuery()">Get</button>
		</div>
	</div>
</template>

<script>
	import {
		queryAction
	} from "../api/test.js";

	export default {
		data() {
			return {
				str : 'test get data'
			}
		},
		methods: {
			testQuery() {
				let that = this;
				queryAction().then(res => {
					console.log(res.data);
					that.str = res.data;
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
