
const index = {
  path: '/index',
  name: 'index',
  alias: '',
  component: () => import('../views/webcam.vue'),
  meta: {
    authDisable: true,
  },
};

export const routes = [
  index,
];
