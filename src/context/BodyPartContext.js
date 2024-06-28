import React, { createContext, useState } from 'react';

const BodyPartContext = createContext();

const BodyPartProvider = ({ children }) => {
  const [bodyPart, setBodyPart] = useState(null);
  const [exercises,setExercies] = useState([]);

  return (
    <BodyPartContext.Provider value={{ bodyPart, setBodyPart,exercises,setExercies }}>
      {children}
    </BodyPartContext.Provider>
  );
};

export { BodyPartProvider, BodyPartContext };
