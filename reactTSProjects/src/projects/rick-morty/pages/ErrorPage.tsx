import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>ErrorPage</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-ro9WBrgxYgTWKEZJ7vOWua6irWzNkzBoA&s" />
      <Button onClick={() => navigate("/")}>Go Home</Button>
    </>
  );
};

export default ErrorPage;
