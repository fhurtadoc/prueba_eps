import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ProgressHelperService } from './progress-helper.service';

@Directive({
  selector: '[progressStepNext], [progressStepPrev]'
})
export class ProgressStepDirective implements OnInit{

  @Input('progressStepNext') next;
  @Input('progressStepPrev') before;

  private method={
    before:false,
    next: false
  }


  @HostListener('click', ['$event']) listen(e){
    this.progressHelper.evenHelper.next(this.method);
  }
  constructor(
    private progressHelper:ProgressHelperService,
    private button:ElementRef<HTMLButtonElement>,
    ) { }

    ngOnInit(): void {
        this.initMethods()
    }

    private initMethods(){
      if('next' in this){
        this.method={
          ...this.method,
          next:true
        }
      }

      if('before' in this){
        this.method={
          ...this.method,
          before:true
        }
      }
    } 
}
