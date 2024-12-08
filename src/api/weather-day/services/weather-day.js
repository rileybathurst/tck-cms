'use strict';

/**
 * weather-day service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::weather-day.weather-day');
