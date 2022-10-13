<template>
  <div>
    <a-input v-model:value="value" />
    <a-form-item-rest>
      <cron @change="onChange" v-model:value="value" ref="cron" expression="* * * * * ? *" />
    </a-form-item-rest>
  </div>
</template>

<script>
import {Form} from "ant-design-vue";
import {defineComponent, getCurrentInstance, ref, watch} from "vue";
import Cron from "@/components/Cron/Cron";

export default defineComponent({
  name: "CronInput",
  components: {
    Cron,
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

})
</script>

<style scoped>

</style>