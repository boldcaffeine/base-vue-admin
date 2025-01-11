<template>
  <div>
    我是dashboard
    <div>{{ message }}</div>

    <el-button @click="increment">count</el-button>
  </div>
</template>
<script>
import { getInfo } from "@/api/common";

export default {
  data: () => {
    return {
      message: "3333",
    };
  },

  mounted() {
    // this.handleGetInfo();
  },
  methods: {
    async increment() {

    },
    async handleGetInfo() {
      let param = { id: 1 };
      let result = await getInfo(param);
      console.log(result);
    },
  },
};
</script>
