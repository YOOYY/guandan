<template>
        <div class="huodong">
            <div class="top">
                <img :src="imgUrl+'choujiang.jpg'" alt="">
                <div>
                    <h2>高校区域联赛即将开打，全新赛制玩转24校</h2>
                    <ol>
                        <li v-for="( item , index ) in huodong" :key="index">
                            <div></div>{{item.title}}<span>{{item.date}}</span>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="bottom">
                <img :src="imgUrl+'game1.jpg'" alt="">
                <img :src="imgUrl+'game1.jpg'" alt="">
                <img :src="imgUrl+'game2.jpg'" alt="">
                <img :src="imgUrl+'game3.jpg'" alt="">
            </div>
        </div>
</template>

<script>
    export default {
        name: 'Footer',
        data () {
            return {
                imgUrl:this.GLOBAL.imgUrl,
                baseUrl:this.GLOBAL.baseUrl,
                gameUrl:this.GLOBAL.gameUrl,
                huodong:[
                    {title:'少侠留步，玩测试小游戏还有好礼相送',date:'2018-10-1'},
                    {title:'少侠留步，玩测试小游戏还有好礼相送',date:'2018-10-1'},
                    {title:'少侠留步，玩测试小游戏还有好礼相送',date:'2018-10-1'},
                    {title:'少侠留步，玩测试小游戏还有好礼相送',date:'2018-10-1'},
                ]
            }
        },
        mounted(){
            $("#down a").hover(function(){	
                var n= $(this).index();
                $(".code li").eq(n).show();
                },function(){
                $(".code li").hide();
            })
        }
    }
</script>

<style lang="scss">
.huodong{
    background: url($imgUrl+'bg3.png');background-size:100%;
    .top{overflow: hidden;padding:10px}
    & .top>*{float:left}
    h2{padding-left: 20px;padding-bottom:20px}
        ol li{
        width: 630px;position:relative;text-align:left;margin:6px 0 6px 30px;font-size:17px;
        div{transform: rotate(45deg);width: 3px;height: 3px;background: #7293ad;position: absolute;top: 11px;left: -12px}
        span{float: right;font-size: 14px;color: #7293ad}
    }
    .bottom img{
        margin:20px
    }
}
</style>