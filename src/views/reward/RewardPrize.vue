<template>
    <section>
        <td-table
                title="奖励信息表"
                ref="table"
                :data-source="parameter=>rewardPrizePage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="奖励ID" name="prizeId">
                            <a-input-number v-model:value="formState.prizeId"/>
                    </a-form-item>
                    <a-form-item label="悬赏ID" name="rewardId">
                            <a-input-number v-model:value="formState.rewardId"/>
                    </a-form-item>
                    <a-form-item label="奖励类型" name="prizeType">
                            <a-input-number v-model:value="formState.prizeType"/>
                    </a-form-item>
                    <a-form-item label="奖励名称" name="prizeName">
                            <a-input v-model:value="formState.prizeName"/>
                    </a-form-item>
                    <a-form-item label="奖励价值" name="prizeValue">
                            <a-input-number v-model:value="formState.prizeValue"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="奖励ID" data-index="prizeId" align="center" :sorter="true" />
                    <a-table-column title="悬赏ID" data-index="rewardId" align="center" :sorter="true" />
                    <a-table-column title="奖励类型" data-index="prizeType" align="center" :sorter="true" />
                    <a-table-column title="奖励名称" data-index="prizeName" align="center"  />
                    <a-table-column title="奖励价值" data-index="prizeValue" align="center" :sorter="true" />
            </template>
        </td-table>
    </section>
</template>

<script>
    import TdTable from "@/components/TdTable/TdTable";
    import {rewardPrizePage} from "@/api/RewardPrize";

    export default {
        name: "RewardPrize",
        components: {TdTable},
        data() {
            return {
                rewardPrizePage: rewardPrizePage
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>