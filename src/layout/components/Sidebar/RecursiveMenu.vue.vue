<template>
    <div v-if="!menuItem.hidden">
        <template v-if="menuItem.children && menuItem.children.length">
            <el-submenu :index="menuItem.path">
                <template #title>
                    <i :class="menuItem.icon" />
                    <span>{{ menuItem.title }}</span>
                </template>
                <recursive-menu v-for="child in menuItem.children" :key="child.index" :menu-item="child" />
            </el-submenu>
        </template>
        <template v-else>
            <el-menu-item :index="menuItem.path" :disabled="menuItem.disabled">
                <i :class="menuItem.icon" />
                <span>{{ menuItem.title }}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
export default {
    name: 'RecursiveMenu',
    props: {
        menuItem: {
            type: Object,
            required: true
        }
    }
};
</script>