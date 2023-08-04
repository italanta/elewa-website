# Elewa-website

Root for the new elewa education website <https://elewa.education>

## Built With

- [Angular](https://angular.io/)
- [Angular Universal](https://angular.io/guide/universal)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run the ElewaEducation Website.

- Node.js
- npm _(recommended)_

### Setup

1. Clone the repo into a public GitHub repository (or fork https://github.com/italanta/elewa-website/fork).

   ```sh
   git clone https://github.com/italanta/elewa-website.git
   ```

2. Go to the project folder

   ```sh
   cd elewa-website
   ```

3. Install packages with npm

   ```sh
   npm i --legacy-peer-deps
   ```

4. Set up your `.env` file

   - Navigate into the environments directory `apps/elewa-website/src/environments`
   - Rename `environment.ts.example` to `environment.ts`
   - Rename `environment.prod.ts.example` to `environment.prod.ts`

5. Start the dev server (this will run your app as an SPA)

    ```sh
    nx serve
    ```

6. You can also server render your app.

    ```sh
    npm run dev:ssr
    ```
