import { Component } from '@angular/core';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-consultancy-page',
  templateUrl: './consultancy-page.component.html',
  styleUrls: ['./consultancy-page.component.scss'],
})
export class ConsultancyPageComponent {
  cardsData: InfoCard[] = [
    {
      title: "Learning design thinking",
      description: "Redefine what learning means for your organisation. Our facilitators help you explore new ways to think about education in a practical manner.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Professional learning",
      description: "Design of education programs with a specific focus on digital learning and the first line. What practices do we need to incorporate when designing for professionals?",
      icon: "fas fa-chart-line",
    },
    {
      title: "Basic Education",
      description: "There is often a mismatch between how teachers are trained and their day-to-day responsibilities. Rely on over ten years of experience in teacher training to develop on-target and inclusive programs.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Agriculture & Environment",
      description: "The foundation of society, we designed programs from sustainable land management, to climate change, to pollution management and more.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Learning networks",
      description: "How do we build resilient organisations? By identifying and strengthening learning networks, organisations build resilience within their core foundations.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Transformative Ed",
      description: "Education for the 21st Century. How do we teach for tomorrow? From Knowledge Graphs, to Key Areas and Connectivist learning, elewa contributed to learning theories over the last years that take ed forward.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Health",
      description: "Learning design for the health sector. Refresher courses for nurses and doctors.",
      icon: "fas fa-chart-line",
    } 
  ];
}
