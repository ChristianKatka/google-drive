import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule],
  selector: 'app-error-box',
  templateUrl: 'error-box.component.html',
  styleUrl: 'error-box.component.scss',
})
export class ErrorBoxComponent {
  @Input()
  text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aut fuga! Accusantium nostrum ';
}
