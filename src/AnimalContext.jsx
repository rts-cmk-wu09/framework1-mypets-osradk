import { createContext, useState } from "react";

const AnimalContext = createContext();

const AnimalProvider = ({ children }) => {
  const [animalData, setAnimalData] = useState(null);

  const storeAnimalData = (animal) => {
    setAnimalData({ id: animal.id, data: animal });
  };

  return (
    <AnimalContext.Provider value={{ animalData, storeAnimalData }}>
      {children}
    </AnimalContext.Provider>
  );
};

export { AnimalContext, AnimalProvider };
