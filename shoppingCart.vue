<template>
  <div class="shoping-cart">
    <ul>
      <li class="list-item">
        <div class="cell cell-index">
          <span></span>
        </div>
        <div class="cell cell-name">
          <span>商品名称</span>
        </div>
        <div class="cell cell-price">
          <span>商品单价</span>
        </div>
        <div class="cell cell-count">
          <span>商品数量</span>
        </div>
        <div class="cell cell-other">
          <span class="header-cell">操作</span>
        </div>
      </li>
      <li class="list-item" v-for="(item,index) of goodsList" :key="index">
        <div class="cell cell-index">
          <span>{{index+1}}</span>
        </div>
        <div class="cell cell-name">
          <span>{{item.name}}</span>
        </div>
        <div class="cell cell-price">
          <span>{{item.price}}</span>
        </div>
        <div class="cell cell-count">
          <span class="minus" @click.stop="item.count>0?item.count--:0">-</span>
          <span class="goods-count">{{item.count}}</span>
          <span class="plus" @click="item.count++">+</span>
        </div>
        <div class="cell cell-other">
          <span @click="removeGoods(index)">移除</span>
        </div>
      </li>
    </ul>
    <div class="goods-total">费用总计：￥{{getTotal}}元</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList: [
        {
          name: 'iphone11',
          price: '2000',
          count: 0
        },
        {
          name: 'iphone11Max',
          price: '40000',
          count: 0
        },
        {
          name: 'iphone11Pro',
          price: '5000',
          count: 0
        },
        {
          name: 'iphone11ProMax',
          price: '9000',
          count: 0
        },
      ]  
    }
  },
  methods: {
    removeGoods(index) {
      this.goodsList.splice(index,1)
    }
  },
  computed: {
    getTotal() {
      let total = 0
      this.goodsList.forEach(item => {
        total+=parseInt(item.price*item.count)
      })
      return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
    }
  }
}
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.shoping-cart {
  width: 60%;
  border: 1px solid #f7f7f7;
  margin:  0 auto;
  .list-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f7f7f7;
    font-size: 14px;
    &:first-child {
      background-color: #f7f7f7;
      // border-top: 0;
    }
    .cell {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.cell-index {
        width: 20px;
      }
      &.cell-name {
        flex: 1;
      }
      &.cell-price {
        width: 100px;
      }
      &.cell-count {
        width: 170px;
        >span {
          user-select: none;
        }
        .goods-count {
          padding: 8px;
        }
        .minus {
          width: 25px;
          height: 25px;
          cursor: pointer;
          border-radius: 50%;
          background-color: #f7f7f7;
          text-align: center;
          line-height: 25px;
        }
        .plus {
          width: 25px;
          height: 25px;
          cursor: pointer;
          border-radius: 50%;
          background-color: #f7f7f7;
          text-align: center;
          line-height: 25px;
        }
      }
      &.cell-other {
        width: 70px;
        >span {
          font-size: 12px;
          color: #333;
          cursor: pointer;
          border: 1px solid #f5f2f0;
          border-radius: 6px;
          padding: 0 4px;
          &.header-cell {
            border: 0;
          }
        }
      }
    }
  }
  .goods-total {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-size: 14px;
  }
}
</style>