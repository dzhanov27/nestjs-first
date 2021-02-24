import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MailsController } from './mails/mails.controller';
import { MailsModule } from './mails/mails.module';

@Module({
  imports: [
    BooksModule,
    MailsModule,
    MongooseModule.forRoot(
      // process.env.MONGODB_URI,
      'mongodb+srv://Iskhak:1q2w3e4r@cluster0.ioquc.mongodb.net/app?retryWrites=true&w=majority',
    ),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
