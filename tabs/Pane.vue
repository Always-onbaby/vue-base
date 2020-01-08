<template>
  <div class="pane" v-show="show">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'pane',
    props: {
      name: {
        type: String
      },
      label: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        show: true
      }
    },
    methods: {
      updateNave() {
        this.$parent.updateNave()
      }
    },
    mounted() {
      this.updateNave()
    },
    watch: {
      label() {
        this.updateNave()
      }
    }
  }
</script>