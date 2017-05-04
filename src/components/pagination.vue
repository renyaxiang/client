<template>
  <ul class="pagination">
    <li v-if="cur!=1"><a @click="cur--">上一页</a></li>
    <li v-for="index in indexs" :class="{ active: cur == index}">
      <a @click="cur = index">{{ index }}</a>
    </li>
    <li v-if="cur!=all"><a @click="cur++">下一页</a></li>
    <li><a>共{{all}}页</a></li>
  </ul>
</template>

<script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      pageCount: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        cur: this.currentPage,
        all: this.pageCount
      }
    },
    computed: {
      indexs() {
        let left = 1
        let right = this.all
        let ar = []
        if (this.all >= 11) {
          if (this.cur > 5 && this.cur < this.all - 4) {
            left = this.cur - 5
            right = this.cur + 4
          } else {
            if (this.cur <= 5) {
              left = 1
              right = 10
            } else {
              right = this.all
              left = this.all - 9
            }
          }
        }
        while (left <= right) {
          ar.push(left)
          left++
        }
        return ar
      }
    },
    watch: {
      currentPage(val) {
        this.cur = val
      },
      pageCount(val) {
        this.all = val
      },
      cur() {
        this.$emit('pageChanged', this.cur)
      }
    }
  }
</script>

