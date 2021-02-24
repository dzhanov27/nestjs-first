import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MailDocument = Mail & Document;

@Schema()
export class Mail {
  @Prop()
  sender: string;

  @Prop()
  subject: string;

  @Prop()
  description: string;

  @Prop()
  date: string;
}

export const MailSchema = SchemaFactory.createForClass(Mail);
