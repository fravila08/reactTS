# Pokemon Team

"Pokemon Team" is a React TypeScript project where users can generate a team of 6 Pokémon cards by clicking a button. The project interacts with the PokeAPI to fetch Pokémon data using Axios for asynchronous requests.

## Features

- **Random Team Generation:** Generates a team of 6 Pokémon cards upon button click.
- **Pokémon Data:** Displays detailed information about each Pokémon, including name, type, and four random moves.
- **Responsive Design:** Adaptable to different screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Axios**: A promise-based HTTP client for making asynchronous requests.
- **PokeAPI**: An API for accessing Pokémon data.
- **CSS**: For styling the components.
- **HTML**: For structuring the application.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/fravila08/reactTS.git
    cd reactTS/react-pokemon/
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

The application will be running at `http://localhost:5173`.

## Usage

1. Open the application in your browser.
2. Click the "Generate Team" button to fetch and display a team of 6 random Pokémon.
3. View the detailed information about each Pokémon on their cards.

## Project Structure

Here's a brief overview of the project's structure:

```bash
pokemon-team/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── PokemonCard.tsx
│   │   ├── TeamGenerator.tsx
│   │   └── ...
│   ├── services/
│   │   └── pokeapi.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tsconfig.json
└── ...
```

## API Integration

The project integrates with the PokeAPI to fetch Pokémon data. Here’s an example of how Axios is used to make asynchronous requests in the `pokeapi.ts` service file:

```typescript
import axios from 'axios';

export interface PokemonResponseI {
  name: string;
  img: string;
  typeUrl: string;
}

export const getPokemonData = async (
  queryParam: number | string
): Promise<PokemonResponseI> => {
  try {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${queryParam}`
    );
    let name: string = response.data.name;
    let img: string = response.data.sprites.front_default;
    let typeUrl: string = response.data.types[0].type.url;
    return { name: name, img: img, typeUrl: typeUrl };
  } catch (err) {
    console.error(err);
    if (typeof queryParam === "number") {
      return getPokemonData(Math.floor(Math.random() * queryParam));
    }
    return getPokemonData("ditto");
  }
};
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## Acknowledgments

- Special thanks to the creators of [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Axios](https://axios-http.com/), and [PokeAPI](https://pokeapi.co/).
- Inspired by the joy of building a Pokémon team.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email:** [fraulavila@gmail.com](fraulavila@gmail.com)
- **GitHub:** [fravila08](https://github.com/fravila08)
