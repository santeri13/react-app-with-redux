import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi, readDataFromFile } from './actions/dataActions';

function YourComponent() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataFromApi()); // Dispatch action to fetch data from API
  }, [dispatch]);

  useEffect(() => {
    // Check if there was an error during the API request
    if (error) {
      // Dispatch action to read data from the text file as a fallback
      dispatch(readDataFromFile());
    }
  }, [dispatch, error]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>

      {/* Header Row */}
      <div className="shipment-details-header">
        <div className="parameter">
            <div className="param-name">Order No:</div>
          </div>
        <div className="parameter">
          <div className="param-name">Customer:</div>
        </div>
        <div className="parameter">
          <div className="param-name">Consignee:</div>
        </div>
        <div className="parameter">
          <div className="param-name">Date:</div>
        </div>
        <div className="parameter">
          <div className="param-name">Tracking No:</div>
        </div>
        <div className="parameter">
          <div className="param-name">Status:</div>
        </div>
        <button class="invincible">Edit</button>
        <button class="invincible">Delete</button>
      </div>
    {data.map((item) => (
    <div className="shipment-details">
      <div className="parameter">
        <div className="param-value">{item.orderNo}</div>
      </div>
      <div className="parameter">
        <div className="param-value">{item.customer}</div>
      </div>
      <div className="parameter">
        <div className="param-value">{item.consignee}</div>
      </div>
      <div className="parameter">
        <div className="param-value">{item.date}</div>
      </div>
      <div className="parameter">
        <div className="param-value">{item.trackingNo}</div>
      </div>
      <div className="parameter">
        <div className="param-value">{item.status}</div>
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
        ))}
    </div>
  );
}

export default YourComponent;