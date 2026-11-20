import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../App";

import Section from "./Section";
function Ladiesrings() {
  const [rings, setRings] = useState([]);
  
    useEffect(() => {
      axios
        .get(`${API_BASE_URL}/read/ladiesring`)
        .then((res) => {
          setRings(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  return (
    <>
      {" "}
      <Section item={rings} heading={"ladiesring"}></Section>
    </>
  );
}

export default Ladiesrings;
