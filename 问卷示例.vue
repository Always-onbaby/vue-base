<template>
  <div class="ex-wrap">
    <div class="step step-one" v-show="step === 0">
      <p>请问您的性别是？</p>
      <div class="radio-wrap">
        <input type="radio" id="one" value="0" v-model="personSex" />
        <label for="one">女</label>
        <input type="radio" id="two" value="2" v-model="personSex" />
        <label for="two">男</label>
      </div>
    </div>
    <div class="step step-two" v-show="step === 1">
      <p>请选择您的兴趣爱好！</p>
      <div class="checkbox-wrap">
        <div>
          <input type="checkbox" id="1" value="1" v-model="checkList" />
          <label for="1">看书</label>
        </div>
        <div>
          <input type="checkbox" id="2" value="2" v-model="checkList" />
          <label for="2">游泳</label>
        </div>
        <div>
          <input type="checkbox" id="3" value="3" v-model="checkList" />
          <label for="3">跑步</label>
        </div>
        <div>
          <input type="checkbox" id="4" value="4" v-model="checkList" />
          <label for="4">看电影</label>
        </div>
        <div>
          <input type="checkbox" id="5" value="5" v-model="checkList" />
          <label for="5">听音乐</label>
        </div>
      </div>
    </div>
    <div class="step step-three" v-show="step === 2">
      <p>请简单介绍你自己！</p>
      <div class="textarea-wrap">
        <textarea name id cols="30" rows="10" v-model="text"></textarea>
      </div>
    </div>
    <div class="btn-wrap">
      <el-button type="primary" :disabled="step>=2" @click="step < 2 ? step+=1 : ''">下一步</el-button>
      <el-button :disabled="step<=0" @click="step-=1">上一步</el-button>
      <el-button @click="handleClick">重置</el-button>
    </div>
  </div>
</template>
<script>
import ElButton from './button/button'
export default {
  components: {
    ElButton
  },
  data() {
    return {
      checkList: [1, 4],
      personSex: 0,
      step: 0,
      text: ''
    }
  },
  methods: {
    handleClick() {
      if (this.step === 1) {
        this.checkList = [1, 4]
      } else if (this.step === 2) {
        this.text = ''
      }
    }
  }
}
</script>
<style lang="less">
.ex-wrap {
  width: 300px;
  margin: 40px auto;
  font-size: 14px;
  color: #1f2f3d;
  .step {
    height: 200px;
  }
  .btn-wrap {
    display: flex;
    justify-content: space-between;
  }
}
</style>