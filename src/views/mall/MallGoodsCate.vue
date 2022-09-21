<template>
    <section>
        <td-table
                title="商品分类"
                ref="table"
                defaultExpandAllRows
                childrenColumnName
                :data-process="data=>{
                    data.records = toTree(data.records, 'id', 'pid', 'cateName', 'children')
                    return data
                }"
                :get-item-by-id="parameter=>mallGoodsCateGetById({id:parameter.id})"
                :add-item-ok="parameter=>mallGoodsCateSave(parameter)"
                :edit-item-ok="parameter=>mallGoodsCateSave(parameter)"
                :delete-item-ok="parameter=>mallGoodsCateRemoveById(parameter)"
                :data-source="parameter=>mallGoodsCatePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="分类名称" name="cateName">
                            <a-input v-model:value="formState.cateName"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="分类名称" data-index="cateName" align="center"  />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
            </template>
            <template #AddItem="{formState}">
                   <div style="margin-right: 60px;width: 400px">
                     <a-form-item label="所属分类" name="pid">
                       <td-select-tree
                           :field-names="{children:'children',parentKey:'pid', label:'cateName', key:'id', value: 'id' }"
                           :data-source="mallGoodsCateList" v-model:value="formState.pid"/>
                     </a-form-item>
                     <a-form-item label="分类名称" name="cateName">
                       <a-input v-model:value="formState.cateName"/>
                     </a-form-item>
                     <a-form-item label="排序" name="sort">
                       <a-input-number v-model:value="formState.sort"/>
                     </a-form-item>
                   </div>
            </template>
            <template #EditItem="{formState}">
              <div style="margin-right: 60px;width: 400px">
                <a-form-item label="所属分类" name="pid">
                  <td-select-tree
                      :field-names="{children:'children',parentKey:'pid', label:'cateName', key:'id', value: 'id' }"
                      :data-source="mallGoodsCateList" v-model:value="formState.pid"/>
                </a-form-item>
                <a-form-item label="分类名称" name="cateName">
                  <a-input v-model:value="formState.cateName"/>
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
import {
  mallGoodsCatePage,
  mallGoodsCateRemoveById,
  mallGoodsCateSave,
  mallGoodsCateGetById,
  mallGoodsCateList
} from "@/api/MallGoodsCate";
    import {toTree} from "@/utils/util";

    export default {
        name: "MallGoodsCate",
        components: {},
        data() {
            return {
                mallGoodsCatePage,
                mallGoodsCateRemoveById,
                mallGoodsCateSave,
                mallGoodsCateList,
                mallGoodsCateGetById,
                toTree
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>