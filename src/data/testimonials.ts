export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [];