'use strict';

/**
 * locale service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::locale.locale');
