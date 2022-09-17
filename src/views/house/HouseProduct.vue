<template>
    <section>
        <td-table
                title=""
                ref="table"
                :get-item-by-id="parameter=>houseProductGetById(parameter)"
                :add-item-ok="parameter=>houseProductSave(parameter)"
                :edit-item-ok="parameter=>houseProductSave(parameter)"
                :delete-item-ok="parameter=>houseProductRemoveById(parameter)"
                :data-source="parameter=>houseProductPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="楼盘名称" name="productName">
                            <a-input v-model:value="formState.productName"/>
                    </a-form-item>
                    <a-form-item label="开发商" name="developers">
                            <a-input v-model:value="formState.developers"/>
                    </a-form-item>
                    <a-form-item label="所在区域" name="area">
                            <a-input-number v-model:value="formState.area"/>
                    </a-form-item>
                    <a-form-item label="售楼地址" name="sellAddress">
                            <a-input v-model:value="formState.sellAddress"/>
                    </a-form-item>
                    <a-form-item label="建筑面积" name="constructionArea">
                            <a-input v-model:value="formState.constructionArea"/>
                    </a-form-item>
                    <a-form-item label="详情内容" name="content">
                            <a-input v-model:value="formState.content"/>
                    </a-form-item>
                    <a-form-item label="排序" name="sort">
                            <a-input-number v-model:value="formState.sort"/>
                    </a-form-item>
                    <a-form-item label="购房津贴" name="allowance">
                            <a-input v-model:value="formState.allowance"/>
                    </a-form-item>
                    <a-form-item label="标签" name="productTag">
                            <a-input v-model:value="formState.productTag"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="ID" data-index="id" align="center" :sorter="true" />
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
            <template #AddItem="{formState}">
                    <div style="width: 1000px">
                      <a-form-item label="楼盘名称" name="productName">
                        <a-input v-model:value="formState.productName"/>
                      </a-form-item>
                      <a-form-item label="封面图" name="cover">
                        <upload-pic
                            action="/gateway/cms/Article/upload" v-model:value="formState.cover">
                        </upload-pic>
                      </a-form-item>
                      <a-form-item label="楼盘特色" name="productFeature">
                        <a-input v-model:value="formState.productFeature"/>
                      </a-form-item>
                      <a-form-item label="楼盘均价" name="averagePrice">
                        <a-input v-model:value="formState.averagePrice"/>
                      </a-form-item>
                      <a-form-item label="楼盘总价" name="totalPrice">
                        <a-input v-model:value="formState.totalPrice"/>
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
                      <a-form-item label="售楼地址" name="sellAddress">
                        <a-input v-model:value="formState.sellAddress"/>
                      </a-form-item>
                      <a-form-item label="建筑面积" name="constructionArea">
                        <a-input v-model:value="formState.constructionArea"/>
                      </a-form-item>
                      <a-form-item label="详情内容" name="content">
                        <a-input v-model:value="formState.content"/>
                      </a-form-item>
                      <a-form-item label="排序" name="sort">
                        <a-input-number v-model:value="formState.sort"/>
                      </a-form-item>
                      <a-form-item label="购房津贴" name="allowance">
                        <a-input v-model:value="formState.allowance"/>
                      </a-form-item>
                      <a-form-item label="标签" name="productTag">
                        <a-input v-model:value="formState.productTag"/>
                      </a-form-item>
                    </div>
            </template>
            <template #EditItem="{formState}">

            </template>
        </td-table>
    </section>
</template>

<script>
    import {houseProductPage,houseProductRemoveById,houseProductSave,houseProductGetById} from "@/api/HouseProduct";

    export default {
        name: "HouseProduct",
        components: {},
        data() {
            return {
                houseProductPage,
                houseProductRemoveById,
                houseProductSave,
                houseProductGetById
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>