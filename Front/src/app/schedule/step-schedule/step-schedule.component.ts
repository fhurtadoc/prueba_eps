import { Component, HostBinding, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-step-schedule',
  templateUrl: './step-schedule.component.html',
  styleUrls: ['./step-schedule.component.css']
})
export class StepScheduleComponent implements OnInit {

  public stepIndex: number;
  @HostBinding('class.activeStep') public isActive=false;
  @Input() public set activeState(step){
    this.isActive=step===this;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
