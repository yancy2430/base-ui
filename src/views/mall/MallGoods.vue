<template>
    <section>
        <td-table
                title="商品主表"
                ref="table"
                :data-source="parameter=>mallGoodsPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="商品ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="所属店铺" name="storeId">
                            <a-input v-model:value="formState.storeId"/>
                    </a-form-item>
                    <a-form-item label="商品分类" name="cateId">
                      <td-select-tree
                          :field-names="{children:'children',parentKey:'pid', label:'cateName', key:'id', value: 'id' }"
                          :data-source="mallGoodsCateList" v-model:value="formState.pid"/>
                    </a-form-item>
                    <a-form-item label="商品名称" name="goodsName">
                            <a-input v-model:value="formState.goodsName"/>
                    </a-form-item>
                    <a-form-item label="商品状态" name="state">
                            <a-input v-model:value="formState.state"/>
                    </a-form-item>
                    <a-form-item label="是否包邮" name="freeMail">
                      <a-select v-model:value="formState.freeMail" allowClear>
                        <a-select-option :value="true">包邮</a-select-option>
                        <a-select-option :value="false">不包邮</a-select-option>
                      </a-select>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="商品ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="所属店铺" data-index="storeName" align="center" :sorter="true" />
                    <a-table-column title="商品分类" data-index="goodsCateName" align="center" :sorter="true" />
                    <a-table-column title="店铺分类" data-index="storeCateName" align="center" :sorter="true" />
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
        </td-table>
    </section>
</template>

<script>
    import {mallGoodsPage} from "@/api/MallGoods";
    import {mallGoodsCateList} from "@/api/MallGoodsCate";
    import {enumOption} from "@/api/Common";

    export default {
        name: "MallGoods",
        components: {},
        data() {
            return {
              enumOption,
                mallGoodsPage,
              mallGoodsCateList,
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>