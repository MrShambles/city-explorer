# City Explorer

**Author**: Michael Roark
**Version**: 1.0.3

## Overview
The City Explorer Application is designed to bridge the information gap for travelers and curious individuals alike, providing a seamless way to discover detailed information about cities worldwide. At its core, this application serves to offer not just textual data but also visual mappings, making exploration a more engaging and informative experience. This project goes beyond a mere academic exercise, embodying a tool that caters to the needs of those planning travels, studying geography, or simply exploring the world from the comfort of their homes.

## Getting Started
1) Clone the Repository: Start by cloning the repository to your local machine. You can do this by running git clone <repository-url> in your terminal.

2) Install Dependencies: Navigate to the cloned directory and run npm install to install the necessary dependencies for the application to run.

3) Environment Variables: Create a .env file in the root of your project. You will need to obtain an API key from LocationIQ and add it to your .env file as VITE_LOCATION_ACCESS_TOKEN=<Your_LocationIQ_API_Key>.

4) Start the Application: Run npm start to start the application. This will launch the application in your default web browser.

5) Explore: Use the search functionality to explore cities and their detailed information including latitude, longitude, and a visual map.

## Architecture
React.js: A JavaScript library for building user interfaces, chosen for its efficiency and community support.
Bootstrap: Utilized for styling and responsive design, allowing for a clean and modern user interface.
LocationIQ API: Provides the geolocation data used to fetch and display information about the cities.
Vite: Serves as the build tool and development environment, known for its fast hot module replacement.

## Change Log
04-02-2024 1200 - Initial project setup with React and Vite.
04-02-2024 1215 - Integrated LocationIQ API for geolocation data fetching.
04-03-2024 1245 - Implemented Bootstrap for styling and responsive design.
04-04-2024 1310 - Added error handling for city searches and environment variable setup for API keys.


## Credit and Collaborations
LocationIQ: For providing the geolocation API that powers the core functionality of this application. LocationIQ
Bootstrap Documentation: For references on implementing responsive design elements. Bootstrap
React Documentation: For best practices and guidance on React component structure. React
ChatGPT by OpenAI: For assistance in debugging, architectural decisions, and code optimization strategies.


Name of feature: Setup and Initial Configuration
Estimate of time needed to complete: 15 minutes.
Start time: 1200
Finish time: 1215
Actual time needed to complete: 15 minutes.

Name of feature: Integration with LocationIQ API
Estimate of time needed to complete: 45 minutes.
Start time: 1215
Finish time: 1235
Actual time needed to complete: 20 minutes.

Name of feature: Display City Information &  Error Handling and User Feedback
Estimate of time needed to complete: 30 minutes.
Start time: 1235
Finish time: 1315
Actual time needed to complete: 40 minutes.

Name of feature: Styling with Bootstrap
Estimate of time needed to complete: 30 minutes.
Start time: 1315
Finish time: 1330
Actual time needed to complete: 15 minutes