import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Specialty} from './model/specialty'
import {Doctor} from './model/doctor'
import {QuerysService} from './services/querys.service';
import { validateHorizontalPosition } from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pruebaEPS';
  allSpecialty: Specialty[];
  date={
    id_Specialty:0,
    date:'',
    type_date:'',
    doctor_name:'',
    doctor_id:0
  };
  allDoctors:Doctor[];
  filter_Doctors:Doctor[];
    
  constructor( 
    private querys:QuerysService,
    public dialog: MatDialog,
      
    ) { }

  ngOnInit(): void {
    var path='doctor/list_specialty'
    this.querys.query_get_specialty(path).subscribe(
      res=>{
        this.allSpecialty=res
        console.log(this.allSpecialty);
        
      },
      
    )
    var pathAlldoctors='doctor/list'
    this.querys.query_get_doctor(pathAlldoctors).subscribe(
      res=>{
        this.allDoctors=res;
        
        
      }
    )
  }

  public filterDoc():void{
    var filterDoct=this.allDoctors.filter(x=>x.specialty.id===this.date.id_Specialty);
    this.filter_Doctors=filterDoct;
    
    
  }

  public select_doct(name, id):void{
    this.date.doctor_name=name;
    this.date.doctor_id=id;
    console.log(this.date);
    
  }

  public generar_cita():void{
    let validacion=this.validate(this.date);
    if(validacion.length===0){
      const dialogRef = this.dialog.open(Dialog_component, {
        width: '300px',
        height: '300px', 
        data: this.date
      });           
    }else{
      console.log(validacion);      
      this.show_errors(validacion);
    }
  }

  public validate(date){
    
    let validators=[];

    if(date.id_Specialty==='' || date.id_Specialty===undefined || date.id_Specialty===null){
      validators.push({messaje:'Error en la Specialidad'})      
    }
    if(date.date==='' || date.date===undefined || date.date===null){
      validators.push({messaje:'Error no Selecciono una fecha correcta'})      
    }
    if(date.type_date==='' ||  date.type_date===undefined || date.type_date===null ){
      validators.push({messaje:'Error no Selecciono una tipo de cita correcto'})      
    }
    if(date.doctor_name==='' ||  date.doctor_name===undefined || date.doctor_name===null){
      validators.push({messaje:'Error no Selecciono un medico'})      
    }
    if( date.doctor_id==='' ||  date.doctor_id===undefined || date.doctor_id===null){
      validators.push({messaje:'Error no Selecciono un medico'})      
    }
    
    return validators;

  }

  private show_errors(validacion){
    
  }

}


export interface Data_dialog {
    id_Specialty:number
    date:String
    type_date:String
    doctor_name:String
    doctor_id:number
}

@Component({
  selector: 'app-dialog_createUser',
  templateUrl: './dialog.component.html',  
})

export class Dialog_component {  
  constructor(
    public dialogRef: MatDialogRef<Dialog_component>,
    @Inject(MAT_DIALOG_DATA) public data_dialog: Data_dialog    
  ) { }
  
}
