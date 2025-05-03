'use strict';

/**
 * top50 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top50.top50');
