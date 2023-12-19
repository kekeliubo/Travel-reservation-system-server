import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { FlightsModule } from '../flights/flights.module';
import { BusModule } from 'src/bus/bus.module';
import { HotelsModule } from 'src/hotels/hotels.module';
@Module({
  imports:[FlightsModule,BusModule,HotelsModule],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
