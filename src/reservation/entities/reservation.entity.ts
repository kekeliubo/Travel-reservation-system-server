// reservation.entity.ts
import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity';

@Entity()
export class Reservation {
  // @ManyToOne(() => Customer, (customer) => customer.custName, {
  //   onDelete: 'CASCADE',
  // })
  // @JoinColumn({ name: 'custName' })
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  customer: string;

  @Column()
  resvType: number;

  @Column({ length: 255 })
  resvKey: string;
}
