"use strict";
/**
 * `button-links` middleware
 */
Object.defineProperty(exports, "__esModule", { value: true });
// const populate = {
//   link: true,
// };
exports.default = (config, { strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        strapi.log.info("In button-links middleware.");
        // ctx.query.populate = populate;
        await next();
    };
};
