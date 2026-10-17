# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Running locally](#running-locally)
  - [Project structure](#project-structure)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Features

- **Read** – ten job listings are loaded from a local `Data.jsx` file. Each card shows the company logo, name, `new!` / `featured` badges, job title, posting info and a list of tags.
- **Filter by tag** – click any tag on a card to add it to the filter bar at the top of the page. Clicking a tag that is already selected does nothing, so the bar never shows duplicates.
- **Combine filters** – with several tags selected, only the jobs that contain **all** of them are shown.
- **Remove filters** – remove a single tag with the ✕ button on it, or reset everything with **Clear**. When no tags are selected the filter bar disappears and the full list comes back.
- **Badges** – `new!` gets an accent pill, and `featured` listings get a dark badge plus a green border on the left side of the card.
- **Responsive** – a single stacked column on mobile with the logo overlapping the top edge of each card, a two-column grid from the `md` breakpoint, and one wide horizontal card per row from `xl` up.
- **Hover states** – tags, filter ✕ buttons, **Clear** and job titles all change colour on hover.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: Add solution URL here
- Live Site URL: Add live site URL here

### Running locally

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# create a production build in dist/
npm run build

# preview the production build
npm run preview

# run ESLint
npm run lint
```

### Project structure

```
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
├── public
│   └── favicon-32x32.png
└── src
    ├── main.jsx                      # App entry point
    ├── index.css                     # Tailwind import, theme tokens, type presets, component classes
    ├── Data.jsx                      # The list of job listings
    ├── assets
    │   └── images                    # Header backgrounds, remove icon and company logos
    └── components
        ├── App.jsx                   # Filter state and the filtered list of cards
        ├── Filter.jsx                # Filter bar with the selected tags and "Clear"
        └── reusable
            ├── Card.jsx              # A single job listing
            └── TagButton.jsx         # Tag button that adds itself to the filter
```

## My process

### Built with

- Semantic HTML5 markup
- [React 19](https://react.dev/) - JS library (function components and `useState`)
- [Vite](https://vite.dev/) - Dev server and build tool
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`) - Utility-first styling with design tokens defined in CSS
- CSS Grid
- Flexbox
- Mobile-first workflow
- [League Spartan](https://fonts.google.com/specimen/League+Spartan) - Typeface from Google Fonts
- ESLint with the `react-hooks` and `react-refresh` plugins

### What I learned

**Derived state doesn't belong in `useState`.** My first version kept the filtered list in its own state and updated it from the component body, which caused an infinite render loop (and a second bug: filtering the already-filtered list meant removed tags never brought jobs back). The list can always be computed from the original data and the selected tags, so only the tags are stored in state:

```jsx
const [tagFilter, setTagFilter] = useState([]);

const filteredCompanies = data.filter((company) =>
  tagFilter.every((tag) => company.tags.includes(tag)),
);
```

With an empty `tagFilter`, `every` returns `true` for every job, so the full list appears without a special case.

**Design tokens and custom utilities in Tailwind v4.** Instead of a `tailwind.config.js`, the theme lives in CSS. The colours, shadows and typography presets from the design are defined once, and repeated patterns become small component classes with `@apply`:

```css
@theme {
  --font-sans: "League Spartan", sans-serif;
  --color-green-400: #5ca5a5;
  --shadow-card: 0 15px 20px -5px #0d718226;
}

@utility preset-3-b {
  @apply font-bold text-base leading-[150%] tracking-[-0.15px];
}

.tag-btn {
  @apply cursor-pointer preset-3-b text-green-400 hover:text-white bg-green-50 hover:bg-green-400 py-2 px-4 rounded-sm;
}
```

**One container, three layouts.** The card list is a grid on mobile and tablet and turns into a flex column on desktop, so the same markup covers all breakpoints:

```css
.card-section {
  @apply mx-auto grid xl:flex xl:flex-col grid-cols-1 md:grid-cols-2 md:max-w-2xl xl:w-full gap-10 ...;
}
```

**Updating arrays in state immutably.** Adding and removing tags both use the functional form of the setter, so they always work from the latest state, and a guard prevents duplicates:

```jsx
// TagButton.jsx
const handleAddFilter = (tag) => {
  if (filteredTags.includes(tag)) return;
  setFilteredJob((prev) => [...prev, tag]);
};

// Filter.jsx
const handleRemovingTag = (tag) =>
  setFilteredJob((prev) => prev.filter((oldTag) => oldTag !== tag));
```

### Continued development

- **Company logos in production** – `Data.jsx` stores logo paths as plain strings (`"src/assets/images/logos/..."`). That works in the dev server, but Vite doesn't bundle assets that are only referenced from strings, so after `npm run build` the logos are missing from `dist/`. Fix by importing the SVGs in `Data.jsx`, or by moving them to `public/` and using absolute paths.
- **Persist the filter** – keep the selected tags in the URL query string or `localStorage` so a refresh (or a shared link) restores the same view.
- **Prop drilling** – `setFilteredJob` is passed from `App` through `Card` to `TagButton`. Passing an `onTagSelect` callback, or putting the filter in a small context, would keep `Card` unaware of how filtering works.

### Useful resources

- [React documentation](https://react.dev/) - Reference for state, keys and [choosing the state structure](https://react.dev/learn/choosing-the-state-structure) (avoiding redundant state).
- [Tailwind CSS documentation](https://tailwindcss.com/docs) - Covers the v4 CSS-first setup with `@theme` and `@utility`.
- [Vite guide](https://vite.dev/guide/) - Project setup, static asset handling and building for production.

## Author

- Frontend Mentor - [@AristarhMD](https://www.frontendmentor.io/profile/AristarhMD)
- GitHub - [@AristarhMD](https://github.com/AristarhMD)
- LinkedIn - [Victor Nani](https://www.linkedin.com/in/victor-nani-4b7a13179/)

## Acknowledgments

Thanks to [Frontend Mentor](https://www.frontendmentor.io) for the challenge, the design and the starter assets.
