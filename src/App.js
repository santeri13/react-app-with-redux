import './App.css';

function App() {
  return (
      <div class="shipment">
        <p class="shipment-details">SHIPMENT DETAILS</p>
        <div class="shipment-form">
          <div class="form-column">
            <div class="form-row">
                <label class="form-label" for="orderNo">order No</label>
                <input class="form-input" type="text" id="orderNo" name="orderNo" placeholder="mo-203568-39924097-9152459" required/>
            </div>
            <div class="form-row">
                <label class="form-label" for="customer">customer</label>
                <input class="form-input" type="text" id="customer" name="customer" placeholder="WindsomeTree Emerging Markets Consumer Growth Fund" required/>
            </div>
            <div class="form-row">
                <label class="form-label" for="consignee">consignee</label>
                <input class="form-input" type="text" id="consignee" name="consignee" placeholder="Capital City Bank Group" required/>
            </div>
          </div>
          <div class="form-column">
            <div class="form-row">
                <label class="form-label" for="shipmentDate">date</label>
                <input class="form-input" type="text" id="shipmentDate" name="shipmentDate" placeholder="9/22/2019" required/>
            </div>
            <div class="form-row">
                <label class="form-label" for="trackingNo">tracking No</label>
                <input class="form-input" type="text" id="trackingNo" name="trackingNo" placeholder="TP-604044-93835112-3256076" required/>
            </div>
            <div class="form-row">
                <label class="form-label" for="status">status</label>
                <input class="form-input" type="text" id="status" name="status" placeholder="In Transit"required/>
            </div>
          </div>
        </div>
      </div>

  );
}

export default App;
