import { useContext } from "react";
import { BioData } from "./CompA";

const CompC = ({ name }) => {
  // const context = useContext(contextValue)
  const myname = useContext(BioData);
  return (
    <>
      <h1>this is compC! {myname}</h1>
    </>
  );
};

export default CompC;
