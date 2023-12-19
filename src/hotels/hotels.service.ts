import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Hotels } from './entities/hotel.entity';
import { EntityManager } from 'typeorm';
import { CreateHotelDto } from './dto/create-hotel.dto';

@Injectable()
export class HotelsService {
  constructor(
    @InjectEntityManager()
    private manager: EntityManager,
  ) {}
  async insertHotel(createhotelDto: CreateHotelDto) {
    this.manager.save(Hotels, createhotelDto);
  }

  async findAllhotels(): Promise<Hotels[]> {
    return await this.manager.find(Hotels);
  }

  async deleteHotel(id: number): Promise<void> {
    await this.manager.delete(Hotels, {id});
  }
  async findHotelByLocation(location: string): Promise<Hotels> {
    return await this.manager.findOneBy(Hotels, { location });
  }
  async updateDeleteHotelInfo(location: string) {
    const Hotel = await this.findHotelByLocation(location);
    Hotel.numAvail--;
    return await this.insertHotel(Hotel);
  }
  async updateAddHotelInfo(location: string) {
    const Hotel = await this.findHotelByLocation(location);
    Hotel.numAvail++;
    return await this.insertHotel(Hotel);
  }
}
