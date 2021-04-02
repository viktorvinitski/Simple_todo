import {AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit{

  @Input('appToolTip') toolTipContent: string

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    tippy(this.elRef.nativeElement, {
      content: this.toolTipContent
    })
  }
}
