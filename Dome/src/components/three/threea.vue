<template>
  <div class="hello">
     <Input />
     <An />
  </div>
</template>

<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import Input from "./y/input";
import An from "./y/an/an";
export default {
  data() {
    return {
    };
  },
  components: {Input,An}
};
</script>


<style scoped>
a {
  color: #42b983;
}
</style>