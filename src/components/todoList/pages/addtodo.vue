<template>
    <div class="addtodo">
        <el-row :gutter="20">
            <el-col :span="16">
                <el-input v-model="input" placeholder="添加代办" ></el-input>
            </el-col>
            <el-col :span="8">
                <el-button @click="addItem">添加</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:"addtodo",
    data(){
        return{
            input: '',
            addtodoItem:[],
            num:0
        }
    },
    methods:{
        addItem(){
            if(this.input.length!=0){
                var obj = {
                    id:this.num++,
                    content:this.input
                }
                this.$store.dispatch('addtodoItem',obj)
                this.$message({
                    showClose: true,
                    message: '添加成功',
                    type: 'success'
                });
                this.input = ""
            }else{
                 this.$message({
                    showClose: true,
                    message: '请输入代办',
                    type: 'warning'
                });
            }
        }
    }
}
</script>

<style scoped>
.addtodo{
    padding: 5px;
}
</style>

