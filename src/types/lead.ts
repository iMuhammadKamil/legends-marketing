export type LeadType =
  | "investment"
  | "home"
  | "commercial"
  | "booking"
  | "consultation"
  | "enquiry";

export type LeadBudget =
  | "under-2m"
  | "2m-5m"
  | "5m-10m"
  | "10m-plus";

export type LeadTimeline =
  | "immediate"
  | "3-months"
  | "6-months"
  | "researching";

export interface Lead {
  name: string;
  phone: string;
  email?: string;
  type: LeadType;
  budget?: LeadBudget;
  location?: string;
  timeline?: LeadTimeline;
  projectSlug?: string;
  message?: string;
  source: string;
  createdAt: string;
}