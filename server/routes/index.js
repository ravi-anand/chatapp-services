const express = require('express');
const router = express.Router();

const routerlist = require('./router');
const adminrouter = require('./adminroute');
const grouprouter = require('./grouproutes');

const defaultRoutes = [
    {
      path: '/api',
      route: routerlist,
    },
    {
      path: '/admin',
      route: adminrouter,
    },
    {
      path: '/group',
      route: grouprouter
    }
  ];
  
  
  defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
 
  module.exports = router;