'use strict';

/**
 * river service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::river.river');
