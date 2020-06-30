import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('vendorTable', (vendor) => {
        vendor.increments('vendor_id').primary()
        vendor.string('firstName').notNullable()
        vendor.string('lastName').notNullable()
        vendor.string('address').notNullable()
        vendor.integer('mobile').notNullable()
        vendor.string('email').notNullable()
        vendor.timestamp('created_at').defaultTo(knex.fn.now())
        vendor.timestamp('updated_at').defaultTo(knex.fn.now())

    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('vendorTable')
}

