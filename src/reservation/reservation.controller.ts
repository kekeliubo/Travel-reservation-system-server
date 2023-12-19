import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post('insert')
  create(@Body() Reservation: Reservation) {
    this.reservationService.create(Reservation);
  }

  @Get('lists')
  findAll(): Promise<Reservation[]> {
    return this.reservationService.findAll();
  }
  @Get('find/:name')
  findByName(@Param('id') name:string):Promise<Reservation[]>{
    return this.reservationService.findReservationByName(name)
  }

  @Post('delete')
  remove(@Body() data: Reservation) {
    return this.reservationService.deleteReservation(data);
  }
}
