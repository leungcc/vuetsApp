<template>
  <div>
    <h1>第一个vuetsapp</h1>
    <helloBtn :msg="btn1Name" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import helloBtn from '@/components/helloBtn.vue'
@Component({
  components: {
      helloBtn
  }
})
export default class componentName extends Vue {
  //@Prop(type)private propName = propValue;
  
  created(): void {
    this.btn1Name = 'I\'m a button '
  }
  //data
  private btn1Name!: String;
  
  //method
  public methodName() {
    
  }
}

/** dfdfdfadsf */
function a() {

}
/**
 * dfdfdf
 */
</script>

<style lang='scss'

</style>