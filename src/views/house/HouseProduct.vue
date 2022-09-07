<template>
    <section>
        <td-table
                title=""
                ref="table"
                :data-source="parameter=>houseProductPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="楼盘ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="楼盘名称" name="productName">
                            <a-input v-model:value="formState.productName"/>
                    </a-form-item>
                    <a-form-item label="开发商" name="developers">
                            <a-input v-model:value="formState.developers"/>
                    </a-form-item>
                    <a-form-item label="所在区域" name="area">
                            <a-input-number v-model:value="formState.area"/>
                    </a-form-item>
                    <a-form-item label="楼盘地址" name="address">
                            <a-input v-model:value="formState.address"/>
                    </a-form-item>
                    <a-form-item label="售卖状态" name="sellState">
                            <a-input v-model:value="formState.sellState"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="楼盘ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="封面图" data-index="cover" align="center"  />
                    <a-table-column title="楼盘名称" data-index="productName" align="center"  />
                    <a-table-column title="楼盘特色" data-index="productFeature" align="center"  />
                    <a-table-column title="楼盘均价" data-index="averagePrice" align="center"  />
                    <a-table-column title="楼盘总价" data-index="totalPrice" align="center"  />
                    <a-table-column title="开发商" data-index="developers" align="center"  />
                    <a-table-column title="所在区域" data-index="area" align="center" :sorter="true" />
                    <a-table-column title="楼盘地址" data-index="address" align="center"  />
                    <a-table-column title="售卖状态" data-index="sellState" align="center"  />
                    <a-table-column title="售楼地址" data-index="sellAddress" align="center"  />
                    <a-table-column title="建筑面积" data-index="constructionArea" align="center"  />
                    <a-table-column title="详情内容" data-index="content" align="center"  />
                    <a-table-column title="排序" data-index="sort" align="center" :sorter="true" />
                    <a-table-column title="购房津贴" data-index="allowance" align="center"  />
                    <a-table-column title="标签" data-index="productTag" align="center"  />
            </template>
        </td-table>
    </section>
</template>

<script>

    import {houseProductPage} from "@/api/HouseProduct";

    export default {
        name: "HouseProduct",
        components: {},
        data() {
            return {
                houseProductPage: houseProductPage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>