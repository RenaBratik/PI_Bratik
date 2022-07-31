import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ImpExperienciaServiceService } from 'src/app/service/imp-experiencia-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private ImpExperienciaService: ImpExperienciaServiceService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  }

  cargarExperiencia(): void{
    this.ImpExperienciaService.lista().subscribe(data =>{this.expe = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.ImpExperienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}


