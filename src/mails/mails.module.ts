import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MailsController } from './mails.controller';
import { MailsService } from './mails.service';
import { Mail, MailSchema } from './schema/mail.schema';

@Module({
  providers: [MailsService],
  controllers: [MailsController],
  imports: [
    MongooseModule.forFeature([{ name: Mail.name, schema: MailSchema }]),
  ],
})
export class MailsModule {}
