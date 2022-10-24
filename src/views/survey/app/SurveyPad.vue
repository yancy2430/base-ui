<template>
  <section style="position: relative">
    <signature-pad
        style="border: 1px solid #d9d9d9;background: #e8e3e2;width: 100%"
        :height="200"
        saveType="image/svg+xml"
        @input="onChange"
        saveOutput="data_url"
        ref="signaturePad"
    >
    </signature-pad>
    <div @click="clearSignature" style="position: absolute;bottom: 5px;right: 5px;color: #888">清除</div>
  </section>
</template>

<script>
import SignaturePad from "vue3-signature-pad";
import {defineComponent, getCurrentInstance, reactive, ref, watch} from "vue";
import {Form} from "ant-design-vue";

export default defineComponent({
  name: "SurveyPad",
  components:{
    SignaturePad,
  },
  props: {
    value: {
      type: String
    }
  },
  emits: ['update:value'],
  setup(props, {emit}) {
    const formItemContext = Form.useInjectFormItemContext();
    const  onChange= (value)=>{
      emit('update:value', value);
      formItemContext.onFieldChange();
    }
    // const { proxy, ctx } = getCurrentInstance()
    // console.log(ctx.$refs.signaturePad.clearSignature())

    return {
      onChange,
    }
  },
  methods:{
    clearSignature(){
      this.$refs.signaturePad.clearSignature()
    }
  }

});

</script>

<style scoped>
.ant-btn-wp{
  height: 40px;
  line-height: 20px;
  padding: 3px 10px;
}
</style>