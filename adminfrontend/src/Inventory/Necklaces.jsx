import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../App";

import Section from "./Section";
function Necklaces() {

  const [necklace, setnecklace] = useState([]);
  
    useEffect(() => {
      axios
        .get(`${API_BASE_URL}/read/necklace`)
        .then((res) => {
          setnecklace(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  return (
    <>
      {" "}
      <Section item={necklace} heading={"necklace"}></Section>
    </>
  );
}

export default Necklaces;
