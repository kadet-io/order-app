import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex} from 'nestjs-knex';

@Injectable()

export class OrderService {
    constructor(@InjectKnex() private readonly knex: Knex){
        this.createCustomerTable()
        this.createVendorTable()
    }

     createCustomerTable() {
        if(!  this.knex.schema.hasTable('User')) {
             this.knex.schema.createTable('User', user=> {
                user.increments('customer_id').primary();
                user.string('firstName')
                user.string('lastName')
                user.string('Address')
                user.integer('mobile')
                user.string('email')
            })
        }
    }

    createVendorTable() {
        if(!  this.knex.schema.hasTable('Vendor')){
             this.knex.schema.createTable('Vendor', vendor=> {
                vendor.increments('vendor_id').primary();
                vendor.string('firstName')
                vendor.string('lastName')
                vendor.string('address')
                vendor.integer('mobile')
                vendor.string('email')
            })
        }
    }

    createFoodAvaliableTable() {
        if(! this.knex.schema.hasTable('FoodAvaliable')) {
            this.knex.schema.createTable('FoodAvaliable', food => {
                food.increments('food_id').primary()
                food.string('vendor_id').references('vendor_id').inTable('Vendor')
                food.string('type')
                food.integer('price')
                food.string('quantity')
            })
        }
    }

     createCustomerOrderTable() {
        if(! this.knex.schema.hasTable('customer_Order')){
             this.knex.schema.createTable('cutomer_Order', order=> {
                order.increments('order_id').primary()
                order.string('food_id').references('food_id').inTable('FoodAvaliable')
                order.string('vendor_id').references('vendor_id').inTable('Vendor')
                order.date('date')
                
            })
        }
    }

}
