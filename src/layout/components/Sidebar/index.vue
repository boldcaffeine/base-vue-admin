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
  computed: {
    ...mapGetters(["sidebar", "permission_routes"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;

      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      let url = path.replaceAll("/", "");
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
};
</script>

<style lang="scss">
@import "~@/globalStyles/variables.scss";
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
  .el-menu {
   .el-menu-item {
     min-width: $sideBarWidth !important;
     background-color: $subMenuBg !important;
     &:hover {
       background-color: $subMenuHover !important;
     }
   }
 }
 
}

</style>
