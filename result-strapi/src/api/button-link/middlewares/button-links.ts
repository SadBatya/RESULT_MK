/**
 * `button-links` middleware
 */

import type { Core } from "@strapi/strapi";

// const populate = {
//   link: true,
// };

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In button-links middleware.");

    // ctx.query.populate = populate;

    await next();
  };
};
