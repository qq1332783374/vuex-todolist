<template>
    <div class="todo">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="代办事项" name="1">
                <div class="item clearfix" v-for="(item,index) in getTodo" :key="index">
                    {{item.content}} <span class="pull-right"><el-button  size="mini" @click="todoDone(index)">完成</el-button></span>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name:'todo',
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      todoDone(index){
        this.$confirm('确定完成了吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {

            this.$store.dispatch('doneItem',this.getTodo[index])
            this.getTodo.splice(index,1)
            this.$message({
                type: 'success',
                message: '好好保持!'
            });
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '继续努力完成'
          });          
        });
      }
    },
    computed:{
        getTodo(){
            return this.$store.getters.getTodoItem
        }
    }
}
</script>

<style scoped>
.todo{
    padding: 5px;
}
.item{
    border-bottom: 1px solid #ddd;
    margin-bottom: 15px;
    padding: 5px 0 5px 0;
}
</style>
