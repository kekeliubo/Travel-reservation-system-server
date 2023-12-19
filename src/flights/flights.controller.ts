import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './entities/flight.entity';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get('lists')
  findAll(): Promise<Flights[]> {
    return this.flightsService.findAllFlights();
  }

  @Post('insert')
  insertFlight(@Body() flight: Flights) {
    this.flightsService.insertFlight(flight);
  }
  

  @Delete('delete/:flightNum')
  deleteFlight(@Param('flightNum') flightNum: string): Promise<void> {
    return this.flightsService.deleteFlight(flightNum);
  }
}
