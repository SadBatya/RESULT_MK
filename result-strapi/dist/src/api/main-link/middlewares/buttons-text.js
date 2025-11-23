"use strict";
/**
 * `buttons-text` middleware
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (config, { strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        strapi.log.info('In buttons-text middleware.');
        await next();
    };
};
