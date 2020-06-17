import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config';
import { OrderModule } from './order/order.module';
import { OrderService } from './order/order.service'
import { KnexModule } from 'nestjs-knex'
import { TerminusModule } from '@nestjs/terminus'
import { HealthController } from './health/health.controller';



@Module({
  imports: [
    TerminusModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    KnexModule.forRoot({
      config : {
        client : process.env.client,
        useNullAsDefault: true,
        connection: {
          filename : "./order.sqlite"
        }
      }
    }),
    OrderModule
  ],
  controllers: [AppController, HealthController],
  providers: [AppService, OrderService]
})
export class AppModule {}
