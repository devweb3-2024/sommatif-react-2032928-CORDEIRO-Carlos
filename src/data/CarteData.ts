import carte1 from "../../public/chat1.png";
import carte2 from "../../public/chat1.png";
import carte3 from "../../public/chat1.png";
import carte4 from "../../public/chat1.png";
import carte5 from "../../public/chat1.png";
import carte6 from "../../public/chat1.png";
import carte7 from "../../public/chat1.png";
import carte8 from "../../public/chat1.png";

import dessusCarte from "../../public/dessus-carte.svg";


const cartes: string[] = [
    carte1,
    carte2,
    carte3,
    carte4,
    carte5,
    carte6,
    carte7,
    carte8,
  ]

  export type TypeCarte = {
    id: string
    revelee: boolean
    dosCarte: string
    faceCarte: string
    cliquee: boolean
    IDSemblable: string
  }

  export const creerPlateau = (): TypeCarte[] =>
    [...cartes, ...cartes].map((carte, i) => ({
      id: `carte${i}`,
      revelee: false,
      dosCarte: dessusCarte,
      faceCarte: carte,
      cliquee: true,
      IDSemblable:
        i < cartes.length ? `carte${i + cartes.length}` : `carte${i - cartes.length}`,
    }))