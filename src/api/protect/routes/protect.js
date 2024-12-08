'use strict';

/**
 * protect router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::protect.protect');
