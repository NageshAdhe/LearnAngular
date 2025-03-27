import { Directive, ElementRef, HostListener, Input, input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnChanges {

  @Input() appHightlight: string = 'white'
  constructor(private renderer : Renderer2, private elementRef : ElementRef) { 
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['appHightlight']){
      this.renderer.setStyle(this.elementRef.nativeElement,'background-color',this.appHightlight);
    }
   }
   ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color',this.appHightlight);
   }

  @HostListener('mouseenter')  onMouseEnter(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }
}
