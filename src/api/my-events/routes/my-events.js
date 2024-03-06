module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/my-events',
     handler: 'my-events.getMyEvents',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
