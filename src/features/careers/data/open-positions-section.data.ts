export const OPEN_POSITIONS_SECTION = {
  title: "Open Positions",
  description:
    "We're growing the team across engineering, infrastructure, and customer success.",
} as const;

export const KEKA_EMBED = {
  identifier: "2ee68f1e-349d-403a-a607-8ef6899184a3",
  domain: "https://rackbank.keka.com/careers/",
  portalName: "neevcloud",
  targetContainer: "#khembedjobs",
  scriptSrc:
    "https://rackbank.keka.com/careers/api/embedjobs/js/2ee68f1e-349d-403a-a607-8ef6899184a3",
  origin: "https://rackbank.keka.com",
} as const;

export const KEKA_EMBED_CONFIG_JSON = JSON.stringify({
  identifier: KEKA_EMBED.identifier,
  domain: KEKA_EMBED.domain,
  portalName: KEKA_EMBED.portalName,
  targetContainer: KEKA_EMBED.targetContainer,
});
