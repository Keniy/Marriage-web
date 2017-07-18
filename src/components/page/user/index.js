
export default {
	created() {
		this.init();
	},
	data() {
		return {
			urls: {
				list: 'api/users/list'
			},
			pageNo: 1,
			pageSize: 10,
			total: 0,
			tableData: []
		}
	},
	methods: {
		init() {
			this.$http.get(this.urls.list, null).then((response) => {
				this.tableData = response.data;
			});
		},
		search() {
			this.init();
		}
	}
}