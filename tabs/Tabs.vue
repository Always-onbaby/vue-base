<template>
	<div class="tabs">
		<div class="tabs-bar">
      <div class="tabs-item" v-for="(item,index) of naveList" :key="index">{{item.label}}</div>
    </div>
		<div class="tabs-content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		value: {
			type: [String, Number]
		}
	},
	data() {
		return {
			naveList: [],
			currentValue: this.value
		}
	},
	methods: {
		getTabs() {
			return this.$children.filter(item => {
				return item.$options.name === 'pane'
			})
		},
		updateNave() {
			this.naveList = []
			this.getTabs().forEach((pane, index) => {
				if (!pane.name) {
					pane.name = index
				}
				this.naveList.push({
					label: pane.label,
					name: pane.name
				})
				if (!this.currentValue) {
          this.currentValue = pane.name || index
				}
      })
      this.updateStatus()
    },
    updateStatus() {
      let tabs = this.getTabs()
      tabs.forEach(tab => {
        return tab.show = tab.name === this.currentValue
      })
    }
	}
}
</script>
