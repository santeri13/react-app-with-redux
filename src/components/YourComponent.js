import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions'; // Import fetchData from your actions file
import { deleteItem } from '../reducers/dataReducer';

function YourComponent() {
  const dispatch = useDispatch();
  const { loading, error, items} = useSelector((state) => state.data);

  const [openIndex, setOpenIndex] = useState(-1);


  useEffect(() => {
    dispatch(fetchData()); // Dispatch the fetchData action when the component mounts
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleDelete = (itemId) => {
    // Dispatch an action to delete the item
    dispatch(deleteItem(itemId)); // Replace with your delete item action
  };

  const handleSave = (index) => {
    // Update the item in the Redux store with the edited data
    const updatedItems = [...items]; // Create a copy of the items array
    updatedItems[index] = {
      ...updatedItems[index], // Keep the existing item properties
      // Update with the edited data from the form
      // Access the form fields directly here using refs or other means
    };

    // Dispatch an action to update the store with the new items
    dispatch({ type: 'UPDATE_ITEMS', payload: updatedItems });

    // Close the "SHIPMENT DETAILS" section
    setOpenIndex(-1);
  };

  const toggleDetails = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1); // Close the details if it's already open
    } else {
      setOpenIndex(index); // Open the details for the clicked item
    }
  };


  return (
    <div>
    {items.map((item,index) => (
      <><div className="shipment-details" key={index}>
          <div className="parameter">
            <div className="param-name">Order No:</div>
            <div className="param-value" key={"orderNo-"+index}>{item.orderNo}</div>
          </div>
          <div className="parameter">
            <div className="param-name">Customer:</div>
            <div className="param-value" key={"customer-"+index}>{item.customer}</div>
          </div>
          <div className="parameter">
            <div className="param-name">Consignee:</div>
            <div className="param-value" key={"consignee-"+index}>{item.consignee}</div>
          </div>
          <div className="parameter">
            <div className="param-name">Date:</div>
            <div className="param-value" key={"date-"+index}>{item.date}</div>
          </div>
          <div className="parameter">
            <div className="param-name">Tracking No:</div>
            <div className="param-value" key={"trackingNo-"+index}>{item.trackingNo}</div>
          </div>
          <div className="parameter">
            <div className="param-name">Status:</div>
            <div className="param-value" key={"status-"+index}>{item.status}</div>
          </div>
          <button onClick={() => toggleDetails(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
          {openIndex === index && (
              <div class="shipment">
                <p class="shipment-details">SHIPMENT DETAILS</p>
                <div class="shipment-form">
                  <div class="form-column">
                    <div class="form-row">
                      <label class="form-label" for="orderNo">order No</label>
                      <input class="form-input" type="text" id="orderNo" name="orderNo" defaultValue={item.orderNo} placeholder={item.orderNo}/>
                    </div>
                    <div class="form-row">
                      <label class="form-label" for="customer">customer</label>
                      <input class="form-input" type="text" id="customer" name="customer"  defaultValue={item.customer} placeholder={item.customer}/>
                    </div>
                    <div class="form-row">
                      <label class="form-label" for="consignee">consignee</label>
                      <input class="form-input" type="text" id="consignee" name="consignee" defaultValue={item.consignee} placeholder={item.consignee}/>
                    </div>
                  </div>
                  <div class="form-column">
                    <div class="form-row">
                      <label class="form-label" for="shipmentDate">date</label>
                      <input class="form-input" type="text" id="shipmentDate" name="shipmentDate" defaultValue={item.date} placeholder={item.date}/>
                    </div>
                  <div class="form-row">
                    <label class="form-label" for="trackingNo">tracking No</label>
                    <input class="form-input" type="text" id="trackingNo" name="trackingNo" defaultValue={item.trackingNo} placeholder={item.trackingNo}/>
                  </div>
                  <div class="form-row">
                    <label class="form-label" for="status">status</label>
                    <input class="form-input" type="text" id="status" name="status" defaultValue={item.status} placeholder={item.status}/>
                  </div>
                </div>
                <button onClick={() => handleSave(index)}>Save</button>
              </div>
        </div>
      )}
        </div></>
        ))}
    </div>
  );
}

export default YourComponent;