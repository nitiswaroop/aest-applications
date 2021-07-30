import { Component, Input } from "@angular/core";
import { User } from "../table/app.user.model";

@Component({
    selector: 'details-app',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
  })
  export class DetailsComponent {
    @Input() usersData: User[] | undefined;
    @Input() isSelected: boolean | undefined;
    hasData :boolean = false;
    constructor(){
      
    }

    
  }