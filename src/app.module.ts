import { Module } from '@nestjs/common';
import { BookingModule } from './modules/booking/booking.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
@Module({
  imports: [
    BookingModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../public'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
