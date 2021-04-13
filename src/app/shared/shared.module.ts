import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CompleteUrlPipe } from 'src/core/pipes/complete-url.pipe';



@NgModule({
  declarations: [
    FileUploadComponent,
    CompleteUrlPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FileUploadComponent,
    CompleteUrlPipe
  ],
})
export class SharedModule { }
