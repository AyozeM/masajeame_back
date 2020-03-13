import { Injectable } from '@nestjs/common';
import { DbSchema } from 'src/models/DbSchema';
import { data } from 'src/data/default_data';
@Injectable()
export class BookingService {
  getAllServices(): DbSchema[] {
    return data;
  }
}
