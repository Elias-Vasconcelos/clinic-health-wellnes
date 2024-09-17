import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanCardComponent } from '../plan-card/plan-card.component';
import { Plan } from '../../Utils/inteface';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, PlanCardComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent {
  PlansList: Plan[] = [
    {
      id: 0,
      title: 'Single Plan',
      description:
        'This plan is perfect for individuals looking to focus on their well-being with personalized care. If you want to improve your physical and mental health with one-on-one support, the Single Plan is ideal for you. Take control of your health with full support.',
      image: '../../../assets/Baner1.png',
      Price: '$199',
      Benefits: [
        'Personalized initial health assessment',
        'Access to monthly nutrition consultations',
        'Weekly fitness coaching sessions',
        'Bi-weekly mental health support sessions',
        'Holistic health tracking (sleep, stress, posture)',
        'Access to the wellness tips and health portal',
        'Customized exercise and nutrition plans',
      ],
    },
    {
      id: 1,
      title: 'Couple Plan',
      description:
        'Sharing a wellness journey with your loved one is even more rewarding. The Couple Plan offers care for both partners, with personalized programs to help improve your health together, strengthening your bond with healthy habits.',
      image: '../../../assets/Couple.jpg',
      Price: '$349',
      Benefits: [
        'Health assessment for both members',
        'Personalized nutrition consultations for each partner',
        'Joint or separate fitness coaching sessions',
        'Mindfulness and emotional wellness sessions for couples',
        "Exercise plans tailored to both members' goals",
        'Discounts on holistic therapies and relaxation massages',
        'Access to couple health workshops and events',
      ],
    },
    {
      id: 2,
      title: 'Family Plan',
      description:
        'Taking care of your entire family’s health is the priority of this plan. With personalized care for each member, you ensure that everyone, from the youngest to the oldest, receives complete attention to live a healthy lifestyle.',
      image: '../../../assets/family.jpg',
      Price: '$499',
      Benefits: [
        'Health consultations for up to 4 family members',
        'Nutrition plans and follow-ups for children and adults',
        'Family fitness programs and group activities',
        'Family coaching sessions for emotional well-being and mindfulness',
        'Discounts on extra services, such as alternative therapies',
        '24/7 access to online emergency consultations',
        'Personalized health programs for each family member',
      ],
    },
  ];
}
