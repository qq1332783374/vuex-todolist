<template>
    <div class="done">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="完成事项" name="1">
                <div class="item clearfix" v-for="(item,index) in getDone" :key="index">
                    <del>{{item.content}}</del>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name:'done',
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    },
    computed:{
        getDone(){
            return this.$store.getters.getDoneItem
        }
    }
}
</script>

<style scoped>
.done{
    padding: 5px;
}
.item{
    border-bottom: 1px solid #ddd;
    margin-bottom: 15px;
    padding: 5px 0 5px 0;
}
</style>
