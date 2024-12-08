'use strict';

/**
 * protect controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::protect.protect');
