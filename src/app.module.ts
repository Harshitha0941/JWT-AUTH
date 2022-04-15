/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Posts } from './entitty/post.entity';
import { User } from './entitty/user.entity';
import { UserModule } from './module/user/user.module';



@Module({
  imports: [
  
TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'PostMgmt1',
      entities: [User,Posts],
      synchronize: false,
    }),UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
