<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>houseProductBasisGetById(parameter)"
                :add-item-ok="parameter=>houseProductBasisSave(parameter)"
                :edit-item-ok="parameter=>houseProductBasisSave(parameter)"
                :delete-item-ok="parameter=>houseProductBasisRemoveById(parameter)"
                :data-source="parameter=>houseProductBasisPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="字段名" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="所属分类" name="cateId">
                            <a-input-number v-model:value="formState.cateId"/>
                    </a-form-item>
                    <a-form-item label="类型" name="type">
                            <a-input v-model:value="formState.type"/>
                    </a-form-item>
                    <a-form-item label="可选值" name="forvalue">
                            <a-input v-model:value="formState.forvalue"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="字段名" data-index="name" align="center"  />
                    <a-table-column title="所属分类" data-index="cateId" align="center" :sorter="true" />
                    <a-table-column title="类型" data-index="type" align="center"  />
                    <a-table-column title="可选值" data-index="forvalue" align="center"  />
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="字段名" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="所属分类" name="cateId">
                            <a-input-number v-model:value="formState.cateId"/>
                    </a-form-item>
                    <a-form-item label="类型" name="type">
                            <a-input v-model:value="formState.type"/>
                    </a-form-item>
                    <a-form-item label="可选值" name="forvalue">
                            <a-input v-model:value="formState.forvalue"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="字段名" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="所属分类" name="cateId">
                            <a-input-number v-model:value="formState.cateId"/>
                    </a-form-item>
                    <a-form-item label="类型" name="type">
                            <a-input v-model:value="formState.type"/>
                    </a-form-item>
                    <a-form-item label="可选值" name="forvalue">
                            <a-input v-model:value="formState.forvalue"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {houseProductBasisPage,houseProductBasisRemoveById,houseProductBasisSave,houseProductBasisGetById} from "@/api/HouseProductBasis";

    export default {
        name: "HouseProductBasis",
        components: {},
        data() {
            return {
                houseProductBasisPage,
                houseProductBasisRemoveById,
                houseProductBasisSave,
                houseProductBasisGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>