import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ngsAdjustContentHeight]'
})
export class AdjustContentHeightDirective implements OnInit {
  constructor(private _window: Window, private _el: ElementRef, private _renderer: Renderer2) {
  }

  ngOnInit() {
    this._window.onresize = this.resize.bind(this);
    this.resize();
  }

  resize() {
    const height = this._window.innerHeight - this._el.nativeElement.offsetTop;
    this._renderer.setStyle(this._el.nativeElement, 'min-height', height + 'px');
  }
}
