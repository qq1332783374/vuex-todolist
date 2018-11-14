<template>
    <div class="todoList">
        <mheader></mheader>
        <addtodo></addtodo>
        <todo></todo>
        <done></done>
    </div>
</template>

<script>
//header
import mheader from './pages/mheader'
//addtodo
import addtodo from './pages/addtodo'
//todo
import todo from './pages/todo'
//done
import done from './pages/done'
export default {
    name:'todoList',
    components:{
        mheader,
        addtodo,
        todo,
        done
    }
}
</script>

<style>

</style>
