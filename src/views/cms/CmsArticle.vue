<template>
  <section>
<!--    <upload-pic-list action="/gateway/cms/Article/upload" v-model:value="test" />-->
    <td-table
        title=""
        ref="table"
        :get-item-by-id="parameter=>cmsArticleGetById(parameter)"
        :add-item-ok="parameter=>cmsArticleSave(parameter)"
        :edit-item-ok="parameter=>cmsArticleSave(parameter)"
        :delete-item-ok="parameter=>cmsArticleRemoveById(parameter)"
        :data-source="parameter=>cmsArticlePage(parameter)">
      <template #Search="{formState}">
        <a-form-item label="发布人" name="userName">
          <a-input v-model:value="formState.userName"/>
        </a-form-item>
        <a-form-item label="文章分类" name="categoryId">
          <a-input-number v-model:value="formState.categoryId"/>
        </a-form-item>
        <a-form-item label="文章标题" name="title">
          <a-input v-model:value="formState.title"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="文章ID" data-index="id" align="center" :sorter="true"/>
        <a-table-column title="文章封面" data-index="cover" align="center"/>
        <a-table-column title="文章分类" data-index="categoryId" align="center" :sorter="true"/>
        <a-table-column title="文章标题" data-index="title" align="center"/>
        <a-table-column title="发布人" data-index="userName" align="center"/>
        <a-table-column title="查看数" data-index="views" align="center" :sorter="true"/>
        <a-table-column title="评论数" data-index="comments" align="center" :sorter="true"/>
        <a-table-column title="喜欢数" data-index="likes" align="center" :sorter="true"/>
        <a-table-column title="创建时间" data-index="createTime" align="center"/>
        <a-table-column title="更新时间" data-index="updateTime" align="center"/>
        <a-table-column title="排序" data-index="sort" align="center" :sorter="true"/>
      </template>
      <template #AddItem="{formState}">
          <div style="width: 1000px;">
            <a-form-item required label="文章分类" name="categoryId">
              <td-select-tree v-model:value="formState.categoryId" :field-names="{children:'children',parentKey:'pid', label:'name', key:'id', value: 'id' }" :data-source="cmsArticleCategoryList"/>
            </a-form-item>
            <a-form-item required label="文章标题" name="title">
              <a-input v-model:value="formState.title"/>
            </a-form-item>
            <a-form-item required label="文章封面" name="cover">

            </a-form-item>
            <a-form-item required label="文章内容" name="content">
              <rich-text v-model:value="formState.content"/>
            </a-form-item>
          </div>
      </template>
      <template #EditItem="{formState}">
        <a-form-item label="发布人ID" name="userId">
          <a-input-number v-model:value="formState.userId"/>
        </a-form-item>
        <a-form-item label="发布人" name="userName">
          <a-input v-model:value="formState.userName"/>
        </a-form-item>
        <a-form-item label="文章分类ID" name="categoryId">
          <a-input-number v-model:value="formState.categoryId"/>
        </a-form-item>
        <a-form-item label="文章标题" name="title">
          <a-input v-model:value="formState.title"/>
        </a-form-item>
        <a-form-item label="文章封面" name="cover">
          <a-input v-model:value="formState.cover"/>
        </a-form-item>
        <a-form-item label="查看数" name="views">
          <a-input-number v-model:value="formState.views"/>
        </a-form-item>
        <a-form-item label="评论数" name="comments">
          <a-input-number v-model:value="formState.comments"/>
        </a-form-item>
        <a-form-item label="喜欢数" name="likes">
          <a-input-number v-model:value="formState.likes"/>
        </a-form-item>
        <a-form-item label="文章内容" name="content">
          <a-input v-model:value="formState.content"/>
        </a-form-item>
        <a-form-item label="创建时间" name="createTime">
          <a-input v-model:value="formState.createTime"/>
        </a-form-item>
        <a-form-item label="更新时间" name="updateTime">
          <a-input v-model:value="formState.updateTime"/>
        </a-form-item>
        <a-form-item label="排序" name="sort">
          <a-input-number v-model:value="formState.sort"/>
        </a-form-item>
      </template>
    </td-table>
  </section>
</template>

<script>
import {
  cmsArticlePage,
  cmsArticleRemoveById,
  cmsArticleSave,
  cmsArticleGetById,
  cmsArticleUpload
} from "@/api/CmsArticle";
import {cmsArticleCategoryList} from "@/api/CmsArticleCategory";

export default {
  name: "CmsArticle",
  components: {},
  data() {
    return {
      test:"",
      cmsArticleCategoryList,
      cmsArticlePage,
      cmsArticleUpload,
      cmsArticleRemoveById,
      cmsArticleSave,
      cmsArticleGetById
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped>

</style>