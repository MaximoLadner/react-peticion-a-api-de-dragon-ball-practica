import { getOneCharacterById } from "@/services/dragon-ball-api";
import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";

export default function CharacterDetail(){
  const { id } = useParams();

  const [char, setChar] = useState({});
  useEffect(() => {
    getOneCharacterById(id).then((d) => setChar(d));
  }, [id]);

  console.log(char);

  return (
    <main>
      <section className="hero bg-base-200 mx-auto w-5/6">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={char.image}
            alt={"image for " + char.name}
            className="max-w-sm rounded-lg shadow-2xl h-80"
          />
          <div>
            <h1 className="text-5xl font-bold">{char.name}</h1>
            <p className="py-6 max-h-60 overflow-y-scroll">
              {char.description}
            </p>
          </div>
        </div>
      </section>
      <br />
      <section className="hero bg-base-200 mx-auto w-5/6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={char?.originPlanet?.image}
            className="max-w-sm rounded-lg shadow-2xl max-h-52"
          />
          <div>
            <h3 className="text-xl font-bold">
              Planeta de origen: {char?.originPlanet?.name}
            </h3>
            <p className="py-6">{char?.originPlanet?.description}</p>
            <Link href={`/planets/${char?.originPlanet?.id}`} className="btn btn-primary">
              Mas info
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
