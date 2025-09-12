import "react";
import { useState, useEffect } from "react";
import { MCQChallenge } from "./MCQChallenge";

export function ChallengeGenerator() {
  const [challenge, setChallenge] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const [quote, setQuota] = useState(null);

  return <></>;
}
