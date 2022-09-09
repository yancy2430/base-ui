<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>mallGoodsSkuSpecGetById(parameter)"
                :add-item-ok="parameter=>mallGoodsSkuSpecSave(parameter)"
                :edit-item-ok="parameter=>mallGoodsSkuSpecSave(parameter)"
                :delete-item-ok="parameter=>mallGoodsSkuSpecRemoveById(parameter)"
                :data-source="parameter=>mallGoodsSkuSpecPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="库存编码" name="code">
                            <a-input v-model:value="formState.code"/>
                    </a-form-item>
                    <a-form-item label="名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="值" name="value">
                            <a-input v-model:value="formState.value"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="库存编码" data-index="code" align="center"  />
                    <a-table-column title="名称" data-index="name" align="center"  />
                    <a-table-column title="值" data-index="value" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="库存编码" name="code">
                            <a-input v-model:value="formState.code"/>
                    </a-form-item>
                    <a-form-item label="名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="值" name="value">
                            <a-input v-model:value="formState.value"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="库存编码" name="code">
                            <a-input v-model:value="formState.code"/>
                    </a-form-item>
                    <a-form-item label="名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="值" name="value">
                            <a-input v-model:value="formState.value"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallGoodsSkuSpecPage,mallGoodsSkuSpecRemoveById,mallGoodsSkuSpecSave,mallGoodsSkuSpecGetById} from "@/api/MallGoodsSkuSpec";

    export default {
        name: "MallGoodsSkuSpec",
        components: {},
        data() {
            return {
                mallGoodsSkuSpecPage,
                mallGoodsSkuSpecRemoveById,
                mallGoodsSkuSpecSave,
                mallGoodsSkuSpecGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>