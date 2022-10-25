<template>
  <section>
    <td-table
        ref="table"
        :searchData="{drawId:drawId}"
        :get-item-by-id="parameter=>lotteryPrizeGetById(parameter)"
        :add-item-ok="parameter=>lotteryPrizeSave(parameter)"
        :edit-item-ok="parameter=>lotteryPrizeSave(parameter)"
        :delete-item-ok="parameter=>lotteryPrizeRemoveById(parameter)"
        :data-source="parameter=>lotteryPrizePage(parameter)">
      <template #Columns>
        <a-table-column title="奖品ID" data-index="id" align="center" :sorter="true"/>
        <a-table-column title="奖品名称" data-index="name" align="center"/>
        <a-table-column title="奖品图片" data-index="image" align="center">
          <template #default="{record}">
            <a-image
                :width="40"
                :src="record.image"
            />
          </template>
        </a-table-column>
        <a-table-column title="中奖概率" data-index="probability" align="center">
          <template #default="{record}">
            {{ record.probability }}
          </template>
        </a-table-column>
      </template>
      <template #AddItem="{formState}">
        <div style="width: 400px;margin-right: 60px">
          <a-form-item label="奖品名称" name="name">
            <a-input v-model:value="formState.name"/>
          </a-form-item>
          <a-form-item label="奖品图片" name="image">
            <UploadPic action="/gateway/cms/Article/upload" v-model:value="formState.image">
            </UploadPic>
          </a-form-item>
          <a-form-item label="中奖概率" name="probability" extra="请输入1-10000的中奖几率，1 为万分之1几率，10为千分之1几率，100为百分之1几率，以此类推">
            <a-input-number style="width: 100%" :min="1" :max="10000" v-model:value="formState.probability"/>
          </a-form-item>
        </div>
      </template>
      <template #EditItem="{formState}">
        <a-form-item label="奖品名称" name="name">
          <a-input v-model:value="formState.name"/>
        </a-form-item>
        <a-form-item label="奖品图片" name="image">
          <UploadPic action="/gateway/cms/Article/upload" v-model:value="formState.image">
          </UploadPic>
        </a-form-item>
        <a-form-item label="中奖概率" name="probability" extra="请输入1-10000的中奖几率，1 为万分之1几率 10为千分之1几率 100为百分之1几率 1000为十分之1几率">
          <a-input-number :min="1" :max="10000" v-model:value="formState.probability"/>
        </a-form-item>
      </template>
    </td-table>
  </section>
</template>

<script>
import {lotteryPrizePage, lotteryPrizeRemoveById, lotteryPrizeSave, lotteryPrizeGetById} from "@/api/LotteryPrize";

export default {
  name: "LotteryPrize",
  components: {},
  props: {
    drawId: {
      type: Number,
      default(){
        return 0
      }
    }
  },
  data() {
    return {
      lotteryPrizePage,
      lotteryPrizeRemoveById,
      lotteryPrizeSave,
      lotteryPrizeGetById
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped>

</style>