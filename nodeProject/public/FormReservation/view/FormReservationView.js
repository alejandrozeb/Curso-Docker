let htmlFormReservation = `
<div>
<form id="form">
          <div class="form-container__seccion">
            <h3>Guest Information</h3>
            <label for="fName1" class="form-container__field">
              <input type="text" placeholder="Firstname" id="fName1" autocomplete="none" required>
              <p>Firstname</p>
            </label>
            <label for="lName1" class="form-container__field">
              <input type="text" placeholder="Lastname" id="lName1" autocomplete="none" required>
              <p>Lastname</p>
            </label>
            <label for="identity" class="form-container__field">
              <input type="text" placeholder="Identity number" id="identity" required>
              <p>DNI</p>
            </label>
            <label for="partner" class="form-container__field-check">
              <input type="checkbox" name="partner" id="partner">
              Companion (optional)
            </label>
            <div class="form-container__companion">
              <label for="fName2" class="form-container__field">
                <input type="text" placeholder="Firstname" id="fName2" autocomplete="none" disabled required>
                <p>Firstname</p>
              </label>
              <label for="lName2" class="form-container__field">
                <input type="text" placeholder="Lastname" id="lName2" autocomplete="none" disabled required>
                <p>Lastname</p>
              </label>
            </div>
          </div>
          <br>
          <div class="form-container__seccion">
            <h3>Room Information</h3>
            <label for="check-in" class="form-container__field">
              <input type="date" id="check-in">
              <p>Check-in</p>
            </label>
            <label for="check-out" class="form-container__field">
              <input type="date" id="check-out">
              <p>Check-out</p>
            </label>
            <div class="form-container__radio-btn">
              <label for="penthouse">
                <input type="radio" id="penthouse" name="type_room" value="penthouse" checked>
                <span>Penthouse</span>
              </label>
              <label for="matrimonial">
                <input type="radio" id="matrimonial" name="type_room" value="matrimonial">
                <span>Matrimonial</span>
              </label>
              <label for="double">
                <input type="radio" id="double" name="type_room" value="double">
                <span>Double</span>
              </label>
              <label for="single">
                <input type="radio" id="single" name="type_room" value="single">
                <span>Single</span>
              </label>
            </div>
            <label for="room" class="form-container__field">
              <select name="room" id="room" class="form-container__field-select">
                <option value="401">401</option>
                <option value="402">402</option>
                <option value="403">403</option>
                <option value="404">404</option>
              </select>
              <p>Select room</p>
            </label>

            <label for="room" class="form-container__field">
              <select name="room" id="room" class="form-container__field-select">
                <option value="reservarion">Reservation</option>
                <option value="registration">Registration</option>
              </select>
              <p>Reservation or registration</p>
            </label>
  
            <p class="form-container__field-price">Total Price: <span>150.00$</span></p>
            <button type="submit" id="btn-submit" class="btn btn-primary">MAKE RESERVATION</button>
          </div>
        </form>
</div>
`;
export default htmlFormReservation;