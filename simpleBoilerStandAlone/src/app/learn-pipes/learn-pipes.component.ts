import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReverseStringPipe } from '../pipes/reverse-string.pipe';
import { FlattenArrPipe } from '../pipes/flatten-arr.pipe';
@Component({
  selector: 'app-learn-pipes',
  imports: [CommonModule,ReverseStringPipe,FlattenArrPipe],
  templateUrl: './learn-pipes.component.html',
  styleUrl: './learn-pipes.component.scss'
})
export class LearnPipesComponent {

}
