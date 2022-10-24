<template>
  <a-list size="small"  :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>{{ item }}</a-list-item>
    </template>
  </a-list>
</template>

<script>
import {surveyContentPage,surveyContentRemoveById,surveyContentSave,surveyContentGetById} from "@/api/SurveyContent";

export default {
  name: "SurveyContent",
  components: {},
  data() {
    return {
      surveyContentPage,
      surveyContentRemoveById,
      surveyContentSave,
      surveyContentGetById,
      data:[],
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped>

</style>