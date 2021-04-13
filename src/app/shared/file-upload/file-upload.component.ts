import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImagesService } from 'src/core/services/images.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Output() uploadedFileUrl : EventEmitter<any> = new EventEmitter();

  uploading = false
  constructor(private imageService: ImagesService) { }

  ngOnInit(): void {
  }

  fileChangeEvent(event : any){
  console.log("🚀 ~ file: file-upload.component.ts ~ line 16 ~ FileUploadComponent ~ fileChangeEvent ~ event", event)

  const file:File = event.target.files[0];

  if (file && (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(file.name)) {
      const formData = new FormData();
      formData.append("file", file);
      this.uploadFile(formData);
  } else {
    alert('Invalid File')
  }

  }

  uploadFile(data : FormData){
    this.uploading = true
    this.imageService.uploadFile(data).subscribe((res : any) => {
      console.log("🚀 ~ file: file-upload.component.ts ~ line 38 ~ FileUploadComponent ~ this.imageService.uploadFile ~ res", res)
      // emit fil uploaded
      this.uploadedFileUrl.emit(res)

      this.uploading = false
    }, err=> {
    console.log("🚀 ~ file: file-upload.component.ts ~ line 40 ~ FileUploadComponent ~ this.imageService.uploadFile ~ err", err)
    })
  }

}
