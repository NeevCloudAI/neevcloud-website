export type TutorialDifficulty = "Beginner" | "Intermediate";

export type DevelopersTutorialCardItem = {
  id: string;
  title: string;
  difficulty: TutorialDifficulty;
  duration: string;
  ctaHref: string;
  ctaTarget: "_blank" | "_self" | "_parent" | "_top";
};
