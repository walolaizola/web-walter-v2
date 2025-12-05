import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  link: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  client?: string;
  situation: string;
  intervention: string;
  results: string[];
  stats: { value: string; label: string }[];
}

export interface TechItem {
  category: string;
  tools: string[];
}