<template>
  <div style="width: 500px">
    <a-radio-group v-model="tabPosition" style="margin:8px">
      <a-radio-button value="top" v-on:click="changeound('1')">
        学生
      </a-radio-button>
      <a-radio-button value="bottom" @click="changeound('2')">
        家长
      </a-radio-button>
      <a-radio-button value="left" @click="changeound('3')">
        导师
      </a-radio-button>
      <a-radio-button value="right" @click="changeound('4')">
        管理员
      </a-radio-button>
      <div class="np">
      <A v-if="ound=='1'" />
      <B v-if="ound=='2'" />
      <C v-if="ound=='3'" />
      <D v-if="ound=='4'" />
      </div>
    </a-radio-group>
  </div>
</template>
<script>
import A from './a'
import B from './b'
import C from './c'
import D from './d'
export default {
  data() {
    return {
      ound: '1',
      tabPosition: "top"
    };
    
  },
  methods: {
    callback(val) {
      console.log(val);
    },
    changeound(a){
      console.log(a)
      this.ound=a
  }
  
  },
  components:{A,B,C,D}
};
</script>
<style>
.np {
  margin-top: 20px;
  width: 100%;
  /* height: 50px; */
}
</style>