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
          <span class="icon-img-wrap">
            <img class="icon-img" :src="mainItemForm.h5Icon" alt="">
          </span>
          <input 
            id="iconInput"
            type="file" ref="iconInput" 
            class="hidden-file-input" 
            @change="uploadImgChange">
        </p>
        <p class="single-line">
          <label>选择活动背景图：</label>
          <button @click="selectBgBtnCb">选择bg</button>
          <input 
            id="bgInput"
            type="file" ref="bgInput" 
            class="hidden-file-input" 
            @change="uploadImgChange">
        </p>
        <el-button type="primary" class="submit-btn" @click="submitCb">提交</el-button>
      </div>
      <div class="form-img-wrap">
        <img class="bg-img" :src="mainItemForm.h5Bg" alt="">
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import IMifH5admin from '@/entity/IMifH5admin';
import IR from '@/entity/common/R';
import { http_saveH5Style, http_test, http_h5StyleInfo } from '@/http';
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
  msg!: string;

  // life hook
  async created(): Promise<any> {
    const _this = this;
    console.log('created hook.. load styleInfo now')
    const respAx_h5StyleInfo = await http_h5StyleInfo();
    const resp_h5StyleInfo: IR = respAx_h5StyleInfo.data;
    _this.setMainItemForm((<IMifH5admin>resp_h5StyleInfo.data));
  }

  // data
  private Father: string = 'haKing';
  private Mother!: string;
  private mainItemForm: IMifH5admin = {
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
  onMsgChange(val: string, oldVal: string) {

  };

  /**
   * @desc 设置mainItemForm数据
   */
  private setMainItemForm(data: IMifH5admin) {
    const _this = this;
    for(let p in data) {
      _this.mainItemForm[p] = data[p];
    }
  }

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

  private uploadImg(type: string) {
    const _this = this;
    
    let elImgInput = type === 'icon' ? _this.$refs.iconInput : _this.$refs.bgInput;
    let _event = document.createEvent("MouseEvents");
    _event.initEvent("click", true, true);
    (<HTMLElement>elImgInput).dispatchEvent(_event);
  }

  private uploadImgChange(e: Event) {
    console.log(e)
    const _this = this;
    let el = <HTMLInputElement>e.srcElement;
    if(!el)
      return;
    let inputId: string = el.id;
    let adaptorKey: string = inputId === 'iconInput'? 'h5Icon':'h5Bg';
    let file: File|null = el.files && (<FileList>el.files)[0] || null;
    let fs: FileReader = new FileReader();
    if(!file) {
      console.error('file is null')
      return;
    }
    fs.readAsDataURL(file);
    fs.onload = (e: Event) => {
      if(!fs.result) {
        console.error('fs.result is null')
        return;
      }
      _this.mainItemForm[adaptorKey] = <string>fs.result;
    }
  }

  /**
   * @desc 提交后台
   */
  public async submitCb(): Promise<any> {
    console.log('submit')
    const _this = this;
    console.log(http_saveH5Style)
    
    //const resp = await http_saveH5Style(_this.mainItemForm, (config) => new Promise(function(){return {loading: true}}))
    const resp = await http_test(_this.mainItemForm)
    console.log(resp)
  }
}
</script>

<style lang='scss'>
.form-wrap {
  width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  .submit-btn {
    width: 200px;
    margin-top: 34px;
  }
  .form-info-wrap {
    
  }
  .icon-img-wrap {
    width: 80px;
    height: 40px;
    border: 1px solid #ccc;
    margin-left: 10px;
    img{
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
  }
  // .icon-img, .bg-img {
    
  // }
  .form-img-wrap {
    width: 200px;
    height: calc(#{200*1.77}px);
    background-color: #f1f1f1;
    img {
      width: 100%;
      height: 100%;
    }
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

}
</style>