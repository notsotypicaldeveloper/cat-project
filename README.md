# Assignment:
Frontend Only with msw(Mock Service Worker)

# Tech Stack
Frontend techstack: React + TypeScript + Vite

# To run the project:
1) Go inside project, type ``npm i`` (to install the dependency)
2) To run the project, type ``npm run dev``

# Thought Process
1) We have used CSS grid for arranging 3 images in first row, and 2 images in second row 
2) Have created following components:
- Card Component
- Spinner Loader Component
- Overlay Component

3) We need to display a placeholder spinner for each image that is loading.
For handling this, In card component, we have added condition, if useState hook 'loading'
value is true, then show loader, else the image part.
Imp: Here, it is imp. that both loader and image should be part to DOM,so  we can listen to    ``onLoad`` event of the img.

Intentionally, ``Bill of Lading 2`` image of around 35.3 MB, so that can verify spinner loader working fine.




# For creating mock backend, we have use msw(Mock Service Worker) npm package
Steps
1) ``npm install msw@latest --save-dev``
2) To configure msw, run ``npx msw init ./public``
2) create files ``browers.ts`` and ``handler.ts`` in mocks folder and call the ``worker.start()``
function in main.tsx


