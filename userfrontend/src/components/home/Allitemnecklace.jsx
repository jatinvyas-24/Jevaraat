import Internaldisplay from "./Internaldisplay";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../App";

function Allitemnecklace() {
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
      {necklace.map((item) => (
        <Internaldisplay
          item={item}
          flag={false}
          category="necklace"
          key={item._id}
        ></Internaldisplay>
      ))}
    </>
  );
}
export default Allitemnecklace;
