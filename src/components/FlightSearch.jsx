import React from "react";

function FlightSearch() {
  return (
    <div className='flex flex-col w-full bg-white rounded-xl justify-evenly h-[200px] gap-4 p-6'>
      <div className='flex flex-row justify-between items-center gap-4'>
        <div className='flex flex-row gap-2 items-center'>
          <svg
            width='20'
            height='20'
            fill='#4a1b96'
            xmlns='http://www.w3.org/2000/svg'
          >
            <image
              href='https://www.svgrepo.com/show/391945/plane.svg'
              height='20'
              width='20'
            />
          </svg>
          <h1 className='font-semibold'>BOOK YOUR FLIGHT</h1>
        </div>
        <div className='flex flex-row p-1 gap-1'>
          <button className='flex border px-4 py-2 rounded-l-xl text-sm bg-[#4a1b96] text-white font-semibold hover:bg-[#4a1b96]/[.8]'>
            Round trip
          </button>
          <button className='flex border px-4 py-2 rounded-r-xl text-sm bg-[#e5dfea] text-[#4a1b96] font-semibold hover:bg-[#e5dfea]/[.9]'>
            One way
          </button>
        </div>
      </div>

      <div className='flex flex-row items-center justify-between gap-4'>
        <div className='flex flex-row w-full rounded-xl border-gray p-1 gap-1'>
          <div className='flex flex-row w-full rounded-l-xl items-center border-gray-300 border-2 p-1 px-3 gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#4a1b96'
              width='20px'
              height='20px'
              viewBox='0 -64 640 640'
            >
              <path d='M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z' />
            </svg>
            <input type='text' placeholder='' />
          </div>

          <div className='flex flex-row rounded-r-xl w-full items-center border-gray-300 border-2 p-1 gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#4a1b96'
              width='20px'
              height='20px'
              viewBox='0 -64 640 640'
            >
              <path d='M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM44.81 205.66l88.74 80a62.607 62.607 0 0 0 25.47 13.93l287.6 78.35c26.48 7.21 54.56 8.72 81 1.36 29.67-8.27 43.44-21.21 47.25-35.71 3.83-14.5-1.73-32.71-23.37-54.96-19.28-19.82-44.35-32.79-70.83-40l-97.51-26.56L282.8 30.22c-1.51-5.81-5.95-10.35-11.66-11.91L206.05.58c-10.56-2.88-20.9 5.32-20.71 16.44l47.92 164.21-102.2-27.84-27.59-67.88c-1.93-4.89-6.01-8.57-11.02-9.93L52.72 64.75c-10.34-2.82-20.53 5-20.72 15.88l.23 101.78c.19 8.91 6.03 17.34 12.58 23.25z' />
            </svg>

            <input type='text' placeholder='' />
          </div>
        </div>
        <div className='flex flex-row w-full rounded-xl border-gray p-1 gap-1'>
          <div className='flex flex-row w-full rounded-l-xl border-gray-300 border-2 p-1 gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
              fill='#4a1b96'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 2C6 1.44772 6.44772 1 7 1C7.55228 1 8 1.44772 8 2V3H16V2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2V3H19C20.6569 3 22 4.34315 22 6V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H6V2ZM16 5V6C16 6.55228 16.4477 7 17 7C17.5523 7 18 6.55228 18 6V5H19C19.5523 5 20 5.44772 20 6V9H4V6C4 5.44772 4.44772 5 5 5H6V6C6 6.55228 6.44772 7 7 7C7.55228 7 8 6.55228 8 6V5H16ZM4 11V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V11H4Z'
                fill='#4a1b96'
              />
            </svg>
            <input className='w-full' type='date' />
          </div>
          <div className='flex flex-row w-full rounded-r-xl border-gray-300 border-2 p-1 gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
              fill='#4a1b96'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 2C6 1.44772 6.44772 1 7 1C7.55228 1 8 1.44772 8 2V3H16V2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2V3H19C20.6569 3 22 4.34315 22 6V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H6V2ZM16 5V6C16 6.55228 16.4477 7 17 7C17.5523 7 18 6.55228 18 6V5H19C19.5523 5 20 5.44772 20 6V9H4V6C4 5.44772 4.44772 5 5 5H6V6C6 6.55228 6.44772 7 7 7C7.55228 7 8 6.55228 8 6V5H16ZM4 11V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V11H4Z'
                fill='#4a1b96'
              />
            </svg>

            <input className='w-full' type='date' />
          </div>
        </div>
      </div>

      <button className='bg-[#4a1b96] w-[130px] text-white rounded-xl py-2 font-semibold'>
        Show flights
      </button>
    </div>
  );
}

export default FlightSearch;
