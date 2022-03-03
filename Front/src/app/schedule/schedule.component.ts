import { ThisReceiver } from '@angular/compiler';
import { Component, Output,ContentChild, EventEmitter, ContentChildren, Input, OnInit, QueryList, AfterContentInit} from '@angular/core';
import { ProgressHelperService } from './progress-helper.service';
import { ProgressStepDirective } from './progress-step.directive';
import { StepScheduleComponent } from './step-schedule/step-schedule.component';
import { UiHelper , Status} from './uiHelper';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent extends UiHelper implements OnInit {

  itemLength:number;


  @Input() public set selectedIndex(value){
      this.activateIndex=value || 0;
  }

  @Output() public stateChange = new EventEmitter<{
    activeIndex: number;
    activeStep: StepScheduleComponent;
  }>();

  @ContentChildren(StepScheduleComponent) public steps: QueryList<StepScheduleComponent>;

  constructor(protected progressHelper:ProgressHelperService) { 
    super(progressHelper)
  }

  ngOnInit(): void {    
    this.progressHelper.evenHelper.subscribe({
      next:({before, next})=>{
        if(next){
          this.next()
        }

        if(before){
          this.before()
        }
      }
    })
  }

  public before(){
    if (
      this.activateIndex === this.itemLength - 1 &&
      this.itemProgressList[this.activateIndex].status === Status.COMPLETED
    ) {
      this.undoLastComplete();
    } else {
      if (this.activateIndex > 0) {
        this.activateIndex--;
        this.switchStatusBefore(this.activateIndex);
        this.setActiveActiveStep(this.activateIndex);
        this.emitStateChange();
      }
    }
  }

  private emitStateChange(): void {
    this.stateChange.emit({
      activeIndex: this.activateIndex,
      activeStep: this.activeStep,
    });
  }

  public next(){
    if (
      this.activateIndex === this.itemLength - 1 &&
      this.itemProgressList[this.activateIndex].status !== Status.COMPLETED
    ) {
      this.completeLastStep();
    }

    if (this.activateIndex < this.itemLength - 1) {
      this.activateIndex++;
      this.switchStatusNext(this.activateIndex);
      this.setActiveActiveStep(this.activateIndex);
      this.emitStateChange();
    }
  }

  

  

  ngAfterContentInit(){
    this.initPogress(this.progressSteps.length);
    this.setActiveActiveStep(this.activateIndex);
    this.initStepIndex();    
  }


  private setActiveActiveStep(index: number): void {
    if (this.stepsExists) {
      this.removeActiveStep();
      this.updateActiveStep(index);
    }
  }

  private updateActiveStep(index) {
    this.progressSteps[index].activeState = this.progressSteps[index];
  }

  private removeActiveStep() {
    this.progressSteps.map((step) => {
      if (step.isActive) {
        step.isActive = false;
      }
    });
  }




  private initStepIndex() {
    this.progressSteps.forEach((step, i) => (step.stepIndex = i));
  }

  public get activeStep(): StepScheduleComponent {
    return this.progressSteps[this.activateIndex];
  }

  public get progressSteps(): StepScheduleComponent[] {
    return this.steps.toArray();
  }

  private get stepsExists(): boolean {
    return this.progressSteps && Array.isArray(this.progressSteps);
  }

  protected generateProgressArray(length): any[] {
    return [...Array(length).keys()].map((key) => {
      return {
        stepIndex: key,
        status: key === this.activateIndex ? Status.IN_PROGRESS : Status.PENDING,
      };
    });
  }
  
  private initPogress(value):void{
    this.itemLength=value || 0;
    this.itemProgressList=this.generateProgressArray(this.itemLength)
  }

}
