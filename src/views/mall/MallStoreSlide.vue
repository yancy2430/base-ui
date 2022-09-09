<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>mallStoreSlideGetById(parameter)"
                :add-item-ok="parameter=>mallStoreSlideSave(parameter)"
                :edit-item-ok="parameter=>mallStoreSlideSave(parameter)"
                :delete-item-ok="parameter=>mallStoreSlideRemoveById(parameter)"
                :data-source="parameter=>mallStoreSlidePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="图片" name="image">
                            <a-input v-model:value="formState.image"/>
                    </a-form-item>
                    <a-form-item label="链接" name="link">
                            <a-input v-model:value="formState.link"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
                    <a-form-item label="店铺ID" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="名称" data-index="name" align="center"  />
                    <a-table-column title="图片" data-index="image" align="center"  />
                    <a-table-column title="链接" data-index="link" align="center"  />
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
                    <a-table-column title="店铺ID" data-index="storeId" align="center" :sorter="true" />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="图片" name="image">
                            <a-input v-model:value="formState.image"/>
                    </a-form-item>
                    <a-form-item label="链接" name="link">
                            <a-input v-model:value="formState.link"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
                    <a-form-item label="店铺ID" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="图片" name="image">
                            <a-input v-model:value="formState.image"/>
                    </a-form-item>
                    <a-form-item label="链接" name="link">
                            <a-input v-model:value="formState.link"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
                    <a-form-item label="店铺ID" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallStoreSlidePage,mallStoreSlideRemoveById,mallStoreSlideSave,mallStoreSlideGetById} from "@/api/MallStoreSlide";

    export default {
        name: "MallStoreSlide",
        components: {},
        data() {
            return {
                mallStoreSlidePage,
                mallStoreSlideRemoveById,
                mallStoreSlideSave,
                mallStoreSlideGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>