<template>
  <div class="flex flex-col h-screen p-4">
    <div class="flex-1">
      <a-table
        :columns="columns"
        :data-source="tableData"
        :pagination="pagination"
        :scroll="{ y: tableHeight }"
        @change="handleTableChange"
        row-key="key"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import Mock from 'mockjs';
import type { TablePaginationConfig } from 'ant-design-vue';
// 列配置
const columns = [
  { title: '编号', dataIndex: 'no', key: 'no' },
  { title: '姓名', dataIndex: 'name', key: 'name' },

  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: 'email', dataIndex: 'email', key: 'email' },

  { title: '地址', dataIndex: 'address', key: 'address' },
];

const tableData = ref<any[]>([]);

// 分页配置
const pagination = reactive({
  current: 1,
  pageSize: 10,
  total: 57, // 总条数
  showSizeChanger: true,
  pageSizeOptions: ['5', '10', '20', '50'],
});

// 表格高度（滚动用）
const tableHeight = ref(400);

// 获取数据函数（Mock.js 动态生成）
const fetchData = (page = 1, pageSize = 10) => {
  const total = pagination.total;
  const list = Array.from({ length: pageSize })
    .map((_, index) => {
      const id = (page - 1) * pageSize + index + 1;
      if (id > total) return null;
      return Mock.mock({
        key: id,
        no: 'No.' + '@id',
        name: '@cname',
        age: '@integer(18,60)',
        email: '@email',
        address: '@county(true)',
      });
    })
    .filter(Boolean);

  tableData.value = list;
  pagination.current = page;
  pagination.pageSize = pageSize;
};

// 处理分页变化
const handleTableChange = (pag: TablePaginationConfig) => {
  fetchData(pag.current || 1, pag.pageSize || 10);
};

// 动态计算表格高度
const calcHeight = () => {
  const headerHeight = 48 + 16; // 表格上方区域 + padding
  tableHeight.value = window.innerHeight - headerHeight - 32;
};

onMounted(() => {
  fetchData();
  calcHeight();
  window.addEventListener('resize', calcHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', calcHeight);
});
</script>

<style>
html,
body,
#app {
  height: 100%;
}
</style>
