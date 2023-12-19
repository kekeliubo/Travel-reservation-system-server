import { Injectable } from '@nestjs/common';
import { CreateBusDto } from './dto/create-bus.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Bus } from './entities/bus.entity';

@Injectable()
export class BusService {
  constructor(
    @InjectEntityManager()
    private manager: EntityManager,
  ) {}
  async insertBus(createBusDto: CreateBusDto) {
    this.manager.save(Bus, createBusDto);
  }

  async findAllBus(): Promise<Bus[]> {
    return await this.manager.find(Bus);
  }

  async deleteBus(id: string): Promise<void> {
    await this.manager.delete(Bus, { id });
  }
  async findBusByLocation(location: string): Promise<Bus> {
    return await this.manager.findOneBy(Bus, { location });
  }
  async updateDeleteBusInfo(location: string) {
    const bus = await this.findBusByLocation(location);
    bus.numAvail--;
    return await this.insertBus(bus);
  }
  async updateAddBusInfo(location: string) {
    const bus = await this.findBusByLocation(location);
    bus.numAvail++;
    return await this.insertBus(bus);
  }
}
