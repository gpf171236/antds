<template>
  <div>
    <div class="na">
      <div >
        <a-input-search placeholder="输入关键字搜索" style="width: 400px" @search="onSearch" class="an" />
      </div>
    </div>
    <Hd style="height:55px" />
    <He />
  </div>
</template>

<script>
import Hd from "./zi/duihua";
import He from "./zi/zia";

export default {
  data() {
    return {};
  },
  methods: {
    onSearch(value) {
      console.log(value);
    }
  },
      beforeCreate:function () {
      alert('实列初始化')
    },
    created:function () {
      alert('初始化完成')
    },
    beforeMount:function(){
      alert('挂载DOM')
    },
    mounted:function(){
      alert('挂载dom渲染')
    },
    beforeUpdate:function(){
      alert('开始更新')
    },
    updated:function(){
      alert('更新渲染完成')
    },
    beforeDestroy:function(){
      alert('卸载前')
    },
    bestroyed:function(){
      alert('卸载完毕')
    },
  components: { He, Hd }
};
</script>


<style scoped>
.an {
  float: left;

}
.na {
  width: 100%;
  border-bottom: 1px solid #e9e9e9;
  height: 50px;
  margin-bottom: 20px;
}
/* .ma{
  padding-bottom:20px;
} */
</style>












