'use strict';

/**
 * A set of functions called "actions" for `my-events`
 */

module.exports = {
  getMyEvents: async (ctx, next) => {
    try {
      const user = ctx.state.user
      // const data = await strapi
      //   .service("api::my-events.getMyEvents")
      //   .getMyEvents(ctx.state.user);
      // console.log("Data", data);
      try {
        const myEvents = await strapi.entityService.findMany("api::event.event", {filters: {user: {id: {$eq: user.id}}}, populate: "*"})
        ctx.body = myEvents;
    } catch (error) {
        return error
    }

    } catch (err) {
      ctx.badRequest("Get My Events controller error", { moreDetails: err });
    }
  }
};
