import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Plan } from '../../Utils/inteface';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.scss',
})
export class PlanCardComponent implements AfterViewInit {
  @ViewChild('PlanCard')
  PlanCard!: ElementRef;
  @ViewChild('FrontBtn')
  FrontBtn!: ElementRef;
  @ViewChild('BackBtn')
  BackBtn!: ElementRef;

  @Input() PlanContent: Plan = {
    id: 0,
    title: '',
    description: '',
    image: '',
    Price: '',
    Benefits: [' '],
  };

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen(this.FrontBtn.nativeElement, 'click', () => {
      this.renderer.addClass(this.PlanCard.nativeElement, 'flip');
    });
    this.renderer.listen(this.BackBtn.nativeElement, 'click', () => {
      this.renderer.removeClass(this.PlanCard.nativeElement, 'flip');
    });
  }
}
