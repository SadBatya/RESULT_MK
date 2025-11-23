/**
 * button-link router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::button-link.button-link", {
  config: {
    find: {
      middlewares: ["api::button-link.button-links"],
    },
  },
});
