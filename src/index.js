const express = require('express');
const pathNative = require('path');
const { isFunction, isString } = require('./utils');

const methodsMapper = {
  POST: 'post',
  GET: 'get',
  DELETE: 'delete',
  PATCH: 'patch',
  PUT: 'put',
};

function registerRouteFunction(expressRouter, method, path, fnAction) {
  return expressRouter[method](path, fnAction);
}

function registerRouterController(expressRouter, controllerPath, method, path, action) {
  const [controllerFile, methodName] = action.split('.');

  const cwd = process.cwd();
  const fullPath = pathNative.join(cwd, controllerPath, controllerFile);
  const fnAction = require(fullPath)[methodName];
  return expressRouter[method](path, fnAction);
}


function mapRoutes(routes, { controllerPath = '', globalMiddlewares = [] }) {
  const router = express.Router();

  for (const route in routes) {
    const [method, path] = route.split(' ');
    const routeAction = routes[route];

    const methodExpress = methodsMapper[method];

    if (isFunction(routeAction)) {
      registerRouteFunction(router, methodExpress, path, routeAction);
      continue;
    }

    if (isString(routeAction) && controllerPath) {
      registerRouterController(router, controllerPath, methodExpress, path, routeAction);
      continue;
    }
  }
}

module.exports = mapRoutes;
