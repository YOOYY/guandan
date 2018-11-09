<template>
        <footer id="footer">
            <div class="container">
                <nav class="link">
                            <a href="/contact/aboutus/">公司介绍</a> 
                            | <a href="/common/connect">公司地址</a> 
                            | <a href="/wiki/info/aid/621">游戏介绍</a> 
                            | <a href="/wiki/info/aid/626">新手帮助</a> 
                            | <a href="/common/friendlink">合作专区</a> 
                            | <a href="/common/family">家长监护</a>
                </nav>
                <p>抵制不良游戏&nbsp;拒绝盗版游戏&nbsp;<span>注意</span>自我保护&nbsp;谨防受骗上当&nbsp;适度游戏益脑&nbsp;沉迷游戏伤身&nbsp;合理安排时间&nbsp;享受健康生活</p>
                <p>网站备案： 浙ICP备18041593号-1&nbsp;&nbsp;湖州文软网络科技有限公司&nbsp;&nbsp;运营中心：0572-2128823</p>
                <p>类型&nbsp;:&nbsp;有限责任公司(法人独资)&nbsp;&nbsp;住所&nbsp;:&nbsp;湖州市嘉年华国际广场D座D203室-12</p>
            </div>
        </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data () {
            return {
                imgUrl:this.GLOBAL.imgUrl,
                baseUrl:this.GLOBAL.baseUrl
            }
        }
    }
</script>

<style lang="scss">
    #footer {
        background:#25415d;padding-top: 10px;
        .container, a{font-size:12px;color:#96aec9;text-align: center;}


        .container{padding:40px 0 75px 0;line-height:10px;}
        .link{font-size: 14px;margin-bottom: 20px;}
    }
</style>