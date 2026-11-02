/* =========================================================
   Your prototypes live here. Edit this file to add projects
   or new versions. No build step needed.

   To add a new version to a project, add one object to its
   `versions` array. The highest version number is treated as
   the latest, and the card's "Updated" date comes from it.

   Fields
   - id:           unique slug
   - title:        card title
   - summary:      one or two sentences
   - designSystem: "InstUI" or "Tasty". Matches the quick filters.
   - tags:         small labels (pod, area, status)
   - hue:          0-360, tints the placeholder thumbnail
   - image:        optional path to a screenshot, e.g. "img/workflows.png"
   - sample:       optional. true shows a "Sample" badge on placeholder cards
   - versions:     [{ v, date (YYYY-MM-DD), note, url }]
   ========================================================= */
window.SITE = {
  owner: "Ken Arendt",
  role: "Design Leader",
  org: "Instructure",
  email: "ken.arendt@instructure.com",
  crest: "KA",
  github: "https://github.com/kenarendt"
};

window.PROJECTS = [
  {
    id: "global-navigation",
    title: "Global Navigation",
    summary: "An exploration of how the global InstUI navigation wrapper could support Parchment's multiple admin services and academic institutions.",
    designSystem: "InstUI",
    tags: ["Parchment", "Exploration"],
    versions: [
      { v: 5, date: "2026-10-20", note: "Latest round.", url: "https://kenarendt.github.io/instui-nav-wrapper-parchment-workflows-version-5/" },
      { v: 4, date: "2026-10-06", note: "Earlier round.", url: "https://kenarendt.github.io/instui-nav-wrapper-parchment-workflows-version-4/" }
    ]
  },
  {
    id: "credential-builder",
    title: "Credential Builder",
    summary: "An early exploration concept for building credentials.",
    designSystem: "InstUI",
    tags: ["Exploration"],
    versions: [
      { v: 1, date: "2026-11-02", note: "Early exploration concept.", url: "https://friendly-couscous-8l5qk7e.pages.github.io/artifacts/credential-builder" }
    ]
  }
];
