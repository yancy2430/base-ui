<template>
    <section>
        <td-table
                title="巡查问题表"
                ref="table"
                :get-item-by-id="parameter=>surveyContentGetById(parameter)"
                :add-item-ok="parameter=>surveyContentSave(parameter)"
                :edit-item-ok="parameter=>surveyContentSave(parameter)"
                :delete-item-ok="parameter=>surveyContentRemoveById(parameter)"
                :data-source="parameter=>surveyContentPage(parameter)">
            <template #Search="{formState}">
              <a-form-item label="状态" name="status">
                <a-input v-model:value="formState.status"/>
              </a-form-item>
              <a-form-item label="地点" name="address">
                <a-input v-model:value="formState.address"/>
              </a-form-item>
              <a-form-item label="问题" name="issue">
                <a-input v-model:value="formState.issue"/>
              </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
                    <a-table-column title="地点" data-index="address" align="center"  />
                    <a-table-column title="存在问题" data-index="issue" align="center"  />
                    <a-table-column title="存在问题图片" data-index="monitorSign" align="center">
                      <template #default="{record}">
                        <a-image v-if="record.images" :src="record.images[0]"/>
                      </template>
                    </a-table-column>
                    <a-table-column title="处理方式" data-index="handling" align="center"  />
                    <a-table-column title="处理结果" data-index="result" align="center"  />
                    <a-table-column title="处理结果图片" data-index="monitorSign" align="center">
                      <template #default="{record}">
                        <a-image v-if="record.resultImages" :src="record.resultImages[0]"/>
                      </template>
                    </a-table-column>
                    <a-table-column title="扣分" data-index="points" align="center" :sorter="true" />
                    <a-table-column title="领导签字" data-index="leadSign" align="center"  />
                    <a-table-column title="监察签字" data-index="monitorSign" align="center">
                      <template #default="{record}">
                        <a-image :src="record.monitorSign"/>
                      </template>
                    </a-table-column>
                    <a-table-column title="状态" data-index="status" align="center"  />
            </template>
        </td-table>
    </section>
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
                surveyContentGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>