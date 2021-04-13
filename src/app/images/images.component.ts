import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImagesService } from 'src/core/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit, OnChanges {

  @Input()
  images: any[] = [];

  constructor(
  ) { }




  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("🚀 ~ file: images.component.ts ~ line 24 ~ ImagesComponent ~ ngOnChanges ~ changes", changes)
    // const res=  changes.currentValue as any || null;
    // this.images = res.data;
  }





}
