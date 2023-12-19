import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getList(): Array<number> {
    return [1, 2, 3, 4];
  }
}
