"use strict";
module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
        var _a;
        strapi.log.info("Global populate middleware executed");
        // Применяем только к API запросам для global content-type
        if (ctx.request.url.includes("/api/button-links")) {
            const populateConfig = {
                link: true,
            };
            ctx.query.populate = {
                ...ctx.query.populate,
                ...populateConfig,
            };
            strapi.log.debug("Populate config applied:", ctx.query.populate);
        }
        await next();
        // Можно добавить пост-обработку ответа здесь
        if (ctx.request.url.includes("/api/button-links") && ((_a = ctx.body) === null || _a === void 0 ? void 0 : _a.data)) {
            strapi.log.info("Global data populated successfully");
        }
    };
};
