import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-minicard-clima',
  templateUrl: './minicard-clima.component.html',
  styleUrls: ['./minicard-clima.component.scss'],
})
export class MinicardClimaComponent  implements OnInit {
  @Input() time:string = '';
  @Input() temperature:number = 0;
  @Input() image:string = 'https://img.icons8.com/fluency/144/sun.png';
  @Input() altImage:string = ''

  constructor() { }

  ngOnInit() {}

}
