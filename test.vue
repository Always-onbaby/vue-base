<template>
    <div>
        <vInput v-model="userName"></vInput>
    </div>
</template>>
<script>
import Vue from 'vue'
Vue.component('vInput', {
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    render(cr) {
        return cr('div', [
            cr('span','昵称'),
            cr('input', {
                attrs: {
                    type: 'text'
                },
                domProps: {
                    value: this.value
                },
                on: {
                    'input': (ev) => {
                        this.$emit('input', event.target.value)
                        window.console.log(ev.target.value)
                    }
                }
            })
        ])
    }
})
export default {
    data() {
        return {
            userName: 'name'
        }
    }
}
</script>