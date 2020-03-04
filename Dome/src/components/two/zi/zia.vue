<template>
<div style="margin-top:60px">
  <a-table :columns="columns" :dataSource="data" :bordered="true" :pagination="false">
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
    <span slot="customTitle">角色名称</span>
    <span slot="tags" slot-scope="tags">
      <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a href="javascript:;"> {{record.name}}</a>
      <a-divider type="vertical" />
      <a href="javascript:;"></a>
      <a-divider type="vertical" />
      <a href="javascript:;" class="ant-dropdown-link">
         <a-icon type="down" />
      </a>
    </span>
  </a-table>
  </div>
</template>
<script>
const columns = [{
  dataIndex: 'name',
  key: 'name',
  slots: { title: 'customTitle' },
  scopedSlots: { customRender: 'name' },
}, {
  title: '角色标签',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '创建时间',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'tags',
  dataIndex: 'tags',
  scopedSlots: { customRender: 'tags' },
}, {
  title: 'Action',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

export default {
  data() {
    return {
      data,
      columns,
    }
  }
}
</script>
<style>
/* .ma{
  margin-top: 
} */
</style>