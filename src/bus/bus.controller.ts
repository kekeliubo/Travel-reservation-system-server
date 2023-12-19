import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusService } from './bus.service';
import { Bus } from './entities/bus.entity';
@Controller('bus')
export class BusController {
  constructor(private readonly BusService: BusService) {}

  
  @Get('lists')
  findAll(): Promise<Bus[]> {
    return this.BusService.findAllBus();
  }

  @Post('insert')
  insertBus(@Body() Bus: Bus) {
    this.BusService.insertBus(Bus);
  }

  @Delete('delete/:id')
  deleteBus(@Param('id') id: string): Promise<void> {
    return this.BusService.deleteBus(id);
  }
}
