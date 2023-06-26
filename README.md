# Scissor
Scissor is a URL shortening platform that aims to disrupt the industry by providing a simple and efficient solution for shortening URLs. The platform offers several features, including URL shortening, custom URLs, QR code generation, and basic analytics.

## Requirements And Implementation Guide:
URL Shortening:
Scissor allows users to shorten URLs by pasting a long URL into the Scissor platform, and a shorter URL gets automatically generated. The shortened URL is designed to be as short as possible, making it easy to share on social media or through other channels.

Custom URLs:
Scissor also allows users to customize their shortened URLs. Users can choose their own custom domain name and customize the URL to reflect their brand or content. This feature is particularly useful for individuals or small businesses who want to create branded links for their content.

QR Code Generation:
Scissor allows users to generate QR codes for the shortened URLs. Users can download the QR code image and use it in their promotional materials or on their website. This feature was implemented using a third-party QR code generator API, which was integrated into the Scissor platform.

Analytics:
Scissor provides basic analytics that allow users to track their shortened URL's performance. Users can see how many clicks their shortened URL has received and where the clicks are coming from. This feature will be implemented using Firebase's built-in analytics feature.

## Best Practices:
1. Scissor was built and deployed with a scalable codebase with proper code linting and formatting using Prettier and ESLint.
2. TypeScript was used with NextJS which runs on React, using best SEO practice.
3. MongoDB was used to store user data and implement authentication as well as the shortened urls.
4. Users of Scissor are able write content with markdown.
5. Form validation was do  to ensure data integrity and user experience.
6. At least 2 unit tests and 3 component tests were added to the codebase.

### Getting Started
First, run the development server:

bash
Copy code
npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying pages/index.tsx. The page auto-updates as you edit the file.

API routes can be accessed on http://localhost:3000/api/hello. This endpoint can be edited in pages/api/hello.ts.

The pages/api directory is mapped to /api/*. Files in this directory are treated as API routes instead of React pages.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository for more information and contribute to the project.

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out the Next.js deployment documentation for more details.