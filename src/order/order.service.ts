import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex} from 'nestjs-knex';

@Injectable()

export class OrderService {
    constructor(@InjectKnex() private readonly knex: Knex){
        this.createCustomerTable()
        this.createVendorTable()
    }

     createCustomerTable() {
        if(!  this.knex.schema.hasTable('customerTable')) {
             this.knex.schema.createTable('customerTable', customer=> {
                customer.increments('customer_id').primary();
                customer.string('firstName')
                customer.string('lastName')
                customer.string('Address')
                customer.integer('mobile')
                customer.string('email')
            })
        }
    }

    createVendorTable() {
        if(!  this.knex.schema.hasTable('vendorTable')){
             this.knex.schema.createTable('vendorTable', vendor=> {
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
