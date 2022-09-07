<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>houseProductBasisValuePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="id" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="属性ID" name="basisId">
                            <a-input-number v-model:value="formState.basisId"/>
                    </a-form-item>
                    <a-form-item label="产品ID" name="productId">
                            <a-input-number v-model:value="formState.productId"/>
                    </a-form-item>
                    <a-form-item label="属性值" name="basisValue">
                            <a-input v-model:value="formState.basisValue"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="id" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="属性ID" data-index="basisId" align="center" :sorter="true" />
                    <a-table-column title="产品ID" data-index="productId" align="center" :sorter="true" />
                    <a-table-column title="属性值" data-index="basisValue" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>

    import {houseProductBasisValuePage} from "@/api/HouseProductBasisValue";

    export default {
        name: "HouseProductBasisValue",
        components: {},
        data() {
            return {
                houseProductBasisValuePage: houseProductBasisValuePage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>