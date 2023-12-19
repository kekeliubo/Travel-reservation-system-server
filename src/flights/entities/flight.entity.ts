import { Entity, PrimaryColumn, Column } from 'typeorm';
@Entity({
  name: 'flights',
})
export class Flights {
  @PrimaryColumn({ length: 255 })
  flightNum: string;

  @Column()
  price: number;

  @Column()
  numSeats: number;

  @Column()
  numAvail: number;

  @Column({ length: 255 })
  FromCity: string;

  @Column({ length: 255 })
  ArivCity: string;
}
