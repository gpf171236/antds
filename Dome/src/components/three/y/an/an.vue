<template>
  <div>
    <a-button type="primary" @click="showDrawer" style="float:left">
       添加账号
    </a-button>
    <a-drawer
      title="添加账号"
      :width="400"
      @close="onClose"
      :visible="visible"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
    >
      <a-form :form="form" layout="vertical" hideRequiredMark>
          <Fen />
      </a-form>
      <div
        :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
      >
        <a-button
          :style="{marginRight: '8px'}"
          @click="onClose"
        >
          取消
        </a-button>
        <a-button @click="onClose" type="primary">提交</a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
import Fen from "./anli/fen";
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      visible: false,
    }
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
  },
  components:{Fen}
}
</script>