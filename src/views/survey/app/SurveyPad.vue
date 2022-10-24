<template>
  <section>
    <signature-pad
        :modelValue="signatureFile"
        @input="onChange"
        :width="500"
        :height="300"
        :customStyle="customStyle"
        :saveType="saveType"
        :saveOutput="saveOutput"
        ref="signaturePad"
    >
    </signature-pad>
    <button @click="saveSignature">Save signature</button>
  </section>
</template>

<script>
import SignaturePad from "vue3-signature-pad";
import {defineComponent, getCurrentInstance, ref, watch} from "vue";
import {Form} from "ant-design-vue";

export default defineComponent({
  name: "SurveyFrom",
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
    const content = ref(props.value)
    watch(
        props,
        () => {
          if (props.value) {
            content.value = props.value
          }
          emit('update:value', content);
          formItemContext.onFieldChange();
        }
    )
    const { proxy, ctx } = getCurrentInstance()
    const  onChange= (value)=>{
      console.log(ctx.$refs.cron.getCron())
      emit('update:value', ctx.$refs.cron.getCron());
      formItemContext.onFieldChange();
    }
    return {
      onChange,
    }
  },

});

</script>

<style scoped>
.ant-btn-wp{
  height: 40px;
  line-height: 20px;
  padding: 3px 10px;
}
</style>