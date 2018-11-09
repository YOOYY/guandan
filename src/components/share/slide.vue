<template>
<div class="bg">
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <transition-group tag="ul" class='slide-ul' :name="name">
      <li v-for="(item , index ) in slides" :key="index" v-show="index===nowIndex">
        <a :href="item.href" :target="target">
          <img :src="item.src" alt="">
        </a>
      </li>
    </transition-group>
    <ul class="slide-pages">
      <li v-for="(item, index) in slides" @click="goto(index)" class="slide-page-point">
        <a :class="{'active': index === nowIndex}">{{ index + 1 }}</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  export default {
    props: {
      inv: {
        type: Number,
        default: 2000
      },
      name: {
        type: String,
        default: 'fade'
      },
      target: {
        type: String,
        default: '_blank'
      }
    },
    data () {
      return {
        nowIndex: 0,
        imgUrl:this.GLOBAL.imgUrl,
        slides:[
                                {
                src: this.GLOBAL.imgUrl+'bigroom.jpg',
                href: ''
            },
            {
                src: this.GLOBAL.imgUrl+'bigroom.jpg',
                href: ''
            },
            {
                src: this.GLOBAL.imgUrl+'bigroom.jpg',
                href: ''
            },
            {
                src: this.GLOBAL.imgUrl+'bigroom.jpg',
                href: ''
            },
            {
                src: this.GLOBAL.imgUrl+'bigroom.jpg',
                href: ''
            },
            {
                src: this.GLOBAL.imgUrl+'bigroom.jpg',
                href: ''
            },
        ]
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        } else {
          return this.nowIndex + 1
        }
      }
    },
    methods: {
      goto (index) {
        this.nowIndex = index
      },
      runInv () {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)
      }
    },
    mounted () {
      this.runInv()
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.bg{background: url($imgUrl+'bg2.png');background-size: 100%;width: 1200px;height: 720px;margin:0 auto;margin-bottom: 70px}
  .slide-show {
    position: relative;
	width: 1190px;
    height: 710px;
    margin:0 auto;
    margin-top:40px;
    margin-bottom:70px;
        background:url($imgUrl+'bg2.png');background-size:100%;
  }
  .slide-pages {
    position: absolute;
    bottom: -50px;
    right: 300px;
    li {
      display: inline-block;
      height: 18px;
      a {
        display: block;
        width: 12px;
        height: 12px;
        margin: 0 40px;
        text-align: left;
        text-indent: -9999px;
        overflow: hidden;
        _zoom: 1;
        background: #f5f5f5;
        background: rgba(0, 0, 0, 0.4);
        -webkit-transition: all .2s;
        transition: all .2s;
        transform: rotate(45deg);
        &.active {
          border:1px solid #567899;
          box-shadow: 0 0 0 1px #aac5e2;

        }
      }
    }
  }

  .slide-ul {
    width: 100%;
    height: 100%;
    li {
      position: absolute;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .move-enter-active {
    transition: all 0.5s ease;
    transform: translateX(0)
  }

  .move-leave-active {
    transition: all 0.5s ease;
    transform: translateX(-100%);
  }

  .move-enter {
    transform: translateX(100%);
  }

  .move-leave {
    transform: translateX(0);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
