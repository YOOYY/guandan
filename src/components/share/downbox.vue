<template>
        <div id="downbox">
            <img :src="imgUrl+'erweima.jpg'" alt="牌缘掼蛋二维码下载">
            <a class="ios"><img :src="imgUrl+'ios.png'" alt="掼蛋ios下载" class='margin8px'>苹果下载</a>
            <a class="andro"><img :src="imgUrl+'andro.png'" alt="掼蛋安卓下载" class='margin8px'>安卓下载</a>
            <a class="pc"><img :src="imgUrl+'pc.png'" alt="掼蛋电脑下载" class='margin8px'>电脑端下载</a>
        </div>
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
    #downbox {
        background: #6c87bd;
        >img{margin: 10px}
        text-align: center;width:160px;height:320px;
        a{font-size: 22px;color: white;width: 140px;height: 32px;background: #566c97;display: block;padding: 10px;border-bottom: 1px #405171 solid}
        .pc{font-size: 20px;padding: 12px 10px 8px 10px}
    }
</style>