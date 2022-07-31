import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-newpersona',
  templateUrl: './newpersona.component.html',
  styleUrls: ['./newpersona.component.css']
})
export class NewpersonaComponent implements OnInit {
  nombre: string;
  apellido: string;
  descripcionE: string;

  constructor(private personaS: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreate(): void{
    const Persona = new persona (this.nombre, this.apellido,this.descripcionE);
    this.personaS.save(Persona).subscribe(
      data =>{
        alert("Educacion agregada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
  }
 


