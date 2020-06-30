import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('customer_Order', (order) => {
        order.increments('order_id').primary()
        order.string('food_id').references('food_id').inTable('FoodAvaliable')
        order.string('vendor_id').references('vendor_id').inTable('Vendor')
        order.timestamp('created_at').defaultTo(knex.fn.now())
        order.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('customer_Order')
}

