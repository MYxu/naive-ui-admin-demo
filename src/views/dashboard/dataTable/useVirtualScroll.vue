<template>
  <div style="width: 1000px;">
    <n-input v-model="inputVal" style="margin-bottom: 10px;" />
    <n-data-table
      ref="table"
      :columns="columns"
      :data="data"
      :max-height="500"
      :virtual-scroll="true"
    />
  </div>
</template>

<script>
  import { ref, h, defineComponent } from 'vue';

  const columns = [
    {
      type: 'selection',
      fixed: 'left',
    },
    {
      title: 'Name',
      key: 'name',
      width: 200,
      fixed: 'left',
    },
    {
      title: 'Age',
      key: 'age',
      width: 100,
      fixed: 'left',
    },
    {
      title: 'Row',
      key: 'row',
      render(row, index) {
        return h('span', ['row ', index]);
      },
    },
    {
      title: 'Address',
      key: 'address',
      width: 200,
      fixed: 'right',
    },
  ];

  export default defineComponent({
    name: 'dashboardDataTable1',
    setup() {
      return {
        inputVal: ref(0),
        data: Array.apply(null, { length: 200 }).map((_, index) => ({
          key: index,
          name: `${index}`,
          age: 32,
          address: `London, Park Lane no. ${index}`,
        })),
        columns,
      };
    },
  });
</script>
