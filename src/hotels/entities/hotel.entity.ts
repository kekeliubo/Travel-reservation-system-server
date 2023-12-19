import { Entity, Column,PrimaryColumn } from 'typeorm';

@Entity({
  name:'hotels'
})
export class Hotels {
  @Column({ length: 255, unique: true })
  id: string;

  @PrimaryColumn({ length: 255, unique: true })
  location: string;

  @Column()
  price: number;

  @Column()
  numRooms: number;

  @Column()
  numAvail: number;
}
