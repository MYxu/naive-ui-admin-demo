import { resultSuccess } from '../_util';

const menusList = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: 'LAYOUT',
    redirect: '/dashboard/monitor',
    meta: {
      icon: 'DashboardOutlined',
      title: 'Dashboard',
    },
    children: [
      {
        path: 'console',
        name: 'dashboard_console',
        component: '/dashboard/console/console',
        meta: {
          title: '主控台',
        },
      },
      {
        path: 'monitor',
        name: 'dashboard_monitor',
        component: '/dashboard/monitor/monitor',
        meta: {
          hidden: true,
          keepAlive: true,
          title: 'DataTable测试',
        },
      },
      {
        path: 'workplace',
        name: 'dashboard_workplace',
        component: '/dashboard/workplace/workplace',
        meta: {
          hidden: true,
          title: '工作台',
        },
      },
      {
        path: 'dataTable1',
        name: 'dashboardDataTable1',
        component: '/dashboard/dataTable/useVirtualScroll',
        meta: {
          keepAlive: true,
          title: '虚拟滚动table',
        },
      },
      {
        path: 'dataTable2',
        name: 'dashboardDataTable2',
        component: '/dashboard/dataTable/notUseVirtualScroll',
        meta: {
          keepAlive: true,
          title: '非虚拟滚动table',
        },
      },
    ],
  },
];

export default [
  {
    url: '/api/menus',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(menusList);
    },
  },
];
