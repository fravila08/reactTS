import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CharacterCardProps } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { addToFavoites, isFavorite, removeFromFavorites } from "../utilities";

const CharCard: React.FC<CharacterCardProps> = ({
  character,
  favorites,
  setFavorites,
}) => {
  const navigate = useNavigate();
  const [starred, setStarred] = useState<boolean>(
    isFavorite(favorites, character)
  );

  const updateFavorites = (): void => {
    if (!starred && favorites.length < 6) {
      setFavorites(addToFavoites(favorites, character));
      setStarred(true);
    } else {
      setFavorites(removeFromFavorites(favorites, character));
      setStarred(false);
    }
  };

  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Status: {character.status}</li>
          </ul>
        </Card.Text>
        <Button
          variant="dark"
          onClick={() => navigate(`/rickAndMorty/acharacter/${character.id}/`)}
        >
          See More
        </Button>
        <Button variant="dark" onClick={updateFavorites}>
          {starred ? "Remove" : "Add"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CharCard;
