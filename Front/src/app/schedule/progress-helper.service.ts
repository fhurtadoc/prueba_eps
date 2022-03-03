import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressHelperService {

  public evenHelper=new Subject<{before:boolean; next:boolean}>();

  constructor() { }
}
