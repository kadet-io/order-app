import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config';
import { OrderModule } from './order/order.module'
import { KnexModule } from 'nestjs-knex'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    KnexModule.forRoot({
      config : {
        client : "sqlite3",
        useNullAsDefault: true,
        connection : {
          filename : "./order.sqlite3"
        },
        migrations: {
          tableName: 'migrations'
        }
      }
    }),
    OrderModule,
    AuthModule,
    UsersModule
    
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
