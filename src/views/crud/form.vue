<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group" :class="{'has-error': errors.has('username')}">
      <label for="username">用户名</label>
      <input type="text" class="form-control" placeholder="" name="username" v-model.trim="user.username" v-validate="'required'" data-vv-as="用户名">
      <p v-show="errors.has('username')" class="text-danger">{{ errors.first('username') }}</p>
    </div>
    <div class="form-group" :class="{'has-error': errors.has('password')}" v-if="!isUpdate">
      <label for="password">密码</label>
      <input type="password" class="form-control" placeholder="" name="password" v-model.trim="user.password" v-validate="{ required: true, min: 6 }" data-vv-as="密码">
      <p v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</p>
    </div>
    <div class="form-group" :class="{'has-error': errors.has('password2')}" v-if="!isUpdate">
      <label for="password2">再一次输入密码</label>
      <input type="password" class="form-control" placeholder="" name="password2" v-validate="{ required: true, min: 6, confirmed: 'password' }" data-vv-as="密码">
      <p v-show="errors.has('password2')" class="text-danger">{{ errors.first('password2') }}</p>
    </div>
    <div class="form-group" :class="{'has-error': errors.has('mobile')}">
      <label for="mobile">电话</label>
      <input type="tel" class="form-control" placeholder="" name="mobile" v-model.trim="user.mobile" v-validate="{ rules: { required: true, regex: /^1[34578]\d{9}$/ } }" data-vv-as="电话">
      <p v-show="errors.has('mobile')" class="text-danger">{{ errors.first('mobile') }}</p>
    </div>
    <div class="form-group" :class="{'has-error': errors.has('email')}">
      <label for="email">邮箱</label>
      <input type="email" class="form-control" placeholder="" name="email" v-model.trim="user.email" v-validate="'required|email'" data-vv-as="邮箱">
      <p v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</p>
    </div>
    <div class="form-group">
      <label for="email">性别</label>
      <label class="radio-inline">
        <input type="radio" v-model.number="user.gender" value="1"> 男
      </label>
      <label class="checkbox-inline">
        <input type="radio" v-model.number="user.gender" value="2"> 女
      </label>
    </div>
    <button type="submit" class="btn btn-primary btn-block" :disabled="disabled">保存</button>
  </form>
</template>

<script>
  import {
    site
  } from '../../libs/ajax'
  export default {
    data() {
      return {
        user: {
          gender: 1
        },
        disabled: false
      }
    },
    computed: {
      userId() {
        return this.$route.params.userId
      },
      isUpdate() {
        return this.$route.name === 'crudUpdate'
      }
    },
    mounted() {
      if (this.isUpdate) {
        this.getUserDetail()
      }
    },
    methods: {
      // 提交表单
      onSubmit() {
        this.$validator.validateAll().then(() => {
          this.disabled = true
          if (!this.isUpdate) {
            this.addUser()
          } else {
            this.updateUser()
          }
        })
      },
      // 新增用户
      addUser() {
        site.post('users/signup', this.user).then(() => {
          this.$router.go(-1)
        })
      },
      // 更新用户
      updateUser() {
        let user = this.user
        delete user.password
        site.put('users/' + this.userId, user).then(() => {
          this.$router.go(-1)
        })
      },
      // 用户详情
      getUserDetail() {
        site.get('users/' + this.userId).then((res) => {
          this.filterObject(res.data)
        })
      },
      // 遍历Object
      filterObject(obj) {
        Object.keys(this.user).forEach((key) => {
          this.user[key] = obj[key]
        })
      }
    }
  }
</script>
