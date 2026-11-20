import Section from "./Section";

import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../App";

function Mensrings() {
  const [ring, setRings] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/read/ring`)
      .then((res) => {
        setRings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Section item={ring} heading={"ring"}></Section>
    </>
  );
}

export default Mensrings;
