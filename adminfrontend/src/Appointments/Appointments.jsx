import Appointmentdata from "./Appointmentdata";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../App";
function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/read/appointment`)
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container mt-5 p-5">
        <Appointmentdata appointments={appointments}></Appointmentdata>
      </div>
    </>
  );
}

export default Appointments;
