## Scissor
Brief is the new black, this is what inspires the team at Scissor. In today’s world, it’s important to keep things as short as possible, and this applies to more concepts than you may realize. From music, speeches, to wedding receptions, brief is the new black. Scissor is a simple tool which makes URLs as short as possible. Scissor thinks it can disrupt the URL shortening industry and give the likes of bit.ly and ow.ly a run for their money within 2 years.

Requirements And Implementation Guide:
- URL Shortening:
Scissor allows users to shorten URLs by pasting a long URL into the Scissor platform and a shorter URL gets automatically generated. The shortened URL is designed to be as short as possible, making it easy to share on social media or through other channels.
- Custom URLs:
Scissor also allows users to customize their shortened URLs. Users can choose their own custom domain name and customize the URL to reflect their brand or content. This feature is particularly useful for individuals or small businesses who want to create branded links for their 
- QR Code Generation:
Scissor allows users to also generate QR codes for the shortened URLs. Users can download the QR code image and use it in their promotional materials or/and on their website. This feature will be implemented using a third-party QR code generator API, which can be integrated into the Scissor platform.
- Analytics:
Scissor provides basic analytics that allow users to track their shortened URL's performance. Users can see how many clicks their shortened URL has received and where the clicks are coming from. This feature will be implemented using Firebase's built-in analytics feature.
Best Practices:
Build and deploy a scalable code base with proper code linting and formatting with Prettier and Eslint.
Ensure you use typescript with either Vuejs or React with necessary SEO in place.
You are required to build with either Firebase, Hasura or any backend technology that will allow you to store user data and carry out authentication.
It is important to allow the user of Scissor to write content with markdown.
Form validation is important.
At least 2 unit tests and 3 component tests should be present in the codebase.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
#   u r l * s h o r t e n e r * s c i s s o r 
 
 

## URL Shortener Documentation
Introduction
URL Shortener is a web application that allows users to shorten long URLs into shorter and more manageable links. It provides features such as custom domains,Qrcodes, click tracking, and analytics to help users track and manage their shortened URLs effectively.

# Table of Contents
Installation
Usage
Shortening URLs
Redirecting URLs
Viewing Analytics
API Reference
Configuration
Deployment
Contributing
License
Installation
To install and set up the URL Shortener application, follow these steps:

Clone the repository from GitHub.
Install the required dependencies using npm or yarn.
Set up the environment variables for the application.
Start the application locally or deploy it to a server.
Usage
Shortening URLs
Access the URL Shortener application through a web browser.
Enter the long URL that you want to shorten in the provided input field.
(Optional) Enter a custom text or domain to customize the shortened URL.
Click the "Shorten" button to generate the shortened URL.
The shortened URL will be displayed along with options to copy or view analytics.
Redirecting URLs
Access a shortened URL generated by the URL Shortener application.
The application will automatically redirect you to the original URL or the custom domain associated with the shortened URL.
The click count for the URL will be incremented in the database.
Viewing Analytics
After shortening a URL, you can click the "View Analytics" button to access the analytics page.
The analytics page provides insights such as the total number of clicks, click history over time, and the geographical distribution of clicks on a map.
API Reference
The URL Shortener application provides the following APIs:

POST /api/shorten: Shortens a long URL and returns the shortened URL.
GET /api/redirect/:shortUrl: Redirects to the original URL or custom domain associated with the provided short URL.
For detailed API documentation and request/response examples, refer to the API Reference section.

Configuration
The URL Shortener application can be configured through the following environment variables:

MONGODB_URI: The MongoDB connection URI.
BASE_URL: The base URL for the application.
PORT: The port on which the application runs.
(Additional variables specific to your custom domain setup, if applicable)
Deployment
To deploy the URL Shortener application to a server, follow these steps:

Set up a server environment with the required dependencies (Node.js, MongoDB, etc.).
Configure the environment variables based on your deployment environment.
Build the frontend application using a bundler such as Next.js.
Deploy the backend API and frontend application to the server.
Configure any necessary reverse proxy or domain settings.
For detailed deployment instructions, refer to the deployment documentation specific to your deployment environment.

Contributing
Contributions to the URL Shortener application are welcome! To contribute, follow these steps:

Fork the repository and create a new branch for your contribution.
Implement your changes or new features.
Write unit tests to ensure the stability of the application.
Submit a pull request with a clear description of your changes.
License
The URL Shortener application is licensed under the MIT License. Feel free to use, modify, and distribute it according to the terms of the license.