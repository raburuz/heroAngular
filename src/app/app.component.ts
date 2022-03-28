import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  links: any[] = [
    {
      link: 'heroe/buscar',
      name: 'Buscar',
    },
    {
      link: 'heroe/listado',
      name: 'Listado',
    },
  ];
}
