import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card } from '../../Utils/inteface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  AboutCard: Card[] = [
    {
      id: 0,
      title: 'About Our History',
      description:
        'Health & Wellness was founded over 20 years ago with a mission to improve lives through integrated care. We’ve grown from a small clinic to a leading center in health and wellness, always focused on our commitment to enhancing the quality of life for every individual we serve.',
      image: '../../../assets/Our-Histor.png',
    },
    {
      id: 1,
      title: 'Always Ready',
      description:
        'At Health & Wellness, we believe that health doesn’t keep a schedule. That’s why we’re always ready to assist you, anytime and anywhere. Our team offers in-person and online consultations to ensure you get the support you need quickly and conveniently.',
      image: '../../../assets/Always Ready.png',
    },
    {
      id: 2,
      title: 'Market-Leading Specialistss',
      description:
        'Our specialists are experts in Personalized Nutrition Plans, Fitness Coaching, Mental Health & Wellness Coaching, and Holistic Health Consultations. We tailor each service to meet our clients unique needs, providing excellent care and tangible results.',
      image: '../../../assets/Specialists.png',
    },
    {
      id: 3,
      title: 'Personalized Care for Everyone',
      description:
        'Health & Wellness offers personalized care for all ages, from children to seniors. We tailor our services to each individual’s needs, creating customized plans that align with your health goals and lifestyle.',
      image: '../../../assets/Everyone.png',
    },
  ];
}
