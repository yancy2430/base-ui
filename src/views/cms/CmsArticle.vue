<template>
  <section>
    <td-table
        title="文章列表"
        ref="table"
        :data-source="parameter=>cmsArticlePage(parameter)">
      <template #Search="{formState}">
        <a-form-item label="文章ID" name="id">
          <a-input-number v-model:value="formState.id"/>
        </a-form-item>
        <a-form-item label="发布人" name="userName">
          <a-input v-model:value="formState.userName"/>
        </a-form-item>
        <a-form-item label="文章分类" name="categoryId">
          <td-select :data-source="cmsArticleCategoryList" field-value="id" field-name="name" v-model:value="formState.categoryId" />
        </a-form-item>
        <a-form-item label="文章标题" name="title">
          <a-input v-model:value="formState.title"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="文章ID" data-index="id" align="center" :sorter="true"/>
        <a-table-column title="发布人" data-index="userName" align="center"/>
        <a-table-column title="文章分类" data-index="categoryId" align="center" :sorter="true"/>
        <a-table-column title="文章标题" data-index="title" align="center"/>
        <a-table-column title="文章封面" data-index="cover" align="center"/>
        <a-table-column title="查看数" data-index="views" align="center" :sorter="true"/>
        <a-table-column title="评论数" data-index="comments" align="center" :sorter="true"/>
        <a-table-column title="喜欢数" data-index="likes" align="center" :sorter="true"/>
        <a-table-column title="创建时间" data-index="createTime" align="center"/>
        <a-table-column title="更新时间" data-index="updateTime" align="center"/>
        <a-table-column title="排序" data-index="sort" align="center" :sorter="true"/>
      </template>
      <template #AddItem="{formState}">
      <div style="width: 1000px">
        <a-form-item label="文章分类" name="categoryId">
          <td-select :data-source="cmsArticleCategoryList" field-value="id" field-name="name" v-model:value="formState.categoryId" />
        </a-form-item>
        <a-form-item label="文章标题" name="title">
          <a-input v-model:value="formState.title"/>
        </a-form-item>
        <a-form-item label="文章内容" name="content">
          <rich-text v-model:value="formState.content"></rich-text>
        </a-form-item>
      </div>
      </template>
    </td-table>
  </section>
</template>

<script>
import {cmsArticlePage} from "@/api/CmsArticle";
import {cmsArticleCategoryList} from "@/api/CmsArticleCategory";

export default {
  name: "CmsArticle",
  components: {},
  data() {
    return {
      cmsArticlePage: cmsArticlePage,
      cmsArticleCategoryList
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped>

</style>