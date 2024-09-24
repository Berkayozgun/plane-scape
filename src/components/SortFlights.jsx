import React from "react";

function SortFlights() { // This component displays the sort options for the flights.
  return (
    <div className='flex flex-col p-4 gap-4 w-3/12 overflow-y-auto max-h-[440px] scrollbar-hide'>
      Sort By:
      <select className='bg-white p-2 rounded-xl'>
        <option>Lowest Price</option>
        <option>Highest Price</option>
        <option>Earliest Departure</option>
        <option>Latest Departure</option>
        <option>Shortest Duration</option>
        <option>Longest Duration</option>
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
        <label htmlFor='html'>Nonstop $230</label>
        <br />
        <input type='radio' id='css' name='fav_language' value='CSS' />{" "}
        <label htmlFor='css'>1 Stop $230</label>
        <br />
        <input
          type='radio'
          id='javascript'
          name='fav_language'
          value='JavaScript'
        />{" "}
        <label htmlFor='javascript'>2+ Stops $230</label>
      </form>
      Airlines Included
      <form>
        <input type='radio' id='nonstop' name='fav_language' value='HTML' />{" "}
        <label htmlFor='html'>American Airlines</label>
        <br />
        <input type='radio' id='css' name='fav_language' value='CSS' />{" "}
        <label htmlFor='css'>Delta</label>
        <br />
        <input
          type='radio'
          id='javascript'
          name='fav_language'
          value='JavaScript'
        />{" "}
        <label htmlFor='javascript'>United</label>
        <br />
        <input
          type='radio'
          id='javascript'
          name='fav_language'
          value='JavaScript'
        />{" "}
        <label htmlFor='javascript'>Southwest</label>
        <br />
        <input
          type='radio'
          id='javascript'
          name='fav_language'
          value='JavaScript'
        />{" "}
        <label htmlFor='javascript'>JetBlue</label>
      </form>
    </div>
  );
}

export default SortFlights;
