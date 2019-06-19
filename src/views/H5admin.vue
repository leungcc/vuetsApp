<template>
  <div>
    <h2>h5管理后台</h2>
    <div class="form-wrap">
      <div class="form-info-wrap">
        <p class="single-line">
          <label>活动标题：</label>
          <el-input
            v-model="mainItemForm.h5Title"
            size="small"
          ></el-input>
          <em class="required-star">*</em>
        </p>
        <p class="single-line">
          <label>报名截止日期：</label>
          <el-input
            v-model="mainItemForm.deadLine"
            size="small"
          ></el-input>
          <em class="required-star">*</em>
        </p>
        <p class="single-line">
          <label>活动地址（上）：</label>
          <el-input
            v-model="mainItemForm.addr1"
            size="small"
          ></el-input>
        </p>
        <p class="single-line">
          <label>活动地址（中）：</label>
          <el-input
            v-model="mainItemForm.addr1"
            size="small"
          ></el-input>
        </p>
        <p class="single-line">
          <label>活动地址（下）：</label>
          <el-input
            v-model="mainItemForm.addr1"
            size="small"
          ></el-input>
        </p>
        <p class="single-line">
          <label>选择活动icon：</label>
          <button @click="selectIconBtnCb">选择icon</button>
          <img class="icon-img" src="" alt="">
          <input type="file" ref="iconInput" class="hidden-file-input">
        </p>
        <p class="single-line">
          <label>选择活动背景图：</label>
          <button @click="selectBgBtnCb">选择bg</button>
          <input type="file" ref="bgInput" class="hidden-file-input">
        </p>
        <el-button type="primary">提交</el-button>
      </div>
      <div class="form-img-wrap">
        <img class="bg-img" src="" alt="">
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
// import  from '@/components/ .vue'

@Component({
  name: 'H5admin',
  components: {
    // 该组件有没引用什么组件，有就往这里写
  }
})
export default class componentName extends Vue {
  // props
  @Prop(String)
  msg!: String;

  // life hook
  created(): void {
    console.log('created hook')
}

  // data
  private Father: String = 'haKing';
  private Mother!: String;
  private mainItemForm: Object = {
    h5Title: '',
    deadLine: '',
    h5Addr1: '',
    h5Addr2: '',
    h5Addr3: '',
    h5Icon: '',
    h5Bg: ''
  }

  // computed
  get familyMember() {
    return `Fa: ${this.Father}, Mum: ${this.Mother}`;
  }

  // watch
  @Watch('msg', {immediate: true, deep: true})
  onMsgChange(val: String, oldVal: String) {

  };

  // method
  public sayHi() {
    alert(`my father is ${this.Father}, my Mum is ${this.Mother}, Hello everyone~`);
  }

  private selectIconBtnCb() {
    //alert('select icon')
    this.uploadImg('icon');
  }

  private selectBgBtnCb() {
    //alert('select bg')
    this.uploadImg('bg');
  }

  private uploadImg(type: String) {
    const _this = this;
    
    let elImgInput = type === 'icon' ? _this.$refs.iconInput : _this.$refs.bgInput;
    let _event = document.createEvent("MouseEvents");
    _event.initEvent("click", true, true);
    (<HTMLElement>elImgInput).dispatchEvent(_event);
  }
}
</script>

<style lang='scss'>
.form-wrap {
  width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  .form-info-wrap {
    
  }
  .form-img-wrap {
    width: 200px;
    height: calc(#{200*1.77}px);
    background-color: #f1f1f1;
  }
  .single-line {
    height: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
    margin: 0;
    button {
      height: 30px;
    }
    label {
      width: 200px;
      text-align: right;
      
    }
    .hidden-file-input {
      visibility: hidden;
      width: 1px;
    }
  }
  .icon-img {
    width: 80px;
    height: 40px;
    background-color: #f1f1f1;
    margin-left: 10px;
  }
}
</style>