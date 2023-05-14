import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    const observer: Observer<any> = {
      next: data => {
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      },
      error: err => {
        alert("falló");
        this.router.navigate(['']);
      },
      complete: () => {
        // no hacer nada en este caso
      }
    };
    this.educacionS.save(educacion).subscribe(observer);
  }

}
