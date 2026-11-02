# Ken's Prototypes

A single-page gallery of my prototypes, built on the InstUI shell template. Each card keeps every version of a prototype, and a dropdown switches between them.

## Files

- `index.html` holds the shell, styles and gallery code. You rarely need to touch it.
- `projects.js` holds the site owner details and every project. Edit this to add work.
- `.nojekyll` tells GitHub Pages to serve the files as they are.

## Add a project

Copy a project object in `projects.js`, give it a new `id`, and fill in the fields. Delete `sample: true` so the Sample tag goes away.

## Add a new version

Add one entry to that project's `versions` array:

```js
{ v: 6, date: "2026-11-03", note: "What changed in this round.", url: "https://kenarendt.github.io/your-repo-version-6/" }
```

The highest `v` becomes the latest. The card's "Last updated" date and the "Most recent" sort both use the latest version's date.

Optional fields: `image: "img/name.png"` shows a screenshot at the top of the card. `figma: "https://..."` adds a Figma button.

## Publish on GitHub Pages

1. Create a new repository on GitHub, for example `prototypes`.
2. Upload these files to the root of the repo, or run `git init`, `git add .`, `git commit`, then push.
3. In the repo, open Settings, then Pages. Set the source to "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. The site appears at `https://<your-username>.github.io/<repo-name>/` after a minute or so.

If your org keeps Pages private, confirm the visibility setting before sharing the link.

## Preview locally

Open `index.html` in a browser. No server needed.
