'use strict';

/**
 * invasive service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::invasive.invasive');
