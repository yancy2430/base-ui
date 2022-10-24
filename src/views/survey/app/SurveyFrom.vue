<template>
  <section class="wp" style="margin: 18px">
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
        <a-date-picker v-model:value="formState.createTime" inputReadOnly style="width: 100%" size="large" placeholder="选择时间" />
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
      <a-form-item name="resources">
        <UploadPicList action="/gateway/cms/Article/upload" v-model:value="formState.image">
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
          name="sign"
          label="问题发现者（签名）"
          extra="请在上面👆🏻灰色框内手写签名"
          @click="visible=true"
          :rules="[{ required: true, message: '签名不能为空!' }]"
      >
        <signature-pad
            style="border: 1px solid #d9d9d9;background: #e8e3e2;width: 100%"
            :height="200"
            v-model:value="formState.sign"
            saveType="image/svg+xml"
            @input="saveOutput"
            saveOutput="data_url"
            :modelValue="formState.sign"
            ref="signaturePad"
        >
        </signature-pad>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" size="large" class="ant-btn-wp" html-type="submit"
                  block>提交</a-button>
      </a-form-item>

    </a-form>
  </section>
</template>

<script>
import {defineComponent, reactive, ref, toRaw} from 'vue';
import SignaturePad from "vue3-signature-pad";

export default defineComponent({
  name: "SurveyFrom",
  components:{
    SignaturePad
  },
  setup() {
    const formRef = ref();
    const visible = ref(false);
    const formState = reactive({
    });

    const onOk = () => {
      console.log('Received values of form: ', formState);
      formRef.value.validateFields().then(values => {
        console.log('Received values of form: ', values);
        console.log('formState: ', toRaw(formState));
        visible.value = false;
        formRef.value.resetFields();
        console.log('reset formState: ', toRaw(formState));
      }).catch(info => {
        console.log('Validate Failed:', info);
      });
    };
    const saveOutput = (value) => {
      console.log(formState.sign)
    }
    return {
      saveOutput,
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