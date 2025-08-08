import { getOnePlanetsById } from '@/services/dragon-ball-api';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'wouter';

export default function PlanetDetail() {
    const { id } = useParams();
    
  
    const [pla, setPla] = useState({}); // pla --> planet
    useEffect(() => {
      getOnePlanetsById(id).then((d) => setPla(d));
    }, [id]);
    
    console.log(pla);
   
  
    return (
      <main>
  <section className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row items-start gap-10">
      <img
        src={pla.image}
        alt={pla.name}
        className="max-w-sm rounded-lg shadow-2xl"
      />

      <div className="flex flex-col max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">{pla.name}</h1>
        <p className="text-lg leading-relaxed mb-6">{pla.description}</p>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-3">Personajes de este planeta:</h2>
          <ul className="space-y-2">
            {pla.characters?.map(p => (
              <li
                key={p.id}
                className="p-3 bg-base-100 rounded-lg shadow-md border border-base-300 hover:bg-base-300 transition-colors"
              >
                <Link href={`/characters/${p.id}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
</main>
    );
}
