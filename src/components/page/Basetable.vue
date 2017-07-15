<template>
	<div>
		Basic Table
		
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
			<div class="block">
			    <el-form-item prop="currentDate">
				    <el-date-picker
				      v-model="ruleForm.currentDate"
				      @change="changeDate"
				      type="datetime"
				      placeholder="选择日期时间">
				    </el-date-picker>
			    </el-form-item>
		  	</div>

		  	<el-button type="primary" @click="submit('ruleForm')">Submit</el-button>
	  	</el-form>
	</div>
</template>
<script>
	// import Human from '../model/Human.js'
	export default {
		data() {
			return {
				ruleForm: {
					currentDate: null
				},
				rules: {
					currentDate: [{required: true, trigger: 'change', validator: (rule, value, callback) => {
						console.log(value)
						if(!value) return callback(new Error('Please Select'));

					}}]
				}
			}
		},
		methods: {
			changeDate(val) {
				this.ruleForm.currentDate = val;
			},
			submit(formName){
				this.$refs[formName].validate((valid) => {
		          if (valid) {
		            
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
			}
		}
	}
</script>
