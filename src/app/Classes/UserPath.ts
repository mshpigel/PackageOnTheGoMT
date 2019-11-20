import { Time } from '@angular/common';
import { DaysOfWeek } from './DaysOfWeeks';

export class UserPath {
        public uCode: number;
        public upHasCar: boolean;
        public upDestinationY : number;
        public upOriginX: number//image;
        public upOriginY: number//image;
        public upDestinationX : number;
        public upDateTime: Array<DaysOfWeek>;
}

