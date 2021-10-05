import { ProductModule } from './product/product.module';
import { UserModule } from './User/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthModule } from './auth/auth.module';
import { typeOrmConfigAsync } from './config/typeorm.config';
import {ConfigModule} from "@nestjs/config";
@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync
      ),
      ConfigModule.forRoot({isGlobal: true}),
       UserModule, AuthModule, ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
