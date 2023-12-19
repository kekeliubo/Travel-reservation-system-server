import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectEntityManager()
    private manager: EntityManager,
  ) {}
  async insertCustomer(createCustomerDto: CreateCustomerDto) {
    this.manager.save(Customer, createCustomerDto);
  }

  async findAllCustomers(): Promise<Customer[]> {
    return await this.manager.find(Customer);
  }

  async deleteCustomer(id: string): Promise<void> {
    await this.manager.delete(Customer, { custID: id });
  }
}
