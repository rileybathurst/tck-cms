'use strict';

/**
 * paddle-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::paddle-info.paddle-info');
