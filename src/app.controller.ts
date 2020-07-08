import {
  Controller,
  Get,
  HttpStatus,
  Res,
  Header,
  Body,
  Post,
  UseGuards,
  Request
} from '@nestjs/common';
import { AppService } from './app.service';
import * as Joi from 'joi'
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service'
import { JwtAuthGuard } from './auth/jwt-auth.guard';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

 
  @Get()
  @Header('Content-Type', 'application/json')
  getHello(): string {
    return this.appService.getHello();
    
  }

  @Post()
  @Header('Content-Type', 'application/json')
  createOrder(@Body() data : {title: string, description: string, price: number}, @Res() res) {
    const date = new Date().getTime()
    const orderId = Math.floor(Math.random() * date).toString()
    // eslint-disable-next-line no-console
    console.log(orderId)
    const testData = data
    const orderSchema = Joi.object().keys({
      id : Joi.ref(orderId).toString(),
      title : Joi.string().required(),
      description : Joi.string().required(),
      price : Joi.number().greater(200).positive().required()
    
    })
    Joi.validate(testData, orderSchema, (err: Error) => {
      
      if(err) {
       res.json({
          status: err.stack,
          message: err.message,
          data: testData
        })
        
      } else {
        res.json({
          status: 'success',
          message: 'Validation successful',
          data: testData
        })
      }
    })

  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req){
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req){
    return req.user
  }
  
}
