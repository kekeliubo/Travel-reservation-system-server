export class CreateFlightDto {
  readonly flightNum: string;

  readonly price: number;

  readonly numSeats: number;

  readonly numAvail: number;

  readonly FromCity: string;

  readonly ArivCity: string;
}
