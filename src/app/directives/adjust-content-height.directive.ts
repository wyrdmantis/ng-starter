import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ngsAdjustContentHeight]'
})
export class AdjustContentHeightDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    window.onresize = this.resize.bind(this);
  }

  ngOnInit() {
    this.resize();
  }

  resize() {
    // not sure if that's the right way to calculate element's position
    const height = window.innerHeight - this.el.nativeElement.offsetTop;
    this.renderer.setStyle(this.el.nativeElement, 'min-height', height + 'px');
  }
}
