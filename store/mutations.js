export default {
    updateData (state,payload) {
        // 变更状态
        state.data = payload.data
        console.log(state.data);
    }
}