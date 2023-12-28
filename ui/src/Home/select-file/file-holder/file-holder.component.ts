import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-file-holder',
  templateUrl: 'file-holder.component.html',
  styleUrl: 'file-holder.component.scss',
})
export class FileHolderComponent implements OnChanges {
  @Input()
  selectedFile: File | undefined;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('here');
    console.log(this.selectedFile);
  }

  getTrustedMediaUrl() {
    if (this.selectedFile) {
      return this.domSanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(this.selectedFile)
      );
    }
    return undefined;
  }
}
