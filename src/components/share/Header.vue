<template>
    <header>
        <nav class="container">
            <ul>
                <li><a href="/">官网首页</a></li>
                <li><a href="/news">新闻广告</a></li>
                <li><a href="/contact">客服中心</a></li>
                <li><a href="/payment">充值入口</a></li>
                <li><a href="/register">玩家注册</a></li>
            </ul>
            <a href="/" class="logo"><img :src="imgUrl+'logo.png'" alt="牌缘城市掼蛋logo"></a>
        </nav>
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
    background:rgba(255, 255, 255, 0.3);
    box-shadow: 0 3px 5px 0px rgba(49, 89, 131, 0.2);
    ul{
      float: right;
        li{float: left;text-align:center;padding: 24px 0}
        a{
           display: block;
           height: 38px;border-left :2px solid #3a5673;padding: 0 25px;
           font-size: 24px;color:#3a5673;line-height:38px;
        }
        li:first-child a{border-left-color:transparent}
    }
    .logo{
        float: left;margin-left: 20px;
        img{margin-top:12px;}
    }
}
</style>