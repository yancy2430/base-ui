<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>houseProductBasisCatePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="" name="id">
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
                    <a-table-column title="" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="分类名称" data-index="name" align="center"  />
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
            </template>
        </td-table>
    </section>
</template>

<script>

    import {houseProductBasisCatePage} from "@/api/HouseProductBasisCate";

    export default {
        name: "HouseProductBasisCate",
        components: {},
        data() {
            return {
                houseProductBasisCatePage: houseProductBasisCatePage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>