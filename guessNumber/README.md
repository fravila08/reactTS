# Guess A Number Game

## Overview

"Guess A Number" is a React TypeScript game where you play against the machine to guess a number. The game keeps track of your previous guesses and provides feedback on whether your current guess is correct, too high, or too low.

## Features

- **User Input:** Allows the user to input their guess.
- **Machine Feedback:** Provides feedback on whether the guess is correct, too high, or too low.
- **Guess History:** Displays a record of all previous guesses.
- **Responsive Design:** Adaptable to different screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **CSS**: For styling the components.
- **HTML**: For structuring the application.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/fravila08/reactTS
    cd reactTS/guess-number/
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

The application will be running at `http://localhost:5173/`.

## Usage

1. Open the application in your browser.
2. Enter a guess in the input field and submit it.
3. The game will tell you if your guess is correct, too high, or too low.
4. Continue guessing until you find the correct number.
5. The game will display a record of all your previous guesses.

## Project Structure

Here's a brief overview of the project's structure:

```bash
guess-number/
├── src/ 
│   ├── components/
│   │   ├── GuessInput.tsx
│   │   ├── GuessHistory.tsx
│   │   └── Feedback.tsx
│   ├── App.tsx
│   ├── App.css
│   └── index.css
│   ├── main.tsx
├── package.json
├── tsconfig.json
└── ...
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the creators of [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).
- Inspired by the classic "Guess a Number" game.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email:** [fraulavila@gmail.com](fraulavila@gmail.com)
- **GitHub:** [fravila08](https://github.com/fravila08)
