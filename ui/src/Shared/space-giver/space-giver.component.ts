import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-space-giver',
  templateUrl: './space-giver.component.html',
})
export class SpaceGiverComponent {
  @Input()
  height = 40;
}
