<template>
    <section>
        <td-table
                title="首页轮播图"
                ref="table"
                :get-item-by-id="parameter=>mallSlideGetById(parameter)"
                :add-item-ok="parameter=>mallSlideSave(parameter)"
                :edit-item-ok="parameter=>mallSlideSave(parameter)"
                :delete-item-ok="parameter=>mallSlideRemoveById(parameter)"
                :data-source="parameter=>mallSlidePage(parameter)">
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="名称" data-index="name" align="center"  />
                    <a-table-column title="图片" data-index="image" align="center">
                      <template #default="{text}">
                        <a-image :src="text"/>
                      </template>
                    </a-table-column>
                    <a-table-column title="链接" data-index="link" align="center" >
                      <template #default="{text}">
                        <a target="_blank" :href="text">{{text}}</a>
                      </template>
                    </a-table-column>
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
            </template>
            <template #AddItem="{formState}">
                    <div style="width: 400px;margin-right: 60px">
                      <a-form-item label="名称" name="name">
                        <a-input v-model:value="formState.name"/>
                      </a-form-item>
                      <a-form-item label="图片" name="image">
                        <upload-pic action="/gateway/cms/Article/upload" v-model:value="formState.image">
                        </upload-pic>
                      </a-form-item>
                      <a-form-item label="链接" name="link">
                        <a-input v-model:value="formState.link"/>
                      </a-form-item>
                      <a-form-item label="排序" name="sort">
                        <a-input-number v-model:value="formState.sort"/>
                      </a-form-item>
                    </div>
            </template>
            <template #EditItem="{formState}">
              <div style="width: 400px;margin-right: 60px">
                <a-form-item label="名称" name="name">
                  <a-input v-model:value="formState.name"/>
                  </a-form-item>
                <a-form-item label="图片" name="image">
                  <upload-pic action="/gateway/cms/Article/upload" v-model:value="formState.image">
                  </upload-pic>
                </a-form-item>
                <a-form-item label="链接" name="link">
                  <a-input v-model:value="formState.link"/>
                </a-form-item>
                <a-form-item label="排序" name="sort">
                  <a-input-number v-model:value="formState.sort"/>
                </a-form-item>
              </div>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallSlidePage,mallSlideRemoveById,mallSlideSave,mallSlideGetById} from "@/api/MallSlide";

    export default {
        name: "MallSlide",
        components: {},
        data() {
            return {
                mallSlidePage,
                mallSlideRemoveById,
                mallSlideSave,
                mallSlideGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>