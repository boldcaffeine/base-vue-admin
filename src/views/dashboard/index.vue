<template>
  <div>
    我是dashboard
    <div>{{ message }}</div>
    <el-button @click="increment">count</el-button>
  </div>
</template>
<script>
import { getUsers } from "@/api/common";

export default {
  data: () => {
    return {
      message: "3333",
    };
  },

  mounted() {
    this.handleGetUsers();
  },
  methods: {
    async increment() {},
    async handleGetUsers() {
      let param = { id: 1 };
      let result = await getUsers(param);
      console.log(result);
    },
  },
};
</script>
