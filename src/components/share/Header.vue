<template>
    <header>
        <ul class="container">
            
            <li><a href="/">玩家注册</a></li>
            <li><a href="/notices">充值入口</a></li>
            <li><a href="/contact">客服中心</a></li>
            <li><a href="/payment/Alipay">新闻广告</a></li>
            <li class='last'><a href="/contact">官网首页</a></li>
            <li class="logo"><a href="/"><img :src="imgUrl+'logo.png'" alt="牌缘城市掼蛋logo"></a></li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                imgUrl:this.GLOBAL.imgUrl,
                baseUrl:this.GLOBAL.baseUrl
            }
        },
        mounted(){
            var current=0;
            var router=location.pathname;
            router = router == '/' ? 'index':router;
            router=router.match(/[^\/]\w*/)[0];//过滤路径
            switch(router){
                case 'notices':
                current=1;
                break;
                case 'image':
                current=2;
                break;
                case 'payment':
                current=4;
                break;
                case 'contact':
                current=5;
                break;
                case 'register':
                current=6;
                break;                
                default:
                current=0;
            }
            moveback(current)
            $("header ul a").hover(
                function(){
                var i=$(this).parent().index();
                    if(i<3){
                        moveon(i,0)
                    }
                    else if(i==3){
                        moveback(current)
                    }
                    else{
                        moveon(i,150)
                    }
                },
                function(){
                    moveback(current)
                }
            )
            function moveon(i,logo){
                $("ul").stop().animate({backgroundPositionX:10+(150*i)+logo+"px"});
            }
            function moveback(current){
                if(current<=3){
                    moveon(current,0)
                }
                else{
                    moveon(current,150)
                    } 
            }
        }
    }
</script>

<style lang="scss">

header{
    background:rgba(255, 255, 255, 0.4);
    ul{
        width: 1200px;height:85px;
        li{float: right;padding: 25px 0;text-align:center;}
        .last a{border-left-width:0}
        a{
           height: 35px;font-size: 24px;color:#3a5673;display: block;line-height:35px;border-left :2px solid #3a5673;padding: 0 28px;
        }
        .logo{
            float: left;margin-left: 20px;
            a{border:none;}
            img{margin-top:-10px;}
        }
    }
}
</style>