<!--
 * @Author: NanNan
 * @Date: 2025-09-07 02:29:52
 * @LastEditTime: 2025-09-07 03:12:45
 * @Description: 
-->
<template>
  <div class="p-4">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box">
          <a-card title="基础表单" :bordered="false">
            <div ref="chartContainer">
              <a-form
                :model="formState"
                v-bind="formItemLayout"
                name="nest-messages"
                :validate-messages="validateMessages"
                @finish="onFinish"
              >
                <a-form-item
                  :name="['user', 'name']"
                  label="姓名:"
                  :rules="[{ required: true }]"
                >
                  <a-input v-model:value="formState.user.name" />
                </a-form-item>
                <a-form-item
                  :name="['user', 'birth']"
                  label="生日:"
                  :rules="[{ required: true }]"
                >
                  <a-date-picker
                    v-model:value="formState.user.birth"
                    value-format="YYYY-MM-DD"
                  />
                </a-form-item>
                <a-form-item
                  :name="['user', 'email']"
                  label="Email:"
                  :rules="[{ type: 'email' }]"
                >
                  <a-input v-model:value="formState.user.email" />
                </a-form-item>
                <a-form-item
                  :name="['user', 'age']"
                  label="年龄:"
                  :rules="[{ type: 'number', min: 0, max: 99 }]"
                >
                  <a-input-number v-model:value="formState.user.age" />
                </a-form-item>
                <a-form-item :name="['user', 'website']" label="网址:">
                  <a-input v-model:value="formState.user.website" />
                </a-form-item>
                <a-form-item :name="['user', 'introduction']" label="介绍:">
                  <a-textarea v-model:value="formState.user.introduction" />
                </a-form-item>
                <a-form-item
                  :wrapper-col="{ ...formItemLayout.wrapperCol, offset: 6 }"
                >
                  <a-button type="primary" html-type="submit">Submit</a-button>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box">
          <a-card title="动态表单" :bordered="false">
            <div ref="waterChartRef"></div>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

// -- 动态表单
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const validateMessages = {
  required: '${label} 不能为空！',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const formState = reactive({
  user: {
    name: '',
    birth: '',
    age: undefined,
    email: '',
    website: '',
    introduction: '',
  },
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};
</script>
