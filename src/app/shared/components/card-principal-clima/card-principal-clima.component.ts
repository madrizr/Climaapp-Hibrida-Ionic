import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-principal-clima',
  templateUrl: './card-principal-clima.component.html',
  styleUrls: ['./card-principal-clima.component.scss'],
})
export class CardPrincipalClimaComponent  implements OnInit {
  @Input() time:string = '';
  @Input() date:string = 'Sabado, 23 Abril 2024';
  @Input() thermalSensation:number = 34;
  @Input() temperature:number = 32;
  @Input() weather:string = 'Clear'

  constructor() { }

  ngOnInit() {}

}
