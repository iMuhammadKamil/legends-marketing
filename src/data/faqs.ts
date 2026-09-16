export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "f1",
    category: "general",
    question: "What is Legends Marketing?",
    answer:
      "Legends Marketing is a registered real estate investment platform helping local and overseas investors find profitable opportunities.",
  },
  {
    id: "f2",
    category: "general",
    question: "Is Legends Marketing a registered business?",
    answer:
      "Yes, Legends Marketing is registered with the Rawalpindi Chamber of Commerce.",
  },
  {
    id: "f3",
    category: "investment",
    question: "How do I start investing?",
    answer:
      "Contact our advisors, share your budget and goals, and we will recommend suitable projects and payment plans.",
  },
  {
    id: "f4",
    category: "overseas",
    question: "Can I invest from abroad?",
    answer:
      "Yes, we offer a complete remote booking process for overseas Pakistanis including documentation and payment support.",
  },
];