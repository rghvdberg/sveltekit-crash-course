# SvelteKit Tutorial (Crash Course)

- [x] [1 - What is SvelteKit?](https://www.youtube.com/watch?v=9OlLxkaeVvw&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=1&pp=iAQB)

  - **SvelteKit**
    - Server-side **and** client-side rendering
    - Comes with a routing system
    - Provides a backend API
    - Code Splitting
    - built on top of Vite
      - development server with Hot Module Replacement (live updates)
  - Course files https://github.com/iamshaunjp/sveltekit-tutorial
  - Sveltekit docs https://kit.svelte.dev/docs/introduction

- [x] [2 - Setting up a SvelteKit App](https://www.youtube.com/watch?v=_M-iOKo4FnE&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=2&pp=iAQB)
  - `npm init svelte@next myApp`
- [x] [3 - Svelte Components (refresh)](https://www.youtube.com/watch?v=WK4SN853CqI&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=3&pp=iAQB)
- [x] [4 - Pages & Routes](https://www.youtube.com/watch?v=ftiTVitDbx0&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=4&pp=iAQB)
  - filesystem-based router
    - `src/routes` creates root
    - `src/routes/about` creates `/about`
  - https://kit.svelte.dev/docs/routing
- [x] [5 - Reusable Components](https://www.youtube.com/watch?v=5IajHJULs5I&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=5&pp=iAQB)

  - `$lib` = `src/lib/`
    - I had to edit `.svelte-kit/tsconfig.json`
    ```json
    {
      "compilerOptions": {
        "paths": {
          "$lib": [
              "../src/lib"
          ],
          "$lib/*": [
              "../src/lib/*"
          ]
      },
    ```
    - see also: https://github.com/sveltejs/language-tools/issues/1459
    - `/src/lib/component.svelte` works fine, no need for `+page.svelte` naming

- [x] [6 - Layout Components](https://www.youtube.com/watch?v=shTnwJa4SRA&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=6&pp=iAQB)
  - use `+layout.svelte` for layouts
  - components are rendered in `<slot> </slot>`
- [x] [7 - Reset Layouts](https://www.youtube.com/watch?v=t7UlyE2Jhx4&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=7&pp=iAQB)
- https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-group
  - `+layout.svelte` files inherit from layout files up in the file tree
  - use (group) for layout structure
    - (App), (Guides) doesn't show in the url
    - `routes/+layout.svelte` contains `<slot> </slot>`
    - `(guides)+layout@.svelte` refers to the root layout and thus overrides `(App)/+layout.svelte`
  ```
  ├── routes
      ├── (App)
      │   ├── about
      │   │   └── +page.svelte
      │   ├── (guides)
      │   │   ├── guides
      │   │   │   └── +page.svelte
      │   │   └── +layout@.svelte ┄┐
      │   ├── +layout.svelte       ┊
      │   └── +page.svelte         ┊
      └── +layout.svelte <┄┄┄┄┄┄┄┄┄┘
  ```
- [x] [8 - Loading Data & SSR](https://www.youtube.com/watch?v=a5OiuEu1Q6M&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=8&pp=iAQB)
  - https://kit.svelte.dev/docs/load
    > A `+page.svelte` file can have a sibling `+page.js` that exports a `load` function, the return value of which is available to the page via the `data` prop:
  ```
  ├── guides
  │   ├── +page.js
  │   └── +page.svelte
  └── +layout@.svelte
  ```
- [x] [9 - Client-side vs Server-side Code](https://www.youtube.com/watch?v=Nzcefm5Izc8&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=9&pp=iAQB)
  - on initial request code is run on the server, and some DOM objects aren't available.
- [x] [10 - Dynamic Routes](https://www.youtube.com/watch?v=Y2_bJoFbQQg&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=10&pp=iAQB)
  - `id` get's it's own folder
    ```
    ├── guides
    │   ├── [id]
    │   │   ├── +page.js
    │   │   └── +page.svelte
    │   ├── +page.js
    │   └── +page.svelte
    └── +layout.svelte
    ```
- [x] [11 - Redirects](https://www.youtube.com/watch?v=KpruqbynhjE&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=11&pp=iAQB)
  - file `+page.js`
  ```javscript
  import { error } from "@sveltejs/kit";
  throw error(420, "Could not fetch the guides");
  //
  import { redirect } from "@sveltejs/kit";
  throw redirect(302, "/guides");
  ```
- [x] [12 - Prefetching Data](https://www.youtube.com/watch?v=YK5Pmcv0BFk&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=12&pp=iAQB)
  - Prefetching data is enabled by default, no code to add.
  - Test: Firefox -> `CTRL+SHIFT+I` -> Networking -> hover over link
- [x] [13 - Error Pages](https://www.youtube.com/watch?v=MUjgMu5no3A&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=13&pp=iAQB)

  - < https://kit.svelte.dev/docs/errors >
  - add `+error.svelte`

- [ ] [14 - Deploying to Vercel](https://www.youtube.com/watch?v=gUs-Sissb48&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=14&pp=iAQB)
- [ ] [15 - API Routes](https://www.youtube.com/watch?v=0gor32MSyiA&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=15&pp=iAQB)
