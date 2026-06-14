export type LeadershipTeamMember = {
  name: string;
  title: string;
  description: string;
  image: string;
  linkedinHref: string;
};

export type LeadershipTeamCardProps = {
  member: LeadershipTeamMember;
};
