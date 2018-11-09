export default {
    upDatebanner (state,payload) {
        // 变更状态
        state.bannerList = payload.data
        console.log(state.bannerList);

    },
    upDatehot (state,data) {
        // 变更状态
        state.hotList = data
    },
    upDateplan (state,data) {
        // 变更状态
        state.planList = data
    },
    upDatenotice (state,data) {
        // 变更状态
        state.noticeList = data
    },
}