<template>
  <section class="wp" style="margin: 18px;padding-bottom: 30px">
    <a-form ref="formRef"
            autocomplete="off"
            @finish="onOk"
            :model="formState"
            layout="vertical">
      <a-form-item
          name="createTime"
          label="发现时间"

          :rules="[{ required: true, message: '发现时间不能为空!' }]"
      >
        <a-date-picker valueFormat="YYYY-MM-DD HH:mm:ss" format="YYYY-MM-DD HH:mm:ss" v-model:value="formState.createTime" inputReadOnly style="width: 100%" size="large" placeholder="选择时间" />
      </a-form-item>
      <a-form-item
          name="address"
          label="发现地点"
          :rules="[{ required: true, message: '发现地点不能为空!' }]"
      >
        <a-input  size="large" v-model:value="formState.address"/>
      </a-form-item>
      <a-form-item name="issue" label="存在的问题"
                   :rules="[{ required: true, message: '存在的问题不能为空!' }]">
        <a-textarea  size="large" v-model:value="formState.issue"/>
      </a-form-item>
      <a-form-item name="images">
        <UploadPicList action="/gateway/cms/Article/upload" v-model:value="formState.images">
        </UploadPicList>
      </a-form-item>
      <a-form-item
          name="points"
          label="扣分"
          :rules="[{ required: true, message: '扣分不能为空!' }]"
      >
        <a-input-number style="width: 100%;"  size="large" v-model:value="formState.points"/>
      </a-form-item>
      <a-form-item
          name="monitorSign"
          label="问题发现者（签名）"
          extra="请在上面👆🏻灰色框内手写签名"
          :rules="[{ required: true, message: '签名不能为空!' }]"
      >
        <survey-pad ref="signature" v-model:value="formState.monitorSign" />
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
import {surveyContentSave} from "@/api/SurveyContent";
import {message} from 'ant-design-vue';
import {useRouter} from 'vue-router'

export default defineComponent({
  name: "SurveyFrom",
  components:{
    SurveyPad
  },
  setup() {
    const router = useRouter()
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
        surveyContentSave(values).then(res=>{
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