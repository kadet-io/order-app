/* eslint-disable no-console */
import { Controller } from '@nestjs/common';
import { OrderService } from './order.service'
import { ConfigService } from '@nestjs/config';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService : OrderService, private configService: ConfigService){
       
        console.log(this.configService.get('client'))
        console.log(process.env.client)
    }

    
    
}
