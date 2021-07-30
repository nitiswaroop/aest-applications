import { Component } from "@angular/core";
import { User } from './app.user.model';
import data from './app.user.data.json';

@Component({
    selector: 'table-app',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
  })
  export class TableComponent {
    users: User[] = data;
    selectedUsers: User[] = [];
    selectedAll: boolean = false;
    topChecked: boolean = false;
    totalCount: number = data.length;
    startRow: number=1;
    endRow: number = 5;
    isSelected: boolean=false;
    
    selectedUser(user: User, event: any){
     let index =  this.selectedUsers.findIndex(object => object.id == user.id);
      if(event.target.checked){
        this.isSelected=true;
        if(index == -1)
        this.selectedUsers.push(user);
      }else{
        this.isSelected=false;
        if(index > -1)
        this.selectedUsers.splice(index,1);
        if(this.selectedAll){
          this.topChecked = !this.selectedAll;
        }
      }
    }  
  
    selectAllUsers(event: any){
      if(event.target.checked){
        this.isSelected=true;
      }else{
        this.isSelected=false;
      }
      
      this.selectedAll = event.target.checked;
      this.topChecked = event.target.checked;
      this.selectedUsers = [...this.users];
    }  
    receiveData(event: any){
      this.startRow = event.startRow;
      this.endRow = event.endRow;
        console.log(event);
    }
  }