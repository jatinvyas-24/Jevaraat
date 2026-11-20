import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../App";

import Internaldisplay from "./Internaldisplay";

function Allitems() {
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
      {ring.map((item) => (
        <Internaldisplay item={item} flag={false} category="ring" key={item._id} />
      ))}
    </>
  );
}

export default Allitems;
