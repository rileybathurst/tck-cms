module.exports = ({ env }) => {

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
      sessions: {
        maxSessionLifespan: 1800,
	maxRefreshTokenLifespan: 2592000,
      },
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER'),
      },
    },
  };
};

