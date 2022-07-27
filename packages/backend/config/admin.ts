export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0f7ff0142e30f7680c45fa83c3407b34'),
  },
});
