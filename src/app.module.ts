import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { Flights } from './flights/entities/flight.entity';
import { Hotels } from './hotels/entities/hotel.entity';
import { Bus } from './bus/entities/bus.entity';
import { Customer } from './customers/entities/customer.entity';
import { Reservation } from './reservation/entities/reservation.entity';
import { ReservationModule } from './reservation/reservation.module';
import { HotelsModule } from './hotels/hotels.module';
import { BusModule } from './bus/bus.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    FlightsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'travel',
      synchronize: true,
      logging: true,
      entities: [Flights,Hotels,Bus,Customer,Reservation],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    ReservationModule,
    HotelsModule,
    BusModule,
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
