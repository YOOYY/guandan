<template>
    <div>
        <v-header></v-header> 
        <v-sidebar></v-sidebar>
        <div class="main container">
            <v-downbox></v-downbox>
            <v-bannerbox></v-bannerbox>
            <v-notice></v-notice>
        </div>
         <img :src="imgUrl+'title1.png'" alt="活动公告" class="indextitle">
        <v-huodong class="container"></v-huodong>
        <img :src="imgUrl+'title2.png'" alt="游戏特色" class="indextitle">
        <v-laybox></v-laybox>
        <v-footer></v-footer>
        <div class="index"></div>
    </div>
</template>

<script>

import Header from '../share/Header.vue';
import indexlaybox from '../share/slide.vue';
import downbox from '../share/downbox.vue';
import bannerbox from '../share/bannerbox.vue';
import notices from '../share/notice.vue';

import Sidebar from '../share/Sidebar.vue';
import Footer from '../share/Footer.vue';
import huodong from '../share/huodong.vue';

import { mapGetters,mapMutations ,mapState,mapActions} from 'vuex';

export default {
  name: 'Index',
  data () {
    return {
        imgUrl:this.GLOBAL.imgUrl,
        baseUrl:this.GLOBAL.baseUrl,
        gameUrl:this.GLOBAL.gameUrl,
        version:this.GLOBAL.version,
        slides : [

        ],

    }
  },

  computed:{
      box1:function(){
          return this.Laybox[0];
      },
      box2:function(){
          return this.Laybox[1];
      },
      ...mapGetters([
        'nowIndex',
        'nowIndex2'
    ])
  },
  mounted() {
  },
  methods:{
    goto (index) {
        this.upnowIndex(index);
    },
    goto2 (index) {
        this.upnowIndex2(index);
    },
    //   checkchannel:() => {
    //       this.$route.query.channel?1000:1000
    changeCode(el,index) {
        this[el]=!this[el];
    },
    changelaybox(el,ind) {
        var arr=this[el];
            for(var index in arr){
                arr.splice(index, 1, false)
            }
        arr.splice(ind, 1, true);
    },
    getData(name,start,end,channel){
        var serverUrl = 'http://localhost:3000/';
        var url = serverUrl+name+'/do'+name+'/'+start+'/'+end+'/'+channel;
        //var url = 'http://localhost:3000/notices/donotices/0/8/28';
        this.$http.get(url).then((response) =>{
            this[name] = response.body;
        },(error) => {
            this[name] = [];
        })
    },
    test(){
        // this.upDatebanner(this.banner);
        // this.upDatehot(this.hotActivity);
        // this.upDateplan(this.notices);
        // this.upDatenotice(this.plan);
        console.log(this.bannerList)
    },
    ...mapMutations([
      'upnowIndex',
      'upnowIndex2',
      
      // 映射 this.increment() 为 this.$store.commit('increment')
    ]),
    updatebanner(data){
        let amount = {
            type: 'updatebanner',
            data: data
        }
        this.$store.dispatch(amount).then((result) => {
            console.log(amount);
        });
    },
    changeTab(num){
        var arr = this.isActive;
        var l = arr.length;

        for(var i=0;i<l;i++){
            arr.splice(i, 1, false)
        };
        arr.splice(num, 1, true)
    }
  },
  filters:{
      toDate(value){
          var time = new Date(value*1000);
          var year = time.getFullYear().toString().substring(2,4);
          var month = time.getMonth();
          var day = time.getDate();
          if (day<10){
              day = '0' + day.toString();
          }
          time =year+'.'+month+'.'+day;
          
          return time;
      }
  },
  metaInfo: {
    title: '牌缘城市掼蛋官网',
    meta: [
        {
            name: 'keywords',
            content: '牌缘掼蛋官网,牌缘城市掼蛋官网,掼蛋,掼蛋下载,掼蛋客户端下载,牌缘掼蛋,牌缘掼蛋下载,牌缘掼蛋客户端下载'
        },
        {
            name: 'description',
            content: '牌缘城市掼蛋官方网站,给你不一样的棋牌体验!'
        }
    ]
  },
  components:{

        'v-header':Header,
        'v-footer':Footer,
        'v-sidebar':Sidebar,
        'v-laybox':indexlaybox,
        'v-downbox':downbox,
        'v-bannerbox':bannerbox,
        'v-notice':notices,
        'v-huodong':huodong,

  },
}
</script>

<style lang="scss">
.index{
    min-height:2960px;width:100%;z-index: -1;position: absolute;background: url($imgUrl+'background.jpg');left: 0;top: 0;
}
.main{
    margin-top:620px;background:url($imgUrl+'bg1.png');height:330px;width:1200px;background-size:100%;padding:12px 0 0 6px;
&>div{float:left}
}
.indextitle{
    margin:50px auto;display: block;
}

</style>
