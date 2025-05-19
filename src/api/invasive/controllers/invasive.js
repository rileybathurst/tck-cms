'use strict';

/**
 * invasive controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::invasive.invasive');
