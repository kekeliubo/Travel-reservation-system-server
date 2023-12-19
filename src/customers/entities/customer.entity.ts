import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({
  name:'customers'
})
export class Customer {

  @PrimaryColumn({ length: 255, unique: true })
  custName: string;

  @Column()
  custID: number;
}
