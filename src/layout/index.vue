<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container" />
    <div class="main-container" :class="{ hasTagsView: needTagsView }">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar></navbar>
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "./components/Navbar/index.vue";
import TagsView from "./components/TagsView/index.vue";
import Settings from "./components/Settings/index.vue";
import AppMain from "./components/AppMain/index.vue";

import RightPanel from "@/components/RightPanel";

import ResizeMixin from "./mixin/ResizeHandler";
import { mapState } from "vuex";

export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    TagsView,
    RightPanel,
    Settings,
    AppMain,
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
      device: (state) => state.app.device,
      showSettings: (state) => state.settings.showSettings,
      needTagsView: (state) => state.settings.tagsView,
      fixedHeader: (state) => state.settings.fixedHeader,
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/globalStyles/mixin.scss";
@import "~@/globalStyles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
  .sidebar-container {
    transition: width 0.28s;
    width: $sideBarWidth;
    background-color: $menuBg;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    &.has-logo {
      :deep(.el-scrollbar) {
        height: calc(100% - 50px);
      }
    }
    :deep(.el-scrollbar) {
      height: 100%;
      .el-scrollbar__view {
        height: 100%;
      }
      .svg-icon {
        width: 24px;
      }
      .el-menu {
        border: none;
        height: 100%;
        width: 100% !important;
        .el-menu-item {
          background-color: $subMenuBg;
          &:hover {
            background-color: $subMenuHover;
          }
        }
        &.el-menu--collapse {
          .el-submenu {
            & > .el-submenu__title {
              & > span {
                height: 0;
                width: 0;
                overflow: hidden;
                visibility: hidden;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }

  .main-container {
    margin-left: $sideBarWidth;
    min-height: 100%;
    transition: margin-left 0.28s;
    position: relative;
  }
  // 处理菜单折叠的情况
  &.hideSidebar {
    .sidebar-container {
      width: 64px;
    }
    .main-container {
      margin-left: 64px;
    }
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  /* width: 100%; */
  width: calc(100% - 54px);
}
</style>
