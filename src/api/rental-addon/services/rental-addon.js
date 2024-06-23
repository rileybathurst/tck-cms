'use strict';

/**
 * rental-addon service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rental-addon.rental-addon');
