export default {
    updatebanner (context,payload) {
        //返回promise给触发的store.dispatch
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                context.commit('upDatebanner',payload);
                resolve("async over");
            },2000);
        });
            },
    updatehot ({commit},data) {
        // 变更状态
        commit("upDatehot",data)
    },
    updateplan ({commit},data) {
        // 变更状态
        commit("upDateplan",data)
    },
    updatenotice ({commit},data) {
        // 变更状态
        commit("upDatenotice",data)
    }
}