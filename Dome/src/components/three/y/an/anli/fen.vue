<template>
  <div>
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="基础信息" key="1"><Foura /></a-tab-pane>
      <a-tab-pane tab="角色" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane tab="组织机构" key="3">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Foura from "./foura/foura"
export default {
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  },
  components:{Foura}
};
</script>