import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule],
  selector: 'app-text-list',
  templateUrl: 'text-list.component.html',
  styleUrl: 'text-list.component.scss',
})
export class TextListComponent {
  // listItems = [1, 1, 1, 1, 1, 1];
  @Input()
  items: any;
}
