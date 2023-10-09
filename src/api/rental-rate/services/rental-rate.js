'use strict';

/**
 * rental-rate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rental-rate.rental-rate');
