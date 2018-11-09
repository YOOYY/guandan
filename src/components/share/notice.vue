<template>
<div class="notice">
    <ul>
        <li v-for="(item,index) in navs" :key="index"  @mouseover="nowactive = index" :class="[nowactive == index ? 'active' : '']">{{item.title}}</li>
    </ul>
    <ol v-for="( data , sindex ) in datas" :key="sindex" v-show="sindex===nowactive">
        <li v-for="( item , index ) in data.notices" :key="index">
            <div></div>{{item.title}}<span>{{item.date}}</span>
        </li>
    </ol>
</div>
</template>

<script>
    export default {
        name: 'notices',
        data () {
            return {
                imgUrl:this.GLOBAL.imgUrl,
                baseUrl:this.GLOBAL.baseUrl,
                gameUrl:this.GLOBAL.gameUrl,
                nowactive:1,
                navs:[{title:'最新'},{title:'新闻'},{title:'公告'},{title:'活动'},{title:'攻略'}],
                datas:[{
                notices:[
                    {title:'少侠留步，玩测试小游戏还有好礼相送',date:'2018-10-1'},
                    {title:'少侠留步，玩测试小游戏还有好礼相送',date:'2018-10-1'},
                    {title:'少侠留步，玩测试小游戏还有好礼相送',date:'2018-10-1'},
                    {title:'少侠留步，玩测试小游戏还有好礼相送',date:'2018-10-1'},
                ]},{
                notices:[
                    {title:'匠心独造，天龙御用！天龙全新时装设',date:'2018-10-1'},
                    {title:'匠心独造，天龙御用！天龙全新时装设',date:'2018-10-1'},
                    {title:'少侠留步，玩测试小游戏还有好礼相送',date:'2018-10-1'},
                    {title:'少侠留步，玩测试小游戏还有好礼相送',date:'2018-10-1'},
                ]},
                ]
            }
        },
        mounted(){
            this.getData(0,0,2,28);
        },
        methods:{
            getData(name,start,end,channel){
                var serverUrl = 'http://localhost:3000/';
                var url = serverUrl+'article/'+start+'/'+end+'/'+channel;
                //var url = serverUrl+name+'/do'+name+'/'+start+'/'+end+'/'+channel;
                //var url = 'http://localhost:3000/notices/donotices/0/8/28';
                this.$http.get(url).then((response) =>{
                    this.datas[name].notices = response.body;
                    console.log(this.datas[name].notices);
                },(error) => {
                    this[name] = [];
                })
            },
        }
    }
</script>

<style lang="scss">
.notice{
    width: 470px;height:320px;padding-left:20px;
    color: #171e46;font-family:'Microsoft Yahei';
    ul{width: 420px;height: 45px;border-bottom:2px dashed #7293ad;padding:0 30px;margin-bottom:20px;
        li{padding: 10px 18px;font-size:24px;
        &:after{content: '';position:absolute;width:7px;height: 7px;background:#295067;bottom: 2px;left: 40px;transform: rotate(45deg)}
        }
    }
    ol li{
        width: 440px;position:relative;text-align:left;margin:6px 0 6px 30px;font-size:17px;line-height:24px;
        div{transform: rotate(45deg);width: 3px;height: 3px;background: #7293ad;position: absolute;top: 11px;left: -12px}
        span{float: right;font-size: 14px;color: #7293ad}
    }
    .active{color: red;&:after{background:red}}
}
    
</style>