'use strict';

/**
 * ultralight service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ultralight.ultralight');
