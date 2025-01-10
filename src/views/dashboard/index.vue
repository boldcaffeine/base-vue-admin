<template>
  <div>
    我是dashboard
    <div>{{ count }}</div>
    <el-button @click="increment">count</el-button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => {
    return {
      message: "3333",
    };
  },
  computed: mapState({
    // 箭头函数可使代码更简练
    count: (state) => state.count,
    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: "count",
  }),
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>
