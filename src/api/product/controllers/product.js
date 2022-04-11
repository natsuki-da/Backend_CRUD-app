'use strict';

/**
 *  product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product');

// module.exports = {
//     async find (ctx){
//         console.log(123);
//         const products = await strapi.services.product.find(ctx.query);
//         return products.map((product)=> product.title);
//     },
// };
