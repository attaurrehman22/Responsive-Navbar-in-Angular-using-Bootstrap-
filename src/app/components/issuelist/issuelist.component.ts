import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { CdkDragDrop, moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-issuelist',
  templateUrl: './issuelist.component.html',
  styleUrls: ['./issuelist.component.css']
})
export class IssuelistComponent implements OnInit{
  issueData: any;
  todoIssueData: any[] = []; 
  otherIssueData: any[] = [];
  userData: any[] = [];
  selectedUser: any[] = [];

 

  constructor(private issueService: ServiceService,private http: HttpClient, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.issueService.getIssueData().subscribe(
      (data) => {
        this.issueData = data; 
        console.log("issuedata", this.issueData);
        this.todoIssueData = this.issueData.filter((issue:any) => issue.status === "ToDo");
        this.otherIssueData = this.issueData.filter((issue:any) => issue.status !== "ToDo");
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );


    this.issueService.getUserData().subscribe(
      (data)=>{
        this.userData=data;
        console.log("userData",this.userData)
      }
    )
  }



  drop(event:CdkDragDrop<string[]>){
   
    if(event.previousContainer === event.container){
      
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex)
    }
    else{

      const droppedItemData = event.item.data;
    console.log('Dropped Item Data:', droppedItemData);


    this.issueService.updateData(droppedItemData).subscribe(
      response => {
        console.log('Data posted successfully:', response);
      },
      error => {
        console.error('Error posting data:', error);
      })


      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
    }
  }



  setSelectedUser(user: any) {
;
    this.issueService.sendEmaitoUser(user).subscribe(
      (response) => {
        console.log('Email sent successfully', response);
      },
      (error) => {
        console.error('Error sending email', error);
      }
    );
  }
  
  
  
  


}
