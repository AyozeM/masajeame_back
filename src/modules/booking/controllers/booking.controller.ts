import { Controller, Get, Param } from '@nestjs/common';
import { BookingService } from '../services/booking.service';

@Controller('booking')
export class BookingController {

  constructor(private readonly bookingService: BookingService) {}

  @Get()
  getServices() {
    return this.bookingService.getAllServices();
  }

  @Get('/:id')
  getServiceById(@Param('id') id: number) {
    return this.bookingService.getServiceById(+id);
  }
}
