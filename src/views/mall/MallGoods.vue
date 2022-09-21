<template>
    <section>
        <td-table
                title="商品主表"
                ref="table"
                :get-item-by-id="parameter=>mallGoodsGetById(parameter)"
                :add-item-ok="parameter=>mallGoodsSave(parameter)"
                :edit-item-ok="parameter=>mallGoodsSave(parameter)"
                :delete-item-ok="parameter=>mallGoodsRemoveById(parameter)"
                :data-source="parameter=>mallGoodsPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="商品ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="所属店铺" name="storeId">
                            <a-input v-model:value="formState.storeId"/>
                    </a-form-item>
                    <a-form-item label="商品分类" name="cateId">
                            <a-input v-model:value="formState.cateId"/>
                    </a-form-item>
                    <a-form-item label="商品名称" name="goodsName">
                            <a-input v-model:value="formState.goodsName"/>
                    </a-form-item>
                    <a-form-item label="商品状态" name="state">
                            <a-input v-model:value="formState.state"/>
                    </a-form-item>
                    <a-form-item label="是否包邮" name="freeMail">
                            <a-input v-model:value="formState.freeMail"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="商品ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="所属店铺" data-index="storeId" align="center" :sorter="true" />
                    <a-table-column title="商品分类" data-index="cateId" align="center" :sorter="true" />
                    <a-table-column title="店铺分类" data-index="storeCateId" align="center" :sorter="true" />
                    <a-table-column title="封面图" data-index="cover" align="center">
                      <template #default="{text}">
                        <a-image width="60px" height="60px" :src="text[0]"></a-image>
                      </template>
                    </a-table-column>
                    <a-table-column title="商品名称" data-index="goodsName" align="center"  />
                    <a-table-column title="销售数量" data-index="salesTotal" align="center" :sorter="true" />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
                    <a-table-column title="更新时间" data-index="updateTime" align="center"  />
                    <a-table-column title="商品状态" data-index="state" align="center"  />
                    <a-table-column title="是否包邮" data-index="freeMail" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <a-form-item label="商品ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="所属店铺" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
                    <a-form-item label="商品分类" name="cateId">
                            <a-input-number v-model:value="formState.cateId"/>
                    </a-form-item>
                    <a-form-item label="店铺分类" name="storeCateId">
                            <a-input-number v-model:value="formState.storeCateId"/>
                    </a-form-item>
                    <a-form-item label="封面图" name="cover">
                            <a-input v-model:value="formState.cover"/>
                    </a-form-item>
                    <a-form-item label="商品名称" name="goodsName">
                            <a-input v-model:value="formState.goodsName"/>
                    </a-form-item>
                    <a-form-item label="商品详情" name="goodsContent">
                            <a-input v-model:value="formState.goodsContent"/>
                    </a-form-item>
                    <a-form-item label="销售数量" name="salesTotal">
                            <a-input-number v-model:value="formState.salesTotal"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
                    <a-form-item label="更新时间" name="updateTime">
                            <a-input v-model:value="formState.updateTime"/>
                    </a-form-item>
                    <a-form-item label="是否删除" name="deleted">
                            <a-input v-model:value="formState.deleted"/>
                    </a-form-item>
                    <a-form-item label="操作人" name="operator">
                            <a-input v-model:value="formState.operator"/>
                    </a-form-item>
                    <a-form-item label="商品状态" name="state">
                            <a-input v-model:value="formState.state"/>
                    </a-form-item>
                    <a-form-item label="是否包邮" name="freeMail">
                            <a-input v-model:value="formState.freeMail"/>
                    </a-form-item>
                    <a-form-item label="运费" name="freight">
                            <a-input-number v-model:value="formState.freight"/>
                    </a-form-item>
            </template>
            <template #EditItem="{formState}">
                    <a-form-item label="商品ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="所属店铺" name="storeId">
                            <a-input-number v-model:value="formState.storeId"/>
                    </a-form-item>
                    <a-form-item label="商品分类" name="cateId">
                            <a-input-number v-model:value="formState.cateId"/>
                    </a-form-item>
                    <a-form-item label="店铺分类" name="storeCateId">
                            <a-input-number v-model:value="formState.storeCateId"/>
                    </a-form-item>
                    <a-form-item label="封面图" name="cover">
                            <a-input v-model:value="formState.cover"/>
                    </a-form-item>
                    <a-form-item label="商品名称" name="goodsName">
                            <a-input v-model:value="formState.goodsName"/>
                    </a-form-item>
                    <a-form-item label="商品详情" name="goodsContent">
                            <a-input v-model:value="formState.goodsContent"/>
                    </a-form-item>
                    <a-form-item label="销售数量" name="salesTotal">
                            <a-input-number v-model:value="formState.salesTotal"/>
                    </a-form-item>
                    <a-form-item label="创建时间" name="createTime">
                            <a-input v-model:value="formState.createTime"/>
                    </a-form-item>
                    <a-form-item label="更新时间" name="updateTime">
                            <a-input v-model:value="formState.updateTime"/>
                    </a-form-item>
                    <a-form-item label="是否删除" name="deleted">
                            <a-input v-model:value="formState.deleted"/>
                    </a-form-item>
                    <a-form-item label="操作人" name="operator">
                            <a-input v-model:value="formState.operator"/>
                    </a-form-item>
                    <a-form-item label="商品状态" name="state">
                            <a-input v-model:value="formState.state"/>
                    </a-form-item>
                    <a-form-item label="是否包邮" name="freeMail">
                            <a-input v-model:value="formState.freeMail"/>
                    </a-form-item>
                    <a-form-item label="运费" name="freight">
                            <a-input-number v-model:value="formState.freight"/>
                    </a-form-item>
            </template>
        </td-table>
    </section>
</template>

<script>
    import {mallGoodsPage,mallGoodsRemoveById,mallGoodsSave,mallGoodsGetById} from "@/api/MallGoods";

    export default {
        name: "MallGoods",
        components: {},
        data() {
            return {
                mallGoodsPage,
                mallGoodsRemoveById,
                mallGoodsSave,
                mallGoodsGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>