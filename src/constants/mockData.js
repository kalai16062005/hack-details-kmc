import React from "react";
import { Trophy, Crown, Star } from "lucide-react";

export const hackathonData = {
  title: "K-HACK 2026",
  tagline: "Build Real-World Solutions through Innovation and Teamwork",
  eventDate: "2026-01-26T09:00:00", // Countdown kaga
  location: "KCET Campus",
  stats: { submissions: "442", days: "10", teams: "19", winners: "3" }
};

export const eliteSquadsData = {
  topSquads: [
    { name: "CASUAL CODERS", mentor: "JOTHISMATHI S", pts: "2780", tasks: "100", iconKey: "trophy" },
    { name: "BINARY BUILDERS", mentor: "LALITHA MOHANA R S", pts: "2847", tasks: "102", iconKey: "crown", featured: true },
    { name: "CODE BEGINNERS", mentor: "JOTHISMATHI S", pts: "2770", tasks: "101", iconKey: "star" },
  ],
  squadList: [
    { rank: 4, name: "TECHIES", mentor: "JOTHISMATHI S", tasks: "93", intel: "2598" },
    { rank: 5, name: "HACKATHON HACKERS", mentor: "LALITHA MOHANA R S", tasks: "90", intel: "2488" },
    { rank: 6, name: "TEAM TECHNO", mentor: "ATCHAYA S", tasks: "80", intel: "2211" },
  ]
};