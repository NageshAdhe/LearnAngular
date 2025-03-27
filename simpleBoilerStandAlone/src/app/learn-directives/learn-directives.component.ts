import { Component } from '@angular/core';
import {HightlightDirective} from '../directives/hightlight.directive'

@Component({
  selector: 'app-learn-directives',
  imports: [HightlightDirective],
  templateUrl: './learn-directives.component.html',
  styleUrl: './learn-directives.component.scss'
})
export class LearnDirectivesComponent {

}
