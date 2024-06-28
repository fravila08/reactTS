# Building a Pokemon Theme Team Web Application with Vite + React

## Introduction

In this assignment, you will build a web application using the Vite + React development environment. The goal of this project is to create a Pokemon Theme Team web application that fetches data from the [Pokemon API](https://pokeapi.co/) using Axios and displays a team of Pokemon with similar types on the screen. This assignment will help you apply your knowledge of React, Axios, and web development in a practical project.

## Assignment Tasks

### Task 1: Setup Your Development Environment

1. Set up your development environment with Vite and React. Install Vite and create a new React project using the following commands:

   ```bash
   npm create-vite
   ```

2. Navigate to your project directory and ensure that your development environment is ready to start building the application.

### Task 2: Create the User Interface

1. Create a React component for the main user interface of your Pokemon Theme Team web application. This component should include a single button that users can click to fetch data and display Pokemon images.

2. Design the user interface with appropriate styles and layout.

3. Ensure that the button is clearly labeled and easily accessible.

### Task 3: Fetch Data from the Pokemon API

1. Implement a function that uses Axios to make a GET request to the [Pokemon API](https://pokeapi.co/).

2. When the button created in Task 2 is clicked, this function should request data for a single, random Pokemon using the API.

### Task 4: Filter Pokemon by Type

1. After successfully fetching data for a random Pokemon, extract the type(s) of that Pokemon from the API response.

2. Use the extracted type(s) to make additional requests to the Pokemon API to find 5 other Pokemon that share the same type(s) as the random Pokemon.

### Task 5: Display Pokemon Images

1. Display pictures of all 6 Pokemon on the screen. Each Pokemon should have its image shown, and you can use the "sprite" data from the API response to display these images.

2. Arrange the Pokemon images in a visually appealing way on the web page.

### Task 6: User Interaction

1. Ensure that the application is user-friendly. When the button is clicked, it should initiate the process of fetching data and updating the display.

2. Provide feedback to the user during the data fetching process (e.g., loading spinner).

## Additional Tips

- You can use CSS or a CSS framework of your choice to style the application.
- Make sure to handle any errors that may occur during data fetching and provide appropriate error messages to the user.

This assignment will help you apply your knowledge of React, Axios, and web development to create a real-world web application. Good luck, and have fun building your Pokemon Theme Team web app!
