<template>
  <div>
    <button @click='sayHi'>{{ msg }}</button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
//import  from '@/components/ .vue'

@Component({
  name: 'HelloBtn',
  components: {
    //该组件有没引用什么组件，有就往这里写
  }
})
export default class componentName extends Vue {
  //props
  @Prop(String)
  msg!: String;

  //life hook
  created(): void {
    console.log('created hook')
}

  //data
  private Father: String = 'haKing';
  private Mother!: String;

  //computed
  get familyMember() {
    return `Fa: ${this.Father}, Mum: ${this.Mother}`;
  }

  //watch
  @Watch('msg', {immediate: true, deep: true})
  onMsgChange(val: String, oldVal: String) {

  };

 //method
  public sayHi() {
    alert(`my father is ${this.Father}, my Mum is ${this.Mother}, Hello everyone~`);
  }
}
</script>

<style lang='scss'>

</style>