"use strict";
/**
 * button-link router
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreRouter("api::button-link.button-link", {
    config: {
        find: {
            middlewares: ["api::button-link.button-links"],
        },
    },
});
