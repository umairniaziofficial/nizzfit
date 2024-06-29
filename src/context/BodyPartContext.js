import React, { createContext, useState } from 'react';

const BodyPartContext = createContext();

const BodyPartProvider = ({ children }) => {
  const [bodyPart, setBodyPart] = useState(null);
  const [exercises, setExercises] = useState([]);

  return (
    <BodyPartContext.Provider value={{ bodyPart, setBodyPart, exercises, setExercises }}>
      {children}
    </BodyPartContext.Provider>
  );
};

export { BodyPartProvider, BodyPartContext };
