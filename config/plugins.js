const crypto = require('crypto');

module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
      },
    },
  });