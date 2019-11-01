<!-- 自定义对话弹窗 -->
<template>
  <div class="maskWrap" v-show="show">
    <div class="model">
      <div class="modelContainer">
        <span class="icon"></span>
        <span class="close" @click="close()"></span>
        <p>
          安装101教育PPT免费下载该课件
          <br />还有您所授科目对应的更多免费课件，等您来拿
        </p>
        <div class="downloadBtn">下载APP</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean
  },
  data() {
    return {
      show: true
    };
  },
  watch: {
    visible: {
      handler(val) {
        this.show = val;
      }
    }
  },
  methods: {
    close() {
      this.show = false;
    }
  }
};
</script>
<style scoped>
.maskWrap {
  z-index: 20001;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.model {
  position: relative;
  margin: 150px auto 50px;
  height: 223px;
  width: 300px;
  background: #fff;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  background: url("../../assets/model_bg.png") no-repeat center;
  background-size: 100% 100%;
}
.modelContainer {
  position: relative;
  padding: 45px 20px 0 20px;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  line-height: 1.6;
  color: #333;
}
.icon {
  position: absolute;
  display: inline-block;
  top: -45px;
  left: calc(50% - 44.5px);
  width: 99px;
  height: 99px;
  background: url("../../assets/model_icon.png") no-repeat center;
  background-size: 100% 100%;
}
.close {
  position: absolute;
  right: 11px;
  top: 11px;
  display: inline-block;
  width: 11px;
  height: 11px;
  background: url("../../assets/close.png") no-repeat center;
  background-size: 100% 100%;
}
.downloadBtn {
  position: absolute;
  display: inline-block;
  left: calc(50% - 76.5px);
  bottom: 5px;
  width: 153px;
  height: 39px;
  color: #fff;
  line-height: 36px;
  background: url("../../assets/btn_normal.png") no-repeat center;
  background-size: 100% 100%;
}
.downloadBtn:active {
  background: url("../../assets/btn_active.png") no-repeat center;
  background-size: 100% 100%;
}
.hide {
  display: none;
}
.fadeOut {
  animation: fadeOut 0.5s;
}
.fadeIn {
  animation: fadeIn 0.5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>