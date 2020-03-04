<template>
  <div>
    <div class="na">
      <div >
        <a-input-search placeholder="输入关键字搜索,将搜索[用户名][姓名][邮箱][手机号]" style="width: 500px" @search="onSearch" class="an" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  methods: {
    onSearch(value) {
      console.log(value);
    }
  },
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












