# Wild Bloom Co. – Full-Stack Learning Project

I designed the Wild Bloom Co. storefront in Figma and I am now rebuilding it end to end as a full-stack exercise. The goal is to own the entire flow: translate the visual system into React, model the data cleanly, and prepare the project for a future API layer.

## Current Focus

- Component composition: hero with language toggle and search, catalog blocks, and the remaining sections treated as reusable modules.
- Typed data management: keeping copy, navigation, and catalog content in TypeScript dictionaries so UI updates stay simple and multilingual support scales.
- Styling approach: Bootstrap utilities for layout plus custom CSS to stay faithful to the Figma mockup.
- Project structure: `src/components` for presentation, `src/data` for mock content, `src/styles/App.css` for overrides, and Vite + TypeScript as the build foundation.

## Next Steps

- Finish the catalog, promotions, reviews, and footer sections using the same component/data pattern.
- Introduce interactive behaviour (search flow, filters, maybe a lightweight carousel).
- Sketch the backend contract (products, reviews, translations) and expose it later via a small API or headless CMS.
- Add testing and documentation so the project can evolve into a full-stack case study.

This repository documents my journey building Wild Bloom Co. from the design draft to a production-ready full-stack project. Feedback is welcome.
