import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('customerTable', (customer) => {
                customer.increments('cutomer_id').primary()
                customer.string('firstName').notNullable()
                customer.string('lastName').notNullable()
                customer.string('address').notNullable()
                customer.integer('mobile').notNullable()
                customer.string('email').notNullable()
                customer.timestamp('created_at').defaultTo(knex.fn.now())
                customer.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<any> {
    knex.schema.dropTable('customerTable')
}

