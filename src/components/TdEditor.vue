<template>
  <editor
      api-key="hrtdf99fbtflfnsli8xkfucmd8ldwcqjshuh4lib089vq02i"
      :init="initData"
      v-model="content"
      v-bind="$attrs"
  />
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import {Form} from "ant-design-vue";
import {defineComponent, ref, watch} from "vue";
import {cmsArticleUpload} from "@/api/CmsArticle";

export default defineComponent({
  name: "TdEditor",
  components: {
    'editor': Editor
  },
  props: {
    value: {
      type: String
    },
    height: {
      type: Number
    },
    action: {
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

    return {
      content,
      initData: {
        height: props.height,
        language: 'zh_CN',
        placeholder: '写点什么...',
        selector: 'textarea',  // change this value according to your HTML
        plugins: 'lists link image table code help wordcount',
        images_upload_url: props.action,
        images_upload_handler: function (blobInfo, progress) {
          return new Promise((resolve, reject) => {
            cmsArticleUpload()
          })
        }

      }
    }
  },

})
</script>

<style scoped>

</style>