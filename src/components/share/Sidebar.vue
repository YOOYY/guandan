<template>
        <aside>
                <h1><img :src="imgUrl+'kefu.png'" alt="掼蛋官方客服" class='margin4px'>官方客服</h1>
                <h2 class="font22">123-456-123</h2>
                <div class="content">
                    <h2 class="font16">BUG反馈,游戏问题,建议提交</h2>
                    <a class="ios"><img :src="imgUrl+'ios.png'" alt="掼蛋ios下载" class='margin8px'>苹果下载</a>
                    <a class="andro"><img :src="imgUrl+'andro.png'" alt="掼蛋安卓下载" class='margin8px'>安卓下载</a>
                    <a class="pc"><img :src="imgUrl+'pc.png'" alt="掼蛋电脑下载" class='margin8px'>电脑端下载</a>
                    <img :src="imgUrl+'erweima.jpg'" alt="牌缘掼蛋二维码下载">
                    <h3>扫一扫关注<br>微信公众号</h3>
                </div>
                <h2>000-000-000</h2>
        </aside>
</template>

<script>
    export default {
        name: 'Footer',
        data () {
            return {
                imgUrl:this.GLOBAL.imgUrl,
                baseUrl:this.GLOBAL.baseUrl,
                gameUrl:this.GLOBAL.gameUrl
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
	aside{
        width: 155px;height: 510px;background:url($imgUrl+'sidebar.png');position: fixed;top:150px;right:20px;color: white;
        padding:20px;text-align:center;
        .content{border:solid #fff;border-width: 1px 0;
            a{width: 140px;height:34px;border-radius: 10px;margin:8px auto;padding:4px 4px;display:block;font-size: 20px;
                img{display: inline-block;width: 28px;vertical-align: center;margin-right:5px}
            }
            .ios{border: solid 1px #798da3;background-color: #070506;}
            .andro{background-color: #b0a279;border: solid 1px #bea765;}
            .pc{background-color: #448ff3;}
        }
		div{border-bottom:solid 1px #407bb2;text-align: center;}
        .code li{z-index: 999;left:235px;top:160px;position: absolute;display: none;}
        h1{font-size: 26px}
        h2{font-size: 22px}
        h3{margin: 9px 0;}
    }
    .fix{
    position: fixed;right: 3.1%;top:200px;
    a{position: absolute;height: 16%;z-index: 10}
    }
.gotop{width: 30%;border-radius: 50%;top: 20px;right: 7px}
.zixun{width: 100%;bottom: 0}
    
</style>