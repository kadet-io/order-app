import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('FoodAvaliable', (food) => {
        food.increments('food_id').primary()
        food.string('vendor_id').references('vendor_id').inTable('Vendor').notNullable()
        food.string('type').notNullable()
        food.integer('price').notNullable()
        food.string('quantity').notNullable()
        food.timestamp('created_at').defaultTo(knex.fn.now())
        food.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('FoodAvaliable')
}

