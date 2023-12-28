import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FileHolderComponent } from './file-holder/file-holder.component';
import { FileSelectDirective } from './file-select.directive';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    FileSelectDirective,
    FileHolderComponent,
  ],
  selector: 'app-select-file',
  templateUrl: 'select-file.component.html',
  styleUrl: 'select-file.component.scss',
})
export class SelectFileComponent {
  selectedFile: File | undefined = undefined;

  onFileSelect(file: File | FileList) {
    if (file instanceof FileList) {
      this.selectedFile = Array.from(file)[0];
    } else {
      this.selectedFile = file;
    }
  }
}
