module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '68286ea022ef32bef3c44766859484ce'),
  },
});
