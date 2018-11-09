<template>
  <div class="bannerbox" @mouseover="clearInv" @mouseout="runInv">
    <transition-group tag="ul" class='slide-ul' :name="name">
      <li v-for="(item , index ) in slides" :key="index" v-show="index===nowIndex">
        <a :href="item.href" :target="target">
          <img :src="item.src" alt="">
        </a>
      </li>
    </transition-group>
    <ul class="bannerpages">
      <li v-for="(item, index) in slides" @click="goto(index)" class="slide-page-point">
        <a :class="{'active': index === nowIndex}">{{ item.title }}</a>
      </li>
    </ul>
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
                slides : [
            {
                src: this.GLOBAL.imgUrl+'bigroom.jpg',
                href: '',
                title:'签到奖励'
            },
            {
                src: this.GLOBAL.imgUrl+'bigroom.jpg',
                href: '',
                title:'游戏特色'
            },
            {
                src: this.GLOBAL.imgUrl+'bigroom.jpg',
                href: '',
                title:'城市特色'
            },
            {
                src: this.GLOBAL.imgUrl+'bigroom.jpg',
                href: '',
                title:'多重奖励'
            },
            {
                src: this.GLOBAL.imgUrl+'bigroom.jpg',
                href: '',
                title:'开服测试'
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

  .bannerbox {
    position: relative;
	width: 525px;
    height: 320px;
    margin:0 auto;
  }
    .bannerpages {
    position: absolute;
    bottom: 0px;
    margin: 0;
    width: 485px;
    background:rgba(0,0,0,0.7);
          padding: 10px 20px;
    li {
      display: inline-block;
      line-height: 17px;
      height: 37px;
      &:first-child a{border-width:0;}
      a {
        display: block;
        width: 95px;
        height: 17px;
        margin:10px 0; 
        color:#fff;
        font-size: 15px;
        border-left:1px solid #fff;
        text-align: center;
        -webkit-transition: all .2s;
        transition: all .2s;
        &.active {
            color:#ffdd9c
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
