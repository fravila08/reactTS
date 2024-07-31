# Rick and Morty Landing Site

## Overview

"Rick and Morty Landing Site" is a React TypeScript project designed to motivate users to watch the Rick and Morty show. This site lists fun facts about the show, episodes with links to stream specific shows, and characters found within the series. Users can add up to 6 favorite characters or up to 6 favorite episodes.

## Features

- **Show Fun Facts:** Displays interesting facts about the Rick and Morty show.
- **Episode Listings:** Lists episodes with links to stream them.
- **Character Listings:** Displays characters found within the series.
- **Favorites:** Allows users to add up to 6 favorite characters or episodes.
- **Responsive Design:** Adaptable to different screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Axios**: A promise-based HTTP client for making asynchronous requests.
- **Rick and Morty API**: An API for accessing Rick and Morty data.
- **React Router DOM**: For routing and navigation.
- **React Bootstrap**: For styling and responsive design.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/fravila08/reactTS.git
    cd reactTS/rick-morty/
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
2. Browse through the fun facts, episodes, and characters.
3. Add your favorite characters or episodes to your favorites list.

## Project Structure

Here's a brief overview of the project's structure:

```bash
rick-morty/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── CharacterCard.tsx
│   │   ├── EpisodeCard.tsx
│   │   ├── FavoriteList.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Characters.tsx
│   │   ├── Episodes.tsx
│   │   └── ...
│   ├── services/
│   │   └── rickAndMortyAPI.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tsconfig.json
└── ...
```

## API Integration

The project integrates with the Rick and Morty API to fetch data. Here’s an example of how Axios is used to make asynchronous requests in the `rickAndMortyAPI.ts` service file:

```typescript
import axios from 'axios';

export const getCharacters =
  async ({}: LoaderFunctionArgs): Promise<GetCharactersI> => {
    let response = await axios.get("https://rickandmortyapi.com/api/character");
    let data: RickAndMortyAPIResp = response.data;
    let formatData: GetCharactersI = {
      next: data.info.next,
      prev: data.info.prev,
      results: data.results,
    };
    return formatData;
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

- Special thanks to the creators of [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Axios](https://axios-http.com/), [Rick and Morty API](https://rickandmortyapi.com/), [React Router DOM](https://reactrouter.com/), and [React Bootstrap](https://react-bootstrap.github.io/).
- Inspired by the creativity and humor of the Rick and Morty show.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email:** [fraulavila@gmail.com](fraulavila@gmail.com)
- **GitHub:** [fravila08](https://github.com/fravila08)
