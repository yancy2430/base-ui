<template>
    <section>
        <td-table
                title="抽奖活动表"
                ref="table"
                :get-item-by-id="parameter=>lotteryDrawGetById(parameter)"
                :add-item-ok="parameter=>lotteryDrawSave(parameter)"
                :edit-item-ok="parameter=>lotteryDrawSave(parameter)"
                :delete-item-ok="parameter=>lotteryDrawRemoveById(parameter)"
                :data-source="parameter=>lotteryDrawPage(parameter)">
            <template #Search="{formState}">
                    <a-form-item label="抽奖ID" name="id">
                            <a-input-number v-model:value="formState.id"/>
                    </a-form-item>
                    <a-form-item label="抽奖名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="抽奖类型" name="type">
                            <a-input v-model:value="formState.type"/>
                    </a-form-item>
            </template>
            <template #Columns>
                    <a-table-column title="抽奖ID" data-index="id" align="center" :sorter="true" />
                    <a-table-column title="抽奖活动名称" data-index="name" align="center"  />
                    <a-table-column title="抽奖类型" data-index="type" align="center"  />
                    <a-table-column title="开始抽奖时间" data-index="startTime" align="center"  />
                    <a-table-column title="结束抽奖时间" data-index="endTime" align="center"  />
                    <a-table-column title="创建时间" data-index="createTime" align="center"  />
            </template>
            <template #AddItem="{formState}">
                    <div style="margin-right: 60px;">
                      <a-form-item label="抽奖活动名称" name="name" required>
                        <a-input v-model:value="formState.name"/>
                      </a-form-item>
                      <a-form-item label="抽奖类型" name="type" required>
                        <td-select :showSearch="false" :data-source="searchValue=>enumOption('LotteryDrawType')"
                                   v-model:value="formState.type"/>
                      </a-form-item>
                      <a-form-item label="开始抽奖时间" name="startTime" required>
                        <a-date-picker valueFormat="YYYY-MM-DD HH:mm:ss" format="YYYY-MM-DD HH:mm:ss" v-model:value="formState.startTime" inputReadOnly style="width: 100%" placeholder="选择时间" />
                      </a-form-item>
                      <a-form-item label="结束抽奖时间" name="endTime" required>
                        <a-date-picker valueFormat="YYYY-MM-DD HH:mm:ss" format="YYYY-MM-DD HH:mm:ss" v-model:value="formState.endTime" inputReadOnly style="width: 100%" placeholder="选择时间" />
                      </a-form-item>
                    </div>
            </template>
            <template #EditItem="{formState}">
              <div style="margin-right: 60px;">
                    <a-form-item label="抽奖活动名称" name="name">
                            <a-input v-model:value="formState.name"/>
                    </a-form-item>
                    <a-form-item label="抽奖类型" name="type">
                      <td-select :showSearch="false" :data-source="searchValue=>enumOption('LotteryDrawType')"
                                 v-model:value="formState.type"/>
                    </a-form-item>
                    <a-form-item label="开始抽奖时间" name="startTime">
                            <a-input v-model:value="formState.startTime"/>
                    </a-form-item>
                    <a-form-item label="结束抽奖时间" name="endTime">
                            <a-input v-model:value="formState.endTime"/>
                    </a-form-item>
              </div>
            </template>
            <template #Action="{record}">
              <a  @click="onVisiblePrize($event,record.id)">编辑奖品</a>
              <a-divider type="vertical"/>
            </template>
        </td-table>
        <a-modal destroy-on-close style="width: 900px" v-model:visible="visiblePrize" title="奖品列表" ok-text="关闭" @ok="visiblePrize=false">
          <lottery-prize :draw-id="drawId" />
        </a-modal>
    </section>
</template>

<script>
    import {lotteryDrawPage,lotteryDrawRemoveById,lotteryDrawSave,lotteryDrawGetById} from "@/api/LotteryDraw";
    import {enumOption} from "@/api/Common";
    import LotteryPrize from "@/views/lottery/LotteryPrize";

    export default {
        name: "LotteryDraw",
        components: {LotteryPrize},
        data() {
            return {
              drawId:0,
              visiblePrize:false,
              enumOption,
                lotteryDrawPage,
                lotteryDrawRemoveById,
                lotteryDrawSave,
                lotteryDrawGetById
            }
        },
        created() {
        },
        methods: {
          onVisiblePrize(e,id){
              this.visiblePrize = true;
              this.drawId = id
          }
        }
    }
</script>

<style scoped>

</style>