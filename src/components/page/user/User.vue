<template>
	<div id="user" class="table">
		<div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="handle-box">
        	<el-input class="handle-input mr10" placeholder="请输入用户名搜索"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>

		<el-table :data="tableData" border highlight-current-row style="width: 100%">
			<el-table-column label="编号">
				<template scope="scope">
					{{++scope.$index}}
				</template>
			</el-table-column>
			<el-table-column prop="username" label="用户名"></el-table-column>
			<el-table-column prop="nickName" label="昵称"></el-table-column>
			<el-table-column prop="email" label="邮箱"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
			<el-table-column prop="mobilePhone" label="手机"></el-table-column>
			<el-table-column prop="wechat" label="微信"></el-table-column>
		</el-table>
	</div>
</template>
<script src="./index.js"></script>
<style scoped>
.handle-box{
    margin-bottom: 20px;
}
.handle-del{
    border-color: #bfcbd9;
    color: #999;
}
.handle-select{
    width: 120px;
}
.handle-input{
    width: 300px;
    display: inline-block;
}
</style>