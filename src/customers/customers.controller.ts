import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly CustomersService: CustomersService) {}
  @Get('lists')
  findAll(): Promise<Customer[]> {
    return this.CustomersService.findAllCustomers();
  }

  @Post('insert')
  insertCustomer(@Body() Customer: Customer) {
    this.CustomersService.insertCustomer(Customer);
  }

  @Delete('delete/:id')
  deleteCustomer(@Param('id') id: string): Promise<void> {
    return this.CustomersService.deleteCustomer(id);
  }
  
}
