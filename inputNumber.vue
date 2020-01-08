<template>
  <div class="demo">
    <input-number v-model="value" :max="10" :min="0"></input-number>
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.component('input-number', {
    props: {
      value: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: -Infinity
      }
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    watch: {
      value(val) {
        this.updateValue(val)
      },
      currentValue(val) {
        this.$emit('input', val)
        this.$emit('on-change', val)
      }
    },
    methods: {
      updateValue(val) {
        if (val > this.max) val = this.max
        if (val < this.min) val = this.min
        this.currentValue = val
      },
      handleDown() {
        if (this.currentValue <= this.min) return
        this.currentValue -= 1
      },
      handleUp() {
        if (this.currentValue >= this.max) return
        this.currentValue += 1
      },
      handleChange(ev) {
        let val = ev.target.value.trim()
        let max = this.max
        let min = this.min
        if (this.isValueNumber(val)) {
          val = Number(val)
          this.currentValue = val
          if (val > max) {
            this.currentValue = max
          } else if (val < min) {
            this.currentValue = min
          }
        } else {
          ev.target.value = this.currentValue
        }
      },
      isValueNumber(val) {
        return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(val + '')
      }
    },
    render(cr) {
      let _this = this
      return cr('div', {
        'class': 'input-number'
      }, [
        cr('button', {
          'class': {
            'down-btn': true,
            'dis': this.currentValue <= this.min
          },
          on: {
            click: _this.handleDown
          },
        }, ['-']),
        cr('input', {
          'class': 'change-input',
          domProps: {
            value: _this.currentValue
          },
          on: {
            change: _this.handleChange
          }
        }),
        cr('button', {
          'class': {
            'down-btn': true,
            'dis': this.currentValue >= this.max
          },
          on: {
            click: _this.handleUp
          },
        }, ['+']),
      ])
    }
  })
  export default {
    data() {
      return {
        value: 5
      }
    }
  }
</script>
<style lang="less">
  * {
    box-sizing: border-box;
  }

  .demo {
    width: 200px;
    margin: 0 auto;
  }

  .input-number {
    width: 100%;
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: space-between;

    .down-btn,
    .up-btn {
      font-size: 18px;
      width: 40px;
      height: 40px;
      background-color: #f5f7fa;
      color: #606266;
      border: 1px solid #dcdfe6;
      border-radius: 4px 0 0 4px;
      cursor: pointer;
      outline: none;

      &.up-btn {
        border-radius: 0 4px 4px 0;
      }

      &.dis {
        cursor: not-allowed;
      }
    }

    .change-input {
      flex: 1;
      max-width: 100px;
      outline: none;
      border: none;
      text-align: center;
      height: 40px;
    }
  }
</style>