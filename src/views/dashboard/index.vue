<template>
  <div>
    我是dashboard
    <div>{{ count }}</div>
    <el-button @click="increment">count</el-button>
  </div>
</template>
<script>
import { getInfo } from "@/api/common";
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
  mounted() {
    this.handleGetInfo();
  },
  methods: {
    async increment() {
      this.handleLoginOut();
      this.$store.commit("increment");
    },
    async handleGetInfo() {
      let param = { id: 1 };
      let result = await getInfo(param);
      console.log(result);
    },
  },
};
</script>
