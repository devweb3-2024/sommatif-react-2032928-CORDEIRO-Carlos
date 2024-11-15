import React, { useState } from "react"
import Carte from "../components/carte.component"

import { creerPlateau } from "../data/CarteData"
import { melangeur } from "../utils/MelangeurCartes"

import { TypeCarte } from "../data/CarteData"

const GestionnaireJeu = () => {

    const [cartes, setCartes] = React.useState<TypeCarte[]>(
        melangeur(creerPlateau())
      )
      const [partieGagnee, setPartieGagnee] = React.useState(false)
      const [cartesPareilles, setCartesPareilles] = React.useState(0)
      const [carteCliquee, setCarteCliquee] = React.useState<undefined | TypeCarte>(
        undefined
      )
      React.useEffect(() => {
        if (cartesPareilles === cartes.length / 2) {
          console.log("Partie remportée")
          setPartieGagnee(true)
        }
      }, [cartesPareilles])

      const gererCliqueCarte = (carteEstCliquee: TypeCarte) => {
        // Retourne la carte
        setCartes((prev) =>
          prev.map((carte) =>
            carte.id === carteEstCliquee.id
              ? { ...carte, revelee: true, cliquable: false }
              : carte
          )
        )
        // Première carte cliquée, on la garde retournée
        if (!carteCliquee) {
          setCarteCliquee({ ...carteEstCliquee })
          return
        }

// Si les cartes correspondent
if (carteCliquee.IDSemblable === carteEstCliquee.id) {
    setCartesPareilles((prev) => prev + 1)
    setCartes((prev) =>
      prev.map((carte) =>
        carte.id === carteCliquee.id || carte.id === carteEstCliquee.id
          ? { ...carte, cliquable: false }
          : carte
      )
    )
    setCarteCliquee(undefined)
    return
  }
  // Si les cartes sont différentes, on attend 1 sec (1000 ms) puis on les recache à nouveau
  setTimeout(() => {
    setCartes((prev) =>
      prev.map((carte) =>
        carte.id === carteCliquee.id || carte.id === carteEstCliquee.id
          ? { ...carte, revelee: false, cliquable: true }
          : carte
      )
    )
  }, 1000)

  setCarteCliquee(undefined)
}
}
return ()

export default GestionnaireJeu