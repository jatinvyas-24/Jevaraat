import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../App";
import Ordersdata from "./Ordersdata";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/orders`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-5 p-5">
      <Ordersdata orders={orders}></Ordersdata>
    </div>
  );
}

export default Orders;
