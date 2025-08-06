import { getAllCharacters } from "@/services/dragon-ball-api";
import { useEffect, useState } from "react";
import CardCharacter from "../../components/characters/card-character";

export default function ListOfCharacters() {
  const [chars, setChars] = useState([]); // chars -> characters
  useEffect(() => {
    getAllCharacters().then((data) => setChars(data?.items));
  }, []);
  return (
    <main className="flex flex-wrap justify-center p-8 gap-1.5 w-full">
      {chars.map((ch) => (
        <CardCharacter key={ch.id} {...ch} />
      ))}
    </main>
  );
}
