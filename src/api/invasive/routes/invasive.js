'use strict';

/**
 * invasive router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::invasive.invasive');
