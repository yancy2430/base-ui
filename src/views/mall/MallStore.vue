<template>
  <section>
    <td-table
        title="商铺列表"
        ref="table"
        :get-item-by-id="parameter=>mallStoreGetById({id:parameter.id})"
        :add-item-ok="parameter=>mallStoreSave(parameter)"
        :edit-item-ok="parameter=>mallStoreSave(parameter)"
        :delete-item-ok="parameter=>mallStoreRemoveById(parameter)"
        :data-source="parameter=>mallStorePage(parameter)">
      <template #Search="{formState}">
        <a-form-item label="SID" name="id">
          <a-input-number v-model:value="formState.id"/>
        </a-form-item>
        <a-form-item label="店铺分类" name="cateId">
          <td-select-tree v-model:value="formState.cateId" :field-names="{children:'children',parentKey:'pid', label:'cateName', key:'id', value: 'id' }" :data-source="mallStoreCateList"/>
        </a-form-item>
        <a-form-item label="店铺名称" name="storeName">
          <a-input v-model:value="formState.storeName"/>
        </a-form-item>
        <a-form-item label="审核状态 " name="state">
          <a-input v-model:value="formState.state"/>
        </a-form-item>
        <a-form-item label="营业情况 " name="business">
          <a-input v-model:value="formState.business"/>
        </a-form-item>
      </template>
      <template #Columns>
        <a-table-column title="SID" data-index="id" align="center" :sorter="true"/>
        <a-table-column title="店铺分类" data-index="cateName" align="center" :sorter="true"/>
        <a-table-column title="店铺名称" data-index="storeName" align="center"/>
        <a-table-column title="店铺logo" data-index="logo" align="center">
          <template #default="{record}">
            <a-image width="60px" height="60px" :src="record.logo"/>
          </template>
        </a-table-column>
        <a-table-column title="审核状态 " data-index="state" align="center"/>
        <a-table-column title="营业情况 " data-index="business" align="center"/>
        <a-table-column title="创建时间" data-index="createTime" align="center"/>
      </template>
      <template #AddItem="{formState}">
        <a-form-item label="店铺分类" name="cateId">
          <a-input-number v-model:value="formState.cateId"/>
        </a-form-item>
        <a-form-item label="店铺名称" name="storeName">
          <a-input v-model:value="formState.storeName"/>
        </a-form-item>
        <a-form-item label="负责人" name="principalName">
          <a-input v-model:value="formState.principalName"/>
        </a-form-item>
        <a-form-item label="负责人联系电话" name="principalTel">
          <a-input v-model:value="formState.principalTel"/>
        </a-form-item>
        <a-form-item label="店铺logo" name="logo">
          <a-input v-model:value="formState.logo"/>
        </a-form-item>
        <a-form-item label="标签列表" name="storeTag">
          <a-input v-model:value="formState.storeTag"/>
        </a-form-item>
        <a-form-item label="店铺状态 " name="state">
          <a-input v-model:value="formState.state"/>
        </a-form-item>
        <a-form-item label="操作人" name="operator">
          <a-input v-model:value="formState.operator"/>
        </a-form-item>
        <a-form-item label="店铺地址" name="address">
          <a-input v-model:value="formState.address"/>
        </a-form-item>
        <a-form-item label="创建时间" name="createTime">
          <a-input v-model:value="formState.createTime"/>
        </a-form-item>
        <a-form-item label="负责人身份证" name="principalIdentity">
          <a-input v-model:value="formState.principalIdentity"/>
        </a-form-item>
        <a-form-item label="店铺简介" name="about">
          <a-input v-model:value="formState.about"/>
        </a-form-item>
        <a-form-item label="执照照片" name="license">
          <a-input v-model:value="formState.license"/>
        </a-form-item>
        <a-form-item label="店铺状态 " name="business">
          <a-input v-model:value="formState.business"/>
        </a-form-item>
      </template>
      <template #EditItem="{formState}">
        <a-form-item label="店铺ID" name="id">
          <a-input-number v-model:value="formState.id"/>
        </a-form-item>
        <a-form-item label="用户ID" name="userId">
          <a-input-number v-model:value="formState.userId"/>
        </a-form-item>
        <a-form-item label="店铺分类" name="cateId">
          <a-input-number v-model:value="formState.cateId"/>
        </a-form-item>
        <a-form-item label="店铺名称" name="storeName">
          <a-input v-model:value="formState.storeName"/>
        </a-form-item>
        <a-form-item label="负责人" name="principalName">
          <a-input v-model:value="formState.principalName"/>
        </a-form-item>
        <a-form-item label="负责人联系电话" name="principalTel">
          <a-input v-model:value="formState.principalTel"/>
        </a-form-item>
        <a-form-item label="店铺logo" name="logo">
          <upload-pic
              action="/gateway/cms/Article/upload" v-model:value="formState.logo">
          </upload-pic>
        </a-form-item>
        <a-form-item label="标签列表" name="storeTag">
          <a-input v-model:value="formState.storeTag"/>
        </a-form-item>
        <a-form-item label="店铺状态 " name="state">
          <a-input v-model:value="formState.state"/>
        </a-form-item>
        <a-form-item label="操作人" name="operator">
          <a-input v-model:value="formState.operator"/>
        </a-form-item>
        <a-form-item label="店铺地址" name="address">
          <a-input v-model:value="formState.address"/>
        </a-form-item>
        <a-form-item label="创建时间" name="createTime">
          <a-input v-model:value="formState.createTime"/>
        </a-form-item>
        <a-form-item label="负责人身份证" name="principalIdentity">
          <a-input v-model:value="formState.principalIdentity"/>
        </a-form-item>
        <a-form-item label="店铺简介" name="about">
          <a-input v-model:value="formState.about"/>
        </a-form-item>
        <a-form-item label="执照照片" name="license">
          <a-input v-model:value="formState.license"/>
        </a-form-item>
        <a-form-item label="店铺状态 " name="business">
          <a-input v-model:value="formState.business"/>
        </a-form-item>
      </template>
    </td-table>
  </section>
</template>

<script>
import {mallStorePage, mallStoreRemoveById, mallStoreSave, mallStoreGetById} from "@/api/MallStore";
import {mallStoreCateList} from "@/api/MallStoreCate";
export default {
  name: "MallStore",
  components: {},
  data() {
    return {
      mallStoreCateList,
      mallStorePage,
      mallStoreRemoveById,
      mallStoreSave,
      mallStoreGetById
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped>

</style>