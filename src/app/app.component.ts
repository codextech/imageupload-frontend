import { Component } from '@angular/core';
import { ImagesService } from 'src/core/services/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images: any[] = [];
  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.getPreviousImages();
  }

  getPreviousImages() {
    this.imagesService.getImages().subscribe(
      (res) => {
        console.log(
          '🚀 ~ file: images.component.ts ~ line 24 ~ ImagesComponent ~ this.imagesService.getImages ~ res',
          res
        );
        this.images = res;
      },
      (err) => {
        console.log(
          '🚀 ~ file: images.component.ts ~ line 28 ~ ImagesComponent ~ getPreviousImages ~ err',
          err
        );
      }
    );
  }

  fileUploaded(uploadedImage:any) {
    this.images.unshift(uploadedImage);
  }

  resetImages() {
    this.imagesService.removeOldImages().subscribe(
      (res) => {
        this.images = [];
      },
      (err) => {
        console.log(
          '🚀 ~ file: images.component.ts ~ line 28 ~ ImagesComponent ~ getPreviousImages ~ err',
          err
        );
      }
    );
  }
}
