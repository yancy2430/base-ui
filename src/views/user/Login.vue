<template>
  <section class="main">
    <a-form
        :model="formData"
        :rules="formRules"
        name="custom-validation"
        @finish="toLogin"
        ref="formRef"
    >
      <a-form-item name="username">
        <a-input size="large" v-model:value="formData.username" type="text" autocomplete="off">
          <template #prefix>
            <user-outlined/>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item name="password">
        <a-input-password size="large" v-model:value="formData.password" autocomplete="off">
          <template #prefix>
            <LockOutlined/>
          </template>
        </a-input-password>
      </a-form-item>
      <a-input-group size="large">
        <a-row :gutter="16">
          <a-col :span="16">
            <a-form-item name="validationCode">
              <a-input size="large" v-model:value="formData.validationCode" type="text" autocomplete="off">
                <template #prefix>
                  <SafetyCertificateOutlined/>
                </template>
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <img style="width: 100%;border: 1px solid #d9d9d9;border-radius: 2px;" @click="getValidationCode"
                 height="39" :src="vCodeImg"/>
          </a-col>
        </a-row>
      </a-input-group>
      <a-form-item>
        <a-button size="large" :loading="loginLoading" type="primary"  block html-type="submit" style="height: 40px;">登录</a-button>
      </a-form-item>
      <a-form-item>
        <div class="user-login-other">
          其他登录方式
        </div>

      </a-form-item>
    </a-form>

  </section>
</template>

<script>
import {UserOutlined, LockOutlined, SafetyCertificateOutlined} from '@ant-design/icons-vue';
import {sysUserLogin, sysUserValidationCode} from "@/api/SysUser";
import storage from 'store'

export default {
  name: "Login",
  components: {
    UserOutlined,
    LockOutlined,
    SafetyCertificateOutlined
  },
  data() {
    return {
      loginLoading:false,
      formData: {},
      vCodeImg: "",
      formRules: {
        username: [
          {required: true, message: "账号不能为空", trigger: 'change'}
        ],
        password: [
          {required: true, message: "密码不能为空", trigger: 'change'}
        ],
        validationCode: [
          {
            required: true, message: "验证码不能为空", trigger: 'blur'
          }
        ]
      }
    }
  },
  created() {
    this.getValidationCode()
  },
  methods: {
    getValidationCode() {
      sysUserValidationCode().then(res => {
        console.log(res.data)
        this.vCodeImg = res.data
      })
    },
    toLogin() {
      this.$refs.formRef.validate().then(res => {
        console.log(res)
        res.domain = window.document.domain
        this.loginLoading = true
        sysUserLogin(res).then(result => {
          this.loginLoading = false
          if (result.code === 200) {
            storage.set("ACCESS_TOKEN",result.data)
            this.$message.success(result.msg)
            this.$router.replace("/survey/app/SurveyList")
          }else {
            this.getValidationCode()
            this.$message.error(result.msg)
          }
        }).catch(err=>{
          this.getValidationCode()
          this.loginLoading = false
        })

      }).catch(err => {
        console.log('error', err);
      });
    }
  }
}
</script>

<style scoped>
.main {
  width: 368px;
  margin: 0 auto;
}
</style>
