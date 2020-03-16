import { Injectable } from '@nestjs/common';
import { DbSchema } from 'src/models/DbSchema';
import { data } from 'src/data/default_data';
@Injectable()
export class BookingService {

  private data: DbSchema[];
  constructor() {
    this.data = data;
  }
  async getAllServices(): Promise<DbSchema[]> {
    await new Promise(resolve => setTimeout(() => resolve(), 1500));
    return this.data;
  }

  async getServiceById(id: number): Promise<DbSchema> {
    await new Promise(resolve => setTimeout(() => resolve(), 3000));
    return this.data.find(e => e.id === id);
  }
}
