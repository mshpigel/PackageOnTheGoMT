import { Component, OnInit, Input } from '@angular/core';
import { UserPath } from '../Classes/UserPath';
import PlaceResult = google.maps.places.PlaceResult;
import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';
import {WeekDay} from '@angular/common';
import { DaysOfWeek } from '../Classes/DaysOfWeeks';

@Component({
  selector: 'app-user-path',
  templateUrl: './user-path.component.html',
  styleUrls: ['./user-path.component.css']
})
export class UserPathComponent implements OnInit {
  @Input()
path:UserPath=new UserPath()
// {  
//   upDateTime: new Array<DaysOfWeek>();
// };
    constructor() {
      this.path.upDateTime =[
        new DaysOfWeek(1),new DaysOfWeek(2),new DaysOfWeek(3),
        new DaysOfWeek(4),new DaysOfWeek(5),new DaysOfWeek(6)
      ];
   }

  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
//public days: String[] = ["Sun","Mon","Tue","Wed","Thurs","Fri"];

  onLocationDestinationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.path.upDestinationX=  location.latitude;
    this.path.upDestinationY= location.longitude;
    
  }
  onLocationOriginSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.path.upOriginX= location.latitude;
    this.path.upOriginY = location.longitude;
  }
  onDaySelected(day,event)
  {
    if  (this.path.upDateTime==undefined){
      this.path.upDateTime =[
        new DaysOfWeek(1),new DaysOfWeek(2),new DaysOfWeek(3),
        new DaysOfWeek(4),new DaysOfWeek(5),new DaysOfWeek(6)
      ];
    };
    this.path.upDateTime[day].dTravelDay=event.checked;
  }
  
  ngOnInit() {
    this.path.upDateTime =[
      new DaysOfWeek(1),new DaysOfWeek(2),new DaysOfWeek(3),
      new DaysOfWeek(4),new DaysOfWeek(5),new DaysOfWeek(6)
    ];
  }

}
