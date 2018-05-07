import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import { Info } from '../info';

@Injectable()
export class InputService {
/*  info: Info {
    focal_length: 4.7,
    sensor_size: 3.7
  };

  focal_length = info.focal_length;
  sensor_size = info.sensor_size;*/
  constructor() { }

  getFocal(): number {
    return 4.7;
  }

  getSensor(): number {
    return 3.7;
  }

}
