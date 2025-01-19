<template>
  <div class="app-container">
    <div class="info">
      The guide page is useful for some people who entered the project for the
      first time. You can briefly introduce the features of the project. Demo is
      based on
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank"
        >driver.js.</a
      >
    </div>
    <el-button
      icon="el-icon-question"
      type="primary"
      @click.prevent.stop="guide"
    >
      Show Guide
    </el-button>
  </div>
</template>

<script>
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import steps from "./steps";

export default {
  name: "Guide",
  data() {
    return {
      steps: steps,
      driverObj: {},
    };
  },
  mounted() {
    this.handleInit();
  },
  methods: {
    handleInit() {
      this.driverObj = driver({
        showProgress: true,
        steps: this.steps,
      });
    },
    guide() {
      this.driverObj.drive();
    },
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  padding: 16px;
  .info {
    background: #eef1f6;
    padding: 8px 24px;
    margin-bottom: 20px;
    border-radius: 2px;
    display: block;
    line-height: 32px;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    a {
      color: #337ab7;
      cursor: pointer;
    }
  }
}
</style>
