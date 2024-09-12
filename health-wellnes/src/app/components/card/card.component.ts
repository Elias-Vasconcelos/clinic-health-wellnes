import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Card } from '../../Utils/inteface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements AfterViewInit {
  @ViewChild('houver')
  houver!: ElementRef;
  @ViewChild('card')
  card!: ElementRef;

  @Input() CardContent: Card = {
    id: 0,
    title: '',
    description: '',
    image: '',
  };

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen(this.card.nativeElement, 'mouseenter', () => {
      this.renderer.addClass(this.houver.nativeElement, 'visible');
      this.renderer.removeClass(this.houver.nativeElement, 'invisible');
    });
    this.renderer.listen(this.card.nativeElement, 'mouseleave', () => {
      this.renderer.addClass(this.houver.nativeElement, 'invisible');
      this.renderer.removeClass(this.houver.nativeElement, 'visible');
    });
  }
}
