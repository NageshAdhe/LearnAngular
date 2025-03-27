import { Component } from '@angular/core';
import { DataService } from '../services/data.service'
import { CommonModule } from '@angular/common';
import { delay, map, Observable, timeout } from 'rxjs';
import { FormControl, FormControlName, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-learn-services',
  imports: [CommonModule,ReactiveFormsModule],
  providers:[DataService],
  templateUrl: './learn-services.component.html',
  styleUrl: './learn-services.component.scss'
})
export class LearnServicesComponent {
  simpleListEmployees$ = new Observable();
  searchEmployee = new FormControl('');
  employees:any[] = [];
  constructor(private dataService: DataService) {
    this.simpleListEmployees$ = this.dataService.getAllEmployees();
  }
  ngOnInit() {
    // this.dataService.getAllEmployees().subscribe((res) => {
    //   this.simpleListEmployees = res;
    //   console.log(res);
    // });
  }
  onInputSearchEmployee(event: Event){
    console.log("On input search...");
    delay(3000);
    // if(this.searchEmployee.value){
      this.simpleListEmployees$ = this.simpleListEmployees$.pipe(map((employees:any)=> employees.filter((item:any)=> item.employee_name.toLowerCase().includes(this.searchEmployee.value?.toLocaleLowerCase()))))
    // }
    // console.log(this.simpleListEmployees$.pipe(map((employees:any)=> employees.filter((item:any)=> item.employee_name.toLowerCase === this.searchEmployee.value?.toLocaleLowerCase()))))
  }
}
