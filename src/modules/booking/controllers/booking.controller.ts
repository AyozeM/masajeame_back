import { Controller, Get } from '@nestjs/common';
import { BookingService } from '../services/booking.service';

@Controller('booking')
export class BookingController {

  constructor(private readonly bookingService: BookingService) {}

  @Get()
  getServices() {
    return this.bookingService.getAllServices();
  }
}
