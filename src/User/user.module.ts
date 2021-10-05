import { UserService } from './user.service';
import { UserController } from './user.controller';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';

import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        ConfigModule.forRoot({isGlobal: true}),
    ],
    controllers: [UserController],
    providers: [UserService,],
    exports: [UserService]
})
export class UserModule { }
