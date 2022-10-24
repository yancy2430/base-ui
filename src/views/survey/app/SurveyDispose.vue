<template>
  <section class="wp" style="margin: 18px;padding-bottom: 30px">
    <a-form ref="formRef"
            autocomplete="off"
            @finish="onOk"
            :model="formState"
            layout="vertical">
      <a-form-item name="result" label="处理结果"
                   :rules="[{ required: true, message: '处理结果不能为空!' }]">
        <a-textarea  size="large" v-model:value="formState.result"/>
      </a-form-item>
      <a-form-item name="resultImages">
        <UploadPicList action="/gateway/cms/Article/upload" v-model:value="formState.resultImages">
        </UploadPicList>
      </a-form-item>
      <a-form-item
          name="handlerSign"
          label="处理人（签名）"
          extra="请在上面👆🏻灰色框内手写签名"
          :rules="[{ required: true, message: '签名不能为空!' }]"
      >
        <survey-pad ref="signature" v-model:value="formState.handlerSign" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" size="large" class="ant-btn-wp" html-type="submit" :loading="visible"
                  block>提交</a-button>
      </a-form-item>

    </a-form>
  </section>
</template>

<script>
import {defineComponent, getCurrentInstance, reactive, ref, toRaw} from 'vue';
import SurveyPad from "@/views/survey/app/SurveyPad";
import {surveyContentGetById, surveyContentSave} from "@/api/SurveyContent";
import {message} from 'ant-design-vue';
import {useRoute, useRouter} from 'vue-router'

export default defineComponent({
  name: "SurveyFrom",
  components:{
    SurveyPad
  },
  setup() {
    const survey = ref(false);
    const router = useRouter()
    const route = useRoute()
    const formRef = ref();
    const visible = ref(false);
    const formState = reactive({
    });
    const { proxy, ctx } = getCurrentInstance()
    const clearSignature = () => {
      ctx.$refs.signature.clearSignature()
    }
    const onOk = () => {
      formRef.value.validateFields().then(values => {
        surveyContentSave(Object.assign(values,{id:route.query.id})).then(res=>{
          if (res.code === 200) {
            ctx.$refs.signature.clearSignature()
            formRef.value.resetFields();
            message.success(res.msg)
            router.push({ path: '/survey/app/list' })
          }else {
            message.error(res.msg)
          }
        }).finally(()=>{
          visible.value = false;
        })
      }).catch(info => {
        console.log('Validate Failed:', info);
      });
    };
    return {
      survey,
      clearSignature,
      formState,
      formRef,
      visible,
      onOk,
    };
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