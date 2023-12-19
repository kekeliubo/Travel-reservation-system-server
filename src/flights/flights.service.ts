import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Flights } from './entities/flight.entity';
import { CreateFlightDto } from './dto/create-flight.dto';

@Injectable()
export class FlightsService {
  constructor(
    @InjectEntityManager()
    private manager: EntityManager,
  ) {}

  async insertFlight(createFlightDto: CreateFlightDto) {
    this.manager.save(Flights, createFlightDto);
  }

  async findAllFlights(): Promise<Flights[]> {
    return await this.manager.find(Flights);
  }

  async deleteFlight(flightNum: string): Promise<void> {
    const result = await this.manager.delete(Flights, {flightNum});

    if (result.affected === 0) {
      throw new NotFoundException(
        `Flight with flightNum ${flightNum} not found`,
      );
    }
  }
  async findFlightByNum(flightNum: string): Promise<Flights> {
    return await this.manager.findOneBy(Flights, { flightNum });
  }

  async updateDeleteFlightInfo(flightNum: string) {
    const flight = await this.findFlightByNum(flightNum);
    flight.numAvail--;
    return await this.insertFlight(flight);
  }
  async updateAddFlightInfo(flightNum: string) {
    const flight = await this.findFlightByNum(flightNum);
    flight.numAvail++;
    return await this.insertFlight(flight);
  }
}
