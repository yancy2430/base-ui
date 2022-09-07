<template>
    <section>
        <td-table
                title="购物车表"
                ref="table"
                :data-source="parameter=>mallCarPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="购物车ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="所属用户" name="userId">
                            <a-input-number v-model:value="formState.userId"/>
                    </a-form-item>
                    <a-form-item label="商品ID" name="goodsId">
                            <a-input-number v-model:value="formState.goodsId"/>
                    </a-form-item>
                    <a-form-item label="规格ID" name="skuId">
                            <a-input-number v-model:value="formState.skuId"/>
                    </a-form-item>
                    <a-form-item label="店铺ID" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
                    <a-form-item label="店铺名" name="storeName">
                            <a-input v-model:value="formState.storeName"/>
                    </a-form-item>
                    <a-form-item label="数量" name="num">
                            <a-input-number v-model:value="formState.num"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
                    <a-form-item label="封面" name="cover">
                            <a-input v-model:value="formState.cover"/>
                    </a-form-item>
                    <a-form-item label="商品名称" name="goodsName">
                            <a-input v-model:value="formState.goodsName"/>
                    </a-form-item>
                    <a-form-item label="状态" name="state">
                            <a-input v-model:value="formState.state"/>
                    </a-form-item>
                    <a-form-item label="规格字符串" name="skuStr">
                            <a-input v-model:value="formState.skuStr"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="购物车ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="所属用户" data-index="userId" align="center" :sorter="true" />
                    <a-table-column title="商品ID" data-index="goodsId" align="center" :sorter="true" />
                    <a-table-column title="规格ID" data-index="skuId" align="center" :sorter="true" />
                    <a-table-column title="店铺ID" data-index="storeId" align="center" :sorter="true" />
                    <a-table-column title="店铺名" data-index="storeName" align="center"  />
                    <a-table-column title="数量" data-index="num" align="center" :sorter="true" />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
                    <a-table-column title="封面" data-index="cover" align="center"  />
                    <a-table-column title="商品名称" data-index="goodsName" align="center"  />
                    <a-table-column title="状态" data-index="state" align="center"  />
                    <a-table-column title="规格字符串" data-index="skuStr" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallCarPage} from "@/api/MallCar";

    export default {
        name: "MallCar",
        components: {},
        data() {
            return {
                mallCarPage: mallCarPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>