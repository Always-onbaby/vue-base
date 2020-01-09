<template>
  <div class="examples">
    <p class="total-count">
      总数
      <span>{{total}}</span>
    </p>
    <my-component @increase="handleGetTotal" @reduce="handleGetTotal" @click.native="handleClick"></my-component>
  </div>
</template>
<script>
import Vue from "vue";
Vue.component("my-component", {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    handleIncrease() {
      this.counter++;
      this.$emit("increase", this.counter);
    },
    handleReduce() {
      this.counter--;
      this.$emit("reduce", this.counter);
    }
  },
  render(cr) {
    return cr(
      "div",
      {
        class: "child-wrap"
      },
      [
        cr(
          "button",
          {
            attrs: {
              class: "btn"
            },
            on: {
              click: this.handleIncrease
            }
          },
          ["+1"]
        ),
        cr(
          "button",
          {
            attrs: {
              class: "btn"
            },
            on: {
              click: this.handleReduce
            }
          },
          ["-1"]
        )
      ]
    );
  }
});
export default {
  data() {
    return {
      total: 0
    };
  },
  methods: {
    handleGetTotal(counter) {
      this.total = counter;
    },
    handleClick(ev) {
      console.log(ev);
    }
  }
};
</script>
<style lang="less">
.total-count {
  font-size: 14px;

  > span {
    color: red;
    padding-left: 10px;
  }
}

.child-wrap {
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn {
    border: 1px solid #ddd;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
    outline: none;
  }
}
</style>