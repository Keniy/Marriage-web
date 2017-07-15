
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
			let _self = this;
			_self.$axios.get(_self.urls.list, null).then((response) => {
				_self.tableData = response.data;
			});
		},
		search() {
			this.init();
		}
	}
}