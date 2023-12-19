import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotels } from './entities/hotel.entity';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get('lists')
  findAll(): Promise<Hotels[]> {
    return this.hotelsService.findAllhotels();
  }

  @Post('insert')
  inserthotel(@Body() hotel: Hotels) {
    this.hotelsService.insertHotel(hotel);
  }

  @Delete('delete/:id')
  deletehotel(@Param('id') id: number): Promise<void> {
    return this.hotelsService.deleteHotel(id);
  }
}
