<template>
  <template v-if="!props.item.hidden">
    <el-sub-menu
      v-if="
        props.item.children && props.item.children.length > 0 && !props.item.alwaysShow
      "
      :index="props.item.path"
    >
      <template #title>
        <el-icon size="20">
          <component class="el-icon" :is="$icon[props.item.meta.icon]" />
        </el-icon>
        <span>{{ props.item.meta.title }}</span>
      </template>
      <el-menu-item-group>
        <template v-for="i in props.item.children" :key="i.path">
          <el-menu-item v-if="!i.hidden" :index="i.path" @click="goRouter(i)">
            <el-icon size="20">
              <component class="el-icon" :is="$icon[i.meta.icon]" />
            </el-icon>
            <template #title>{{ i.meta.title }}</template>
          </el-menu-item>
        </template>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item
      v-else
      :key="props.item.path"
      :index="props.item.path"
      @click="goRouter(props.item)"
    >
      <el-icon size="20">
        <component class="el-icon" :is="$icon[props.item.meta.icon]" />
      </el-icon>
      <template #title>{{ props.item.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});

const router = useRouter();

const goRouter = (route) => {
  router.push(route.path);
  return false;
};
</script>

<style lang="scss" scoped></style>
