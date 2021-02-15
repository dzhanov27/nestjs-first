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

import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { Book } from './schema/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getAll(): Promise<Book[]> {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Book> {
    return this.bookService.getBookById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() bookDto: BookDto): Promise<Book> {
    return this.bookService.createBook(bookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Book> {
    return this.bookService.removeBook(id);
  }

  @Put(':id')
  update(@Body() bookDto: BookDto, @Param('id') id: string): Promise<Book> {
    return this.bookService.updateBook(id, bookDto);
  }
}
