<template>
  <a-list item-layout="vertical" size="large" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item key="item.id">
        <template #actions>
<!--          <span v-for="{ type, text } in actions" :key="type">-->
<!--            <component :is="type" style="margin-right: 8px"/>-->
<!--            {{ text }}-->
<!--          </span>-->

          <span>
<!--            <component :is="'StarOutlined'" style="margin-right: 8px"/>-->
            <a-button v-if="!item.result" @click="toDispose('/survey/app/SurveyDispose',item.id)" type="primary">处理</a-button>
          </span>
        </template>
        <a-list-item-meta>
          <template #title>
            <a>{{ item.address }}</a>
          </template>
          <template #description>
            <p>{{ item.issue }}</p>
            <a-image
                v-for="image in item.images" :key="image"
                style="margin-right: 10px"
                height="100"
                alt="logo"
                :src="image"
            />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
import {surveyContentPage, surveyContentRemoveById, surveyContentSave, surveyContentGetById} from "@/api/SurveyContent";
import {StarOutlined, LikeOutlined, MessageOutlined} from '@ant-design/icons-vue';

export default {
  name: "SurveyContent",
  components: {
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
  },
  data() {
    return {
      surveyContentPage,
      surveyContentRemoveById,
      surveyContentSave,
      surveyContentGetById,
      data: [],
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [{
        type: 'StarOutlined',
        text: '156',
      }, {
        type: 'LikeOutlined',
        text: '156',
      }, {
        type: 'MessageOutlined',
        text: '2',
      }]
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      surveyContentPage({page: 1, size: 100}).then(res => {
        if (res.code === 200) {
          this.data = res.data.records
        }
      })
    },
    toDispose(path,id){
      this.$router.push({ path: path,query:{id:id} })
    }
  }
}
</script>

<style scoped>

</style>