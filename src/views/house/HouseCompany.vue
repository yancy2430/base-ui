<template>
  <section>
    <td-table-test
        title="开发商列表"
        ref="table"
        :edit-item-ok="parameter=>houseCompanySave(parameter)"
        :get-item-by-id="parameter=>houseCompanyGetById(parameter)"
        :data-source="parameter=>houseCompanyPage(parameter)"
        :add-item-ok="parameter=>houseCompanySave(parameter)"
        :delete-item-ok="parameter=>houseCompanyRemoveById(parameter)"
    >
      <template #Search="{formState}">
        <a-form-item label="开发商ID" name="id">
          <a-input-number v-model:value="formState.id"/>
        </a-form-item>
        <a-form-item label="开发商名称" name="name">
          <a-input v-model:value="formState.name"/>
        </a-form-item>
        <a-form-item label="创建时间" name="createTime">
          <a-input v-model:value="formState.createTime"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="开发商ID" data-index="id" align="center" :sorter="true"/>
        <a-table-column title="开发商名称" data-index="name" align="center"/>
        <a-table-column title="创建时间" data-index="createTime" align="center"/>
      </template>
      <template #AddItem="{formState}">
        <div style="padding: 20px 80px 0 0;">
          <a-form-item label="开发商名称" name="name">
            <a-input v-model:value="formState.name"/>
          </a-form-item>
        </div>
      </template>
      <template #EditItem="{formState}">
        <div style="padding: 20px 80px 0 0;">
          <a-form-item label="开发商名称" name="name">
            <a-input v-model:value="formState.name"/>
          </a-form-item>
        </div>
      </template>
    </td-table-test>
  </section>
</template>

<script>
import {houseCompanyPage, houseCompanySave,houseCompanyGetById,houseCompanyRemoveById} from "@/api/HouseCompany";
import TdTableTest from "@/components/TdTableTest";

export default {
  name: "HouseCompany",
  components: {TdTableTest},
  data() {
    return {
      houseCompanyPage,
      houseCompanySave,
      houseCompanyGetById,
      houseCompanyRemoveById
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped>

</style>