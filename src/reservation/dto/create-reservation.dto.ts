import { Customer } from '../../customers/entities/customer.entity';

export class CreateReservationDto {
  customer: string;
  resvType: number;
  resvKey: string;
}
