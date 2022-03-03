import { ProgressHelperService } from "./progress-helper.service";

export enum UiState{
    ACTIVATE='active',
    COMPLETE='complete'
}

export enum Status{
    PENDING='pendiente',
    IN_PROGRESS='en proceso',
    COMPLETED='completo'
}

export class UiHelper{

    public itemProgressList:{ stepIndex:number; status:string;}[]=[];
    public activateIndex=0;

    constructor(protected progressHelper:ProgressHelperService){}

    protected completeLastStep() {
        this.itemProgressList[this.activateIndex].status = Status.COMPLETED;
      }

    protected switchStatusNext(index): void {
        this.itemProgressList[this.activateIndex - 1].status = Status.COMPLETED;
        this.itemProgressList[index].status = Status.IN_PROGRESS;
    }


    protected switchStatusBefore(index):void{
        this.itemProgressList[this.activateIndex + 1].status = Status.PENDING;
        this.itemProgressList[index].status = Status.IN_PROGRESS;        
    }

    protected undoLastComplete() {
        this.itemProgressList[this.activateIndex].status = Status.IN_PROGRESS;
    }

}