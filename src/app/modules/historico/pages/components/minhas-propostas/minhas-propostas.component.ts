import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-propostas',
  templateUrl: './minhas-propostas.component.html',
  styleUrls: ['./minhas-propostas.component.scss']
})
export class MinhasPropostasComponent implements OnInit {

  getDark: string = localStorage.getItem('dark');

  constructor() { }

  ngOnInit(): void {
  }

}
