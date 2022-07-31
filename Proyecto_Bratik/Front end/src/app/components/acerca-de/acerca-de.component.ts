import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 persona: persona = new persona ("","","") 
 
 
constructor(private personaS: PersonaService, private tokenService: TokenService) { }
  isLogged=false;

  ngOnInit(): void {
    this.cargarpersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarpersona(): void{
    this.personaS.lista().subscribe(
      data =>{
      this.persona = data;
      }
    )
  }
  delete(id?: number){
    if( id != undefined){
      this.personaS.delete(id).subscribe(
        data => {
          this.cargarpersona();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
