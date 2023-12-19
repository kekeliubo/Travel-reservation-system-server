import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { EntityManager } from 'typeorm';
import { FlightsService } from '../flights/flights.service';
import { BusService } from 'src/bus/bus.service';
import { HotelsService } from 'src/hotels/hotels.service';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    private FlightsService: FlightsService,
    private BusService:BusService,
    private HotelService:HotelsService,
    @InjectEntityManager()
    private manager: EntityManager,
  ) {}
  create(createReservationDto: CreateReservationDto) {
    this.manager.save(Reservation, createReservationDto);
    if (createReservationDto.resvType === 0) {
      this.FlightsService.updateDeleteFlightInfo(createReservationDto.resvKey);
    }else if(createReservationDto.resvType === 1){
      this.HotelService.updateDeleteHotelInfo(createReservationDto.resvKey);
    }else if(createReservationDto.resvType === 2){
      this.BusService.updateDeleteBusInfo(createReservationDto.resvKey)
    }
  }

  async findAll(): Promise<Reservation[]> {
    return await this.manager.find(Reservation);
  }
  async findReservationByName(customer:string):Promise<Reservation[]>{
    return await this.manager.findBy(Reservation,{customer});
  }

   async deleteReservation(data: Reservation): Promise<void> {
    this.manager.delete(Reservation, {id:data.id});
    if (data.resvType === 0) {
      this.FlightsService.updateAddFlightInfo(data.resvKey);
    }else if(data.resvType === 1){
      this.HotelService.updateAddHotelInfo(data.resvKey);
    }else if(data.resvType === 2){
      this.BusService.updateAddBusInfo(data.resvKey)
    }
  }
}
