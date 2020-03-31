<template>
  <div class="hello">
     <Input />
     <An />
     <Sj />
  </div>
</template>

<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import Input from "./y/input";
import An from "./y/an/an";
import Sj from "./y/sj";
export default {
  data() {
    return {
    };
  },
  components: {Input,An,Sj}
};
</script>


<style scoped>
a {
  color: #42b983;
}
</style>