<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>mallGoodsAttrValueGetById(parameter)"
                :add-item-ok="parameter=>mallGoodsAttrValueSave(parameter)"
                :edit-item-ok="parameter=>mallGoodsAttrValueSave(parameter)"
                :delete-item-ok="parameter=>mallGoodsAttrValueRemoveById(parameter)"
                :data-source="parameter=>mallGoodsAttrValuePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="属性值" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="属性ID" name="attrId">
                            <a-input-number v-model:value="formState.attrId"/>
                    </a-form-item>
                    <a-form-item label="产品ID" name="goodsId">
                            <a-input-number v-model:value="formState.goodsId"/>
                    </a-form-item>
                    <a-form-item label="属性名" name="attrName">
                            <a-input v-model:value="formState.attrName"/>
                    </a-form-item>
                    <a-form-item label="属性值" name="attrValue">
                            <a-input v-model:value="formState.attrValue"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="属性值" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="属性ID" data-index="attrId" align="center" :sorter="true" />
                    <a-table-column title="产品ID" data-index="goodsId" align="center" :sorter="true" />
                    <a-table-column title="属性名" data-index="attrName" align="center"  />
                    <a-table-column title="属性值" data-index="attrValue" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="属性值" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="属性ID" name="attrId">
                            <a-input-number v-model:value="formState.attrId"/>
                    </a-form-item>
                    <a-form-item label="产品ID" name="goodsId">
                            <a-input-number v-model:value="formState.goodsId"/>
                    </a-form-item>
                    <a-form-item label="属性名" name="attrName">
                            <a-input v-model:value="formState.attrName"/>
                    </a-form-item>
                    <a-form-item label="属性值" name="attrValue">
                            <a-input v-model:value="formState.attrValue"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="属性值" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="属性ID" name="attrId">
                            <a-input-number v-model:value="formState.attrId"/>
                    </a-form-item>
                    <a-form-item label="产品ID" name="goodsId">
                            <a-input-number v-model:value="formState.goodsId"/>
                    </a-form-item>
                    <a-form-item label="属性名" name="attrName">
                            <a-input v-model:value="formState.attrName"/>
                    </a-form-item>
                    <a-form-item label="属性值" name="attrValue">
                            <a-input v-model:value="formState.attrValue"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallGoodsAttrValuePage,mallGoodsAttrValueRemoveById,mallGoodsAttrValueSave,mallGoodsAttrValueGetById} from "@/api/MallGoodsAttrValue";

    export default {
        name: "MallGoodsAttrValue",
        components: {},
        data() {
            return {
                mallGoodsAttrValuePage,
                mallGoodsAttrValueRemoveById,
                mallGoodsAttrValueSave,
                mallGoodsAttrValueGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>