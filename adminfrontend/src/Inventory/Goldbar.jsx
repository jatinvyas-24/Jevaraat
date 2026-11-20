import Goldbarsection from "./Goldbarsection";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../App";

function Goldbar() {
const [goldbar, setgoldbar] = useState([]);
  
  useEffect(() => {
      axios
        .get(`${API_BASE_URL}/read/goldbar`)
        .then((res) => {
          setgoldbar(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  return (
    <>
      <Goldbarsection item={goldbar} heading={"goldbar"}></Goldbarsection>
    </>
  );
}

export default Goldbar;
