import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    todo:[],
    done:[]
}

const getters = {
    getTodoItem(){
        return state.todo
    },
    getDoneItem(){
        return state.done
    }
}

const actions = {
    addtodoItem(ctx,obj){
        ctx.commit('addtodoItem',obj)
    },
    doneItem(ctx,obj){
        ctx.commit('doneItem',obj)
    }
}

const mutations = {
    addtodoItem(state,obj){
        state.todo.push(obj)
    },
    doneItem(state,obj){
        state.done.push(obj)
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})