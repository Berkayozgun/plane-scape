import React from "react";

function SortFlights() {
  return (
    <div className='flex flex-col p-4 gap-4 w-3/12'>
      Sort By:
      <select className='bg-white p-2 rounded-xl'>
        <option>Price</option>
        <option>Duration</option>
        <option>Departure</option>
        <option>Arrival</option>
      </select>
      Arrival Time:
      <form>
        <input type='radio' id='1' name='fav_language' value='HTML' />{" "}
        <label htmlFor='html'>5:00 AM - 11:59 AM</label>
        <br />
        <input type='radio' id='2' name='fav_language' value='CSS' />{" "}
        <label htmlFor='css'>12:00 PM - 5:59 PM</label>
      </form>
      Stops
      <form>
        <input type='radio' id='nonstop' name='fav_language' value='HTML' />{" "}
        <label htmlFor='html'>Nonstop</label>
        <br />
        <input type='radio' id='css' name='fav_language' value='CSS' />{" "}
        <label htmlFor='css'>1 Stop</label>
        <br />
        <input
          type='radio'
          id='javascript'
          name='fav_language'
          value='JavaScript'
        />{" "}
        <label htmlFor='javascript'>2+ Stops</label>
      </form>
      Airlines Included
      <form>
        <input type='checkbox' id='html' name='fav_language' value='HTML' />{" "}
        <label htmlFor='html'>Air India</label>
        <br />
        <input type='checkbox' id='css' name='fav_language' value='CSS' />{" "}
        <label htmlFor='css'>Indigo</label>
        <br />
        <input
          type='checkbox'
          id='javascript'
          name='fav_language'
          value='JavaScript'
        />{" "}
        <label htmlFor='javascript'>Vistara</label>
      </form>
    </div>
  );
}

export default SortFlights;
