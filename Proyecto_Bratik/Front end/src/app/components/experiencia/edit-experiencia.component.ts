import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImpExperienciaServiceService } from 'src/app/service/imp-experiencia-service.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  
  constructor(private ImpExperienciaService: ImpExperienciaServiceService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.ImpExperienciaService.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error en la modificacion de la experiencia");
        this.router.navigate(['']);
  }
    )
}

onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.ImpExperienciaService.update(id, this.expLab).subscribe(
    data => {
      this.router.navigate(['']);
    }, err =>{
       alert("Error al modificar experiencia");
       this.router.navigate(['']);
    }
  )
}
}