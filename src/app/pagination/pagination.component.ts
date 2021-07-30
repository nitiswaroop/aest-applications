import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
  })
  export class PaginationComponent {
    @Output() 
    dataEvent = new EventEmitter<any>();
    @Input() 
    totalCount: number=0;
 
    pageNumber: number = 1;
    startRow: number = 1;
    endRow: number = 5;
    lastStartRow : number =0;
    disableForward : boolean = false;
    disableBackward: boolean = true;
    size: number=5;
    pageSize = (this.totalCount%this.size) == 1? Math.ceil(this.totalCount/this.size): this.totalCount/this.size;

    changeSize(){
        this.pageSize = (this.totalCount%this.size) == 1? Math.ceil(this.totalCount/this.size): this.totalCount/this.size;
        this.changePage(1, true);
    }
    
    changePage(pageNumber: number, isforward: boolean){
        this.pageNumber  = pageNumber;
        if(pageNumber==1){
            this.disableBackward = true;
        }else{
            this.disableBackward=false;
        }
        if(pageNumber-2 == this.size){
            this.disableForward = true;
        }else{
            this.disableForward =false;
        }
        this.startRow = (this.pageNumber-1)*this.size+1;
        this.endRow = this.pageNumber*this.size;    
        
        let obj = {
        "startRow":this.startRow,
        "endRow": this.endRow
        };
        this.dataEvent.emit(obj);
    }
  }