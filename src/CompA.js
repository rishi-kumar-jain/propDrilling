import { createContext } from "react";
import CompB from "./CompB";

const BioData = createContext();

const CompA = () => {
  return (
    <>
      <BioData.Provider value={"rishi"}>
        <CompB />
      </BioData.Provider>
    </>
  );
};

export default CompA;
export { BioData };

//context API
// context
// provider
// consumer....lengthy

//useContext  more efficient
// context
// provider
// useContext
