<template>
  <div :class="{ 'has-logo': showLogo }" class="sidebar-container-inner">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="false"
        active-text-color="#409EFF"
        :collapse-transition="false"
      >
        <recursive-menu
          v-for="item in permission_routes"
          :key="item.path"
          :menu-item="item"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import RecursiveMenu from "./RecursiveMenu.vue";

export default {
  components: { RecursiveMenu, Logo },
  data: () => {
    return {
      menuData: [
        {
          index: "1",
          title: "导航一",
          icon: "el-icon-location",
          children: [
            {
              index: "1-1",
              title: "选项1",
              children: [
                { index: "1-1-1", title: "选项1-1" },
                { index: "1-1-2", title: "选项1-2" },
              ],
            },
            {
              index: "1-2",
              title: "选项2",
              children: [
                { index: "1-2-1", title: "选项2-1" },
                { index: "1-2-2", title: "选项2-2" },
              ],
            },
            { index: "1-3", title: "选项3" },
            {
              index: "1-4",
              title: "选项4",
              children: [
                { index: "1-4-1", title: "选项4-1" },
                { index: "1-4-2", title: "选项4-2" },
                {
                  index: "1-4-3",
                  title: "选项4-3",
                  children: [
                    { index: "1-4-3-1", title: "选项4-3-1" },
                    { index: "1-4-3-2", title: "选项4-3-2" },
                  ],
                },
              ],
            },
          ],
        },
        {
          index: "2",
          title: "导航二",
          icon: "el-icon-menu",
          children: [
            {
              index: "2-1",
              title: "选项1",
              children: [
                { index: "2-1-1", title: "选项1-1" },
                { index: "2-1-2", title: "选项1-2" },
              ],
            },
            {
              index: "2-2",
              title: "选项2",
              children: [
                { index: "2-2-1", title: "选项2-1" },
                { index: "2-2-2", title: "选项2-2" },
              ],
            },
          ],
        },
        {
          index: "3",
          title: "导航三",
          icon: "el-icon-document",
          disabled: true,
          children: [
            {
              index: "3-1",
              title: "选项1",
              children: [
                { index: "3-1-1", title: "选项1-1" },
                { index: "3-1-2", title: "选项1-2" },
              ],
            },
          ],
        },
        {
          index: "4",
          title: "导航四",
          icon: "el-icon-setting",
          disabled: false,
          children: [
            {
              index: "4-1",
              title: "选项1",
              children: [
                { index: "4-1-1", title: "选项1-1" },
                { index: "4-1-2", title: "选项1-2" },
              ],
            },
            {
              index: "4-2",
              title: "选项2",
              children: [
                { index: "4-2-1", title: "选项2-1" },
                { index: "4-2-2", title: "选项2-2" },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["sidebar", "permission_routes"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      let  url= path.replaceAll('/','');
      return url;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
  },
  mounted() {
    console.log(this.permission_routes, "permission_routes");
  },
  methods: {
    handleOpen() {
      // handle open logic
    },
    handleClose() {
      // handle close logic
    },
  },
};
</script>

<style lang="scss">
.sidebar-container-inner {
  .svg-icon {
    margin-right: 16px;
  }
  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar {
    height: 100%;
  }

  &.has-logo {
    .el-scrollbar {
      height: calc(100% - 50px);
    }
  }
}
</style>
