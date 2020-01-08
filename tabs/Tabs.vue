<template>
	<div class="tabs">
		<div class="tabs-bar">
			<div class="tabs-item" :class="{'is-active':item.name === currentValue}" v-for="(item,index) of naveList"
				@click="handleChange(index)" :key="index">{{item.label}}</div>
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
			},
			handleChange(index) {
				let nav = this.naveList[index]
				let name = nav.name
				this.currentValue = name
				this.$emit('input',name)
			}
		},
		watch: {
			currentValue() {
				this.updateStatus()
			},
			value(val) {
				this.currentValue = val
			}
		}
	}
</script>
<style lang="less" scoped>
	* {
		box-sizing: border-box;
	}

	.tabs-bar {
		display: flex;
		align-items: center;

		.tabs-item {
			font-size: 14px;
			height: 40px;
			line-height: 40px;
			padding: 0 20px;
			color: #303133;
			cursor: pointer;
			user-select: none;

			&:hover {
				color: #409eff;
			}

			&.is-active {
				color: #409eff;
			}

			&:last-child {
				padding-right: 0;
			}

			&:nth-child(1) {
				padding-left: 0;
			}
		}
	}
</style>