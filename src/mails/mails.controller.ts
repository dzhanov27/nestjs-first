import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  HttpCode,
  HttpStatus,
  Header,
  Body,
} from '@nestjs/common';

import { MailsService } from './mails.service';
import { MailDto } from './dto/mail.dto';
import { Mail } from './schema/mail.schema';

@Controller('mails')
export class MailsController {
  constructor(private readonly bookService: MailsService) {}

  @Get()
  getAll(): Promise<Mail[]> {
    return this.bookService.getAllMails();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Mail> {
    return this.bookService.getMailById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() mailDto: MailDto): Promise<Mail> {
    return this.bookService.createMail(mailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Mail> {
    return this.bookService.removeMail(id);
  }
}
