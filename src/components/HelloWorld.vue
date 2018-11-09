<template>
  <div class="hello">
    <img :src="imgUrl+'logo.png'" alt="">
    <h1>1.全局图片路径前缀地址为:&nbsp{{ imgUrl }}</h1>
    <div></div>
    <h2>2.SCSS运行正常,css全局图片路径已引入</h2>
    <h2>3.Vuex--{{ data }}</h2>
    <h2>共3行,JQ 及 组件库 看需求</h2>
  </div>
</template>

<script>

import { mapGetters,mapMutations ,mapState,mapActions} from 'vuex';

export default {
  name: 'HelloWorld',

  data () {
    return {
      imgUrl : this.GLOBAL.imgUrl,
      changeData : {'data':'changeData'}
    }
  },

  computed:{
    ...mapGetters([
      'data'
    ])
  },

  methods : {
    ...mapMutations([
      'updateData'
    ]),
  },
  mounted() {
    this.updateData(this.changeData)
  },
	metaInfo: {
	    title: '我是一个title',
	    meta: [
	        {
	            name: 'keywords',
	            content: '关键字1,关键字2,关键字3'
	        },
	        {
	            name: 'description',
	            content: '这是一段网页的描述'
	        }
	    ]
	}
}
</script>

<style lang='scss'>
.hello {
  text-align: center;
  margin-top: 50px;
  background:$imgUrl;
  div{
    width: 200px;height: 200px;
    margin: 0 auto;
    background: url($imgUrl+'logo.png')
  }
}
</style>
