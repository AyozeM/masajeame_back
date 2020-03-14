import { Injectable } from '@nestjs/common';
import { DbSchema } from 'src/models/DbSchema';
import { data } from 'src/data/default_data';
@Injectable()
export class BookingService {

  private data: DbSchema[];
  constructor() {
    this.data = data;
  }
  getAllServices(): DbSchema[] {
    return this.data;
  }

  getServiceById(id: number): DbSchema {
    return this.data.find(e => e.id === id);
  }
}
