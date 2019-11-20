import { CalendarRangeHourService } from 'ng2-semantic-ui/dist';
import { Time } from '@angular/common';

export class DaysOfWeek  {
    dEstimatedHour : Time;
    dReturnHour: Time;
    dName: String;
    dTravelDay:boolean;
   
    constructor(  public dDaysOfWeek :number) {
    this.dDaysOfWeek=dDaysOfWeek;  
   switch(dDaysOfWeek)
   {
     case 1: {this.dName= "Sun"; break;}
     case 2: this.dName = "Mon";break;
     default : this.dName ="Good Luck"
   }
    }
  
    
}