import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'bus',
})
export class Bus {
  @Column({ length: 255, unique: true })
  id: string;

  @PrimaryColumn({ length: 255, unique: true })
  location: string;

  @Column()
  price: number;

  @Column()
  numBus: number;

  @Column()
  numAvail: number;
}
