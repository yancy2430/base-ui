<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>houseProductPhotoGetById(parameter)"
                :add-item-ok="parameter=>houseProductPhotoSave(parameter)"
                :edit-item-ok="parameter=>houseProductPhotoSave(parameter)"
                :delete-item-ok="parameter=>houseProductPhotoRemoveById(parameter)"
                :data-source="parameter=>houseProductPhotoPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="产品ID" name="productId">
                            <a-input-number v-model:value="formState.productId"/>
                    </a-form-item>
                    <a-form-item label="缩略图" name="image">
                            <a-input v-model:value="formState.image"/>
                    </a-form-item>
                    <a-form-item label="分类名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="所属分类" name="type">
                            <a-input-number v-model:value="formState.type"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="产品ID" data-index="productId" align="center" :sorter="true" />
                    <a-table-column title="缩略图" data-index="image" align="center"  />
                    <a-table-column title="分类名称" data-index="name" align="center"  />
                    <a-table-column title="所属分类" data-index="type" align="center" :sorter="true" />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="产品ID" name="productId">
                            <a-input-number v-model:value="formState.productId"/>
                    </a-form-item>
                    <a-form-item label="缩略图" name="image">
                            <a-input v-model:value="formState.image"/>
                    </a-form-item>
                    <a-form-item label="分类名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="所属分类" name="type">
                            <a-input-number v-model:value="formState.type"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="产品ID" name="productId">
                            <a-input-number v-model:value="formState.productId"/>
                    </a-form-item>
                    <a-form-item label="缩略图" name="image">
                            <a-input v-model:value="formState.image"/>
                    </a-form-item>
                    <a-form-item label="分类名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="所属分类" name="type">
                            <a-input-number v-model:value="formState.type"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {houseProductPhotoPage,houseProductPhotoRemoveById,houseProductPhotoSave,houseProductPhotoGetById} from "@/api/HouseProductPhoto";

    export default {
        name: "HouseProductPhoto",
        components: {},
        data() {
            return {
                houseProductPhotoPage,
                houseProductPhotoRemoveById,
                houseProductPhotoSave,
                houseProductPhotoGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>