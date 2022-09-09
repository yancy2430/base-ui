<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>houseProductPhotoCateGetById(parameter)"
                :add-item-ok="parameter=>houseProductPhotoCateSave(parameter)"
                :edit-item-ok="parameter=>houseProductPhotoCateSave(parameter)"
                :delete-item-ok="parameter=>houseProductPhotoCateRemoveById(parameter)"
                :data-source="parameter=>houseProductPhotoCatePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="分类名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="分类名称" data-index="name" align="center"  />
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="分类名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="分类名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {houseProductPhotoCatePage,houseProductPhotoCateRemoveById,houseProductPhotoCateSave,houseProductPhotoCateGetById} from "@/api/HouseProductPhotoCate";

    export default {
        name: "HouseProductPhotoCate",
        components: {},
        data() {
            return {
                houseProductPhotoCatePage,
                houseProductPhotoCateRemoveById,
                houseProductPhotoCateSave,
                houseProductPhotoCateGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>