export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email?: string;
  image?: string;
}

export const team: TeamMember[] = [
  {
    id: "m1",
    name: "Team Member",
    role: "Managing Director",
    bio: "Leadership details to be added.",
  },
  {
    id: "m2",
    name: "Team Member",
    role: "Head of Sales",
    bio: "Leadership details to be added.",
  },
  {
    id: "m3",
    name: "Team Member",
    role: "Investment Advisor",
    bio: "Advisor details to be added.",
  },
];