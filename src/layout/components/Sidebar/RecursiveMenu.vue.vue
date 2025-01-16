<template>
  <div v-if="!menuItem.hidden">
    <template v-if="hasOneShowingChild(menuItem.children, menuItem)">
      <router-link :to="onlyOneChild.path">
        <el-menu-item :index="onlyOneChild.path" >
          <svg-icon :icon-class="onlyOneChild.meta.icon" />
          <span>{{ onlyOneChild.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
    <template v-else>
      <el-submenu :index="menuItem.path">
        <template #title>
          <i :class="menuItem.icon" />
          <span>{{ menuItem.title }}</span>
        </template>
        <recursive-menu
          v-for="child in menuItem.children"
          :key="child.index"
          :menu-item="child"
        />
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "RecursiveMenu",
  props: {
    menuItem: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      onlyOneChild: {},
    };
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return false;
    },
  },
};
</script>
