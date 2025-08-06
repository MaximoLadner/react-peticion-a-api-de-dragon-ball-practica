import CardPlanets from '../../components/planets/card-planets';
import { getAllplanets } from '@/services/dragon-ball-api';
import React, { useEffect, useState } from 'react'

export default function ListOfPlanets() {
  const [pla, setPla] = useState([]); // pla -> planets
    useEffect(() => {
      getAllplanets().then((data) => setPla(data?.items));
    }, []);
    return (
      <main className="flex flex-wrap justify-center p-8 gap-1.5 w-full">
        {pla.map((pl) => (
          <CardPlanets key={pl.id} {...pl} />
        ))}
      </main>
    );
}
