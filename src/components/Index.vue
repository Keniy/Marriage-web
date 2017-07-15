<template>
	<div class="wrapper">
			<v-header></v-header>
			<v-sidebar></v-sidebar>
			<div class="content">
				<transition name="move" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
	</div>
</template> 
<script>
import vSidebar from './Sidebar.vue'
import vHeader from './Header.vue'

export default {
	name: 'index',
	components: {
		vSidebar,
		vHeader
	},
	data() {
		return {

		}
	}
}
</script>