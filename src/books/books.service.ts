import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BookDto } from './dto/book.dto';
import { Book, BookDocument } from './schema/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async getBookById(id: string): Promise<Book> {
    return this.bookModel.findById(id);
  }

  async createBook(bookDto: BookDto): Promise<Book> {
    const newBook = new this.bookModel(bookDto);
    return newBook.save();
  }

  async removeBook(id: string): Promise<Book> {
    return this.bookModel.findByIdAndRemove(id);
  }

  async updateBook(id: string, bookDto: BookDto): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, bookDto, { new: true });
  }
}
