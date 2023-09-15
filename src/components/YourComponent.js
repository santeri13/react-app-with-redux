import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions'; // Import fetchData from your actions file

function YourComponent() {
  const dispatch = useDispatch();
  const { loading, error, items } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData()); // Dispatch the fetchData action when the component mounts
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
    {items.map((item) => (
      <><div className="shipment-details">
      <div className="parameter">
        <div className="param-name">Order No:</div>
        <div className="param-value">{item.orderNo}</div>
      </div>
      <div className="parameter">
        <div className="param-name">Customer:</div>
        <div className="param-value">{item.customer}</div>
      </div>
      <div className="parameter">
        <div className="param-name">Consignee:</div>
        <div className="param-value">{item.consignee}</div>
      </div>
      <div className="parameter">
        <div className="param-name">Date:</div>
        <div className="param-value">{item.date}</div>
      </div>
      <div className="parameter">
        <div className="param-name">Tracking No:</div>
        <div className="param-value">{item.trackingNo}</div>
      </div>
      <div className="parameter">
        <div className="param-name">Status:</div>
        <div className="param-value">{item.status}</div>
      </div>
    </div></>
        ))}
    </div>
  );
}

export default YourComponent;