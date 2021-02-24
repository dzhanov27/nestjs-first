import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MailDto } from './dto/mail.dto';
import { Mail, MailDocument } from './schema/mail.schema';

@Injectable()
export class MailsService {
  constructor(@InjectModel(Mail.name) private mailModel: Model<MailDocument>) {}

  async getAllMails(): Promise<Mail[]> {
    return this.mailModel.find().exec();
  }

  async getMailById(id: string): Promise<Mail> {
    return this.mailModel.findById(id);
  }

  async createMail(mailDto: MailDto): Promise<Mail> {
    const newMail = new this.mailModel(mailDto);
    return newMail.save();
  }

  async removeMail(id: string): Promise<Mail> {
    return this.mailModel.findByIdAndRemove(id);
  }
}
