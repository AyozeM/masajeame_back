import { Controller, Get, Param } from '@nestjs/common';
import { BookingService } from '../services/booking.service';

@Controller('booking')
export class BookingController {

  constructor(private readonly bookingService: BookingService) { }

  @Get()
  async getServices() {
    return await this.bookingService.getAllServices();
  }

  @Get('/:id')
  async getServiceById(@Param('id') id: number) {
    return await this.bookingService.getServiceById(+id);
  }
}
