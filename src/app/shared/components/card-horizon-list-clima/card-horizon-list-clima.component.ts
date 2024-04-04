import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-horizon-list-clima',
  templateUrl: './card-horizon-list-clima.component.html',
  styleUrls: ['./card-horizon-list-clima.component.scss'],
})
export class CardHorizonListClimaComponent  implements OnInit {
  @Input() title: string = '';
  @Input() image:string = 'https://img.icons8.com/fluency/144/sun.png';
  @Input() description:string = '';
  @Input() temperature:number = 0;


  constructor() { }

  ngOnInit() {}

}
