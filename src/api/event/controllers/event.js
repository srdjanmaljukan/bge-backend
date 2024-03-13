'use strict';

/**
 * event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event', {
    async create(ctx) {
        var { id } = ctx.state.user; //ctx.state.user contains the current authenticated user 
        const response = await super.create(ctx);
        const updatedResponse = await strapi.entityService
            .update('api::event.event', response.data.id, { data: { user: id } })
        return updatedResponse;
    },
    async update(ctx) {
        var { id } = ctx.state.user
        var [event] = await strapi.entityService
            .findMany('api::event.event', {
                populate: "*",
                filters: {
                    id: ctx.request.params.id,
                    user: id
                }
            })
        if (event) {
            const response = await super.update(ctx);
            return response;
        } else {
            return ctx.unauthorized();
        }
    },
    async delete(ctx) {
        var { id } = ctx.state.user
        var [event] = await strapi.entityService
            .findMany('api::event.event', {
                populate: "*",
                filters: {
                    id: ctx.request.params.id,
                    user: id
                }
            })
        if (event) {
            const response = await super.delete(ctx);
            return response;
        } else {
            return ctx.unauthorized();
        }
    },
});
