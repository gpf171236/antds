<template>
  <div class="hello">
        <div class="na">
    <a-input-search
      placeholder="输入关键字搜索"
      style="width: 400px"
      @search="onSearch"
      class="an"
    />
    <He />
  </div>
  </div>
</template>

<script>
import He from "./zi/zia";
export default {
  name: "HelloWorld",
  data() {
    return {
    };
  },
    methods: {
    onSearch (value) {
      console.log(value)
    },
  },
  components: { He }
};

</script>


<style scoped>
.an{
  float: left
}
.na{
  width:100%;
  float: left;
  border-bottom:1px solid #e9e9e9; 
  height:50px;
}
</style>












