import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../Utils/inteface';
import { CardComponent } from '../card/card.component';

let nutrition = '../../../assets/Nutrition.jpeg';
let fitness = '../../../assets/Fitness.jpeg';
let Mental = '../../../assets/Mental-Coaching.jpeg';
let Health = '../../../assets/Health.jpg';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  CardList: Card[] = [
    {
      id: 0,
      title: 'Nutrition Plans',
      description:
        'Transform your diet, transform your life with our personalized nutrition plans.',
      image: nutrition,
    },
    {
      id: 1,
      title: 'Fitness Coaching',
      description:
        'Achieve your best physical performance with our specialized fitness coaching.',
      image: fitness,
    },
    {
      id: 2,
      title: 'Mental Coaching',
      description:
        'Strengthen your mind and achieve your goals with our mental coaching.',
      image: Mental,
    },
    {
      id: 3,
      title: 'Holistic Health Consultations',
      description:
        'Balance body, mind, and spirit with our holistic health consultations.',
      image: Health,
    },
  ];
}
