import React from "react";
import { Link } from "react-router-dom";

function Header() { // This component displays the header of the website.
  return (
    <header className='flex flex-row justify-between'>
      <div className='flex flex-row justify-center items-center gap-4'>
        <svg
          fill='#ffffff'
          width='40px'
          height='40px'
          viewBox='0 0 512.00 512.00'
          xmlns='http://www.w3.org/2000/svg'
          stroke='#ffffff'
        >
          <g
            id='SVGRepo_bgCarrier'
            strokeWidth='0'
            transform='translate(40.96000000000001,40.96000000000001), scale(0.84)'
          >
            <rect
              x='0'
              y='0'
              width='512.00'
              height='512.00'
              rx='256'
              fill='#4a1b96'
              strokeWidth='0'
            ></rect>
          </g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <title>ionicons-v5-a</title>
            <path d='M186.62,464H160a16,16,0,0,1-14.57-22.6l64.46-142.25L113.1,297,77.8,339.77C71.07,348.23,65.7,352,52,352H34.08a17.66,17.66,0,0,1-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38,0,0,0,0-.15,14.82,14.82,0,0,1-.53-1.59L16.92,182.76c-2.15-7.61.2-12.93,2.56-16.06a16.83,16.83,0,0,1,13.6-6.7H52c10.23,0,20.16,4.59,26,12l34.57,42.05,97.32-1.44-64.44-142A16,16,0,0,1,160,48h26.91a25,25,0,0,1,19.35,9.8l125.05,152,57.77-1.52c4.23-.23,15.95-.31,18.66-.31C463,208,496,225.94,496,256c0,9.46-3.78,27-29.07,38.16-14.93,6.6-34.85,9.94-59.21,9.94-2.68,0-14.37-.08-18.66-.31l-57.76-1.54-125.36,152A25,25,0,0,1,186.62,464Z'></path>
          </g>
        </svg>
        <h1 className='text-2xl font-bold text-black'>PLANE SCAPE</h1>
      </div>

      <div className='flex flex-row'>
        <Link
          to='#'
          className='text-black p-4 flex flex-row gap-1 justify-center items-center'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            version='1.0'
            id='Layer_1'
            width='15px'
            height='15px'
            viewBox='0 0 64 64'
            enableBackground='new 0 0 64 64'
            xmlSpace='preserve'
          >
            <path
              fill='#4a1b96'
              d='M62.828,29.172l-28-28C34.078,0.422,33.062,0,32,0H4C1.789,0,0,1.789,0,4v28  c0,1.062,0.422,2.078,1.172,2.828l28,28C29.953,63.609,30.977,64,32,64s2.047-0.391,2.828-1.172l28-28  C64.391,33.266,64.391,30.734,62.828,29.172z M20,28.004c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S24.418,28.004,20,28.004z'
            />
          </svg>
          Deals
        </Link>

        <Link
          to='#'
          className='text-black p-4 flex flex-row gap-1 justify-center items-center'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            height='15px'
            width='15px'
            version='1.1'
            id='_x32_'
            viewBox='0 0 512 512'
            xmlSpace='preserve'
            fill='#4a1b96'
          >
            <g>
              <path
                className='st0'
                d='M491.875,156.347c-19.446-45.958-51.889-85.019-92.736-112.613C358.3,16.13,308.962-0.008,255.996,0   c-35.305,0-69.016,7.168-99.65,20.124C110.381,39.571,71.321,72.006,43.725,112.86C16.122,153.692-0.016,203.03,0,255.996   c-0.008,35.313,7.16,69.016,20.125,99.658c19.438,45.958,51.881,85.018,92.728,112.613C153.692,495.87,203.03,512.008,255.996,512   c35.305,0,69.016-7.168,99.649-20.125c45.966-19.446,85.018-51.882,112.621-92.736C495.87,358.308,512,308.97,512,255.996   C512,220.691,504.832,186.988,491.875,156.347z M374.27,351.228c-8.571,14.798-1.69,35.384-12.262,48.78   c-10.947,13.514-16.513,10.221-24.295,28.328c-0.853,2.36-14.742,31.917-18.211,23.122c3.054,7.854-0.383,15.66-10.357,16.274   c-7.95,0.47-2.233,5.071-4.704,8.252c-9.863,2.17-19.965,3.708-30.274,4.521c-6.928-25.299-10.74-54.6-10.565-62.972   c0.638-32.484-6.609-19.327-23.609-43.342c-11.616-16.513-21.91-34.803-21.304-55.733c-0.088,3.74,23.329-53.086,6.426-42.25   c-20.532,13.172-24.311-14.567-44.092-17.158c-10.102-1.339-7.16-11.768-18.49-9.982c-10.174,1.594-21.735-11.904-29.277-16.991   c-4.951-3.572-13.578-51.619-20.842-50.933c-10.373,0.383,7.598,33.049,3.835,34.142c-7.742,1.451-21.313-46.093-21.057-50.008   c0.39-12.63-0.83-19.75,7.527-30.251c3.245-4.226,21.718-20.475,19.773-26.304c-3.308-10.166-1.602-22.022-6.905-28.831   c4.681-3.739,9.504-7.311,14.487-10.677c10.31-6.968,21.249-13.076,32.675-18.282c1.332-0.04,2.663-0.096,3.97-0.239   c10.206-0.997,20.627-4.959,30.992-3.388c13.666,2.008,28.488,7.893,42.88,6.769c13.251-0.933,50.638-12.949,62-3.254   c5.015,4.306-56.443,21.72-58.396,30.043c-0.997,5.422,16.002,4.944,17.469,5.079c17.087,1.403-4.241,15.452,6.252,18.481   c16.114,3.891,27.738-56.338,41.205-24.844c5.502,13.06,24.406-8.547,26.543,7.566c2.153,16.951,18.426,22.684-11.506,24.885   c-28.073,2.28-4.864,14.726-23.186,22.811c-17.525,7.718-33.552,11.107-46.46,26.966c-14.559,17.987-15.954,17.389-21.671,40.408   c-3.15,12.565-19.678-8.842-13.371-16.696c-2.185,2.694-21.544-6.1-23.466-1.587c-3.755,8.706-13.961,4.035-21.982,9.369   c-10.142,6.706-20.077,28.44-9.927,38.63c8.125,8.101,36.095-17.884,37.618-9.01c1.196,6.786-9.919,11.601-8.706,18.387   c1.746,9.823,18.872-2.815,18.864,4.816c0.008,4.895-0.805,25.355,14.272,20.236c8.125-2.774,8.93,3.046,14.009,1.826   c6.96-1.683,10.07-10.963,18.275-9.752c9.766,1.427,20.714,6.371,30.074,9.13c15.213,4.504,14.535,17.214,31.463,19.821   c16.911,2.663,10.15,18.323,8.068,27.197C329.007,322.58,399.107,310.772,374.27,351.228z M440.711,127.133   c0.686,0.981,1.403,1.954,2.066,2.95c4.01,5.916,7.71,12.064,11.138,18.378c-1.443,0.494-2.806,0.893-3.851,1.012   c-4.417,0.558-11.585-3.301-12.685-4.959C436.493,143.191,439.468,131.726,440.711,127.133z M481.223,257.232   c-1.252-0.702-2.615-1.077-4.138-0.766c-5.518,1.1-26.471,6.618-34.189,5.509c-7.726-1.108-31.981-24.262-31.981-29.779   c0-5.51,1.101-26.471,3.301-29.78c2.209-3.309,14.336-18.426,18.753-25.036c4.409-6.625,11.027-15.436,16.544-16.544   c1.715-0.343,5.375-1.012,9.824-1.834c14.032,29.374,21.902,62.231,21.91,96.994C481.247,256.411,481.223,256.809,481.223,257.232z   '
              />
            </g>
          </svg>
          Discover
        </Link>
        <Link
          to='#'
          className='text-black p-4 flex flex-row gap-1 justify-center font-semibold items-center'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width='15px'
            height='15px'
            viewBox='0 0 366.34 366.34'
            id='Layer_1'
            data-name='Layer 1'
          >
            <defs>
              <linearGradient
                id='linear-gradient'
                x1='69.93'
                y1='295.83'
                x2='296.41'
                y2='295.83'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' stopColor='#16243f' />
                <stop offset='1' stopColor='#6878b1' />
              </linearGradient>
            </defs>
            <title>Artboards_Diversity_Avatars_by_Netguru</title>
            <path
              className='cls-1'
              d='M296.41,291.18a184.56,184.56,0,0,1-226.48-1l48.66-22.81a46.83,46.83,0,0,0,6.65-3.82c.64-.44,1.28-.9,1.89-1.38a46.35,46.35,0,0,0,12.78-15.09,44.69,44.69,0,0,0,4.64-14.48,67.91,67.91,0,0,0,.74-9.91c0-3.46-.09-6.92-.21-10.38-.07-2.26-.13-4.53-.16-6.79q-.06-4.75-.1-9.51l2,1,5.2,2.69,2.41.41,27.88,4.74,31.12,5.3.94,32,.31,10.46.15,5.08V258l1,.42,11.07,4.5Z'
            />
            <path
              className='cls-2'
              d='M214.82,258a16,16,0,0,1-10.07-1.56l-59.67-48.77c-.07-2.26-.13.1-.16-2.16q-.06-4.75-.1-9.51l2,1,5.2,2.69,2.41.41,27.88,4.74,31.12,5.3.94,32,.31,10.46.15,5.08V258Z'
            />
            <path
              className='cls-3'
              d='M296.41,291.18a184.56,184.56,0,0,1-226.48-1l48.66-22.81a46.83,46.83,0,0,0,6.65-3.82c.64-.44,1.28-.9,1.89-1.38,23.55,16.76,55.69,27.33,83.49,14.82,6.62-3,12.7-7.84,16.3-14.06Z'
            />
            <path
              className='cls-4'
              d='M278.51,90.9c-.09.59-.2,1.17-.33,1.75a32.08,32.08,0,0,1-3.31,8.49l-.08.14c-.57,1-1.18,2-1.84,3a74.32,74.32,0,0,1-5.72,7.35L266,113c-.83.93-1.67,1.84-2.51,2.74,4.45-1,8.76,3.15,9.55,7.63s-1,9-3.21,13c-3.87,7.08-9.45,11.79-14.36,17.94-3.68,4.58-5.72,10-9.73,14.38l-.3.33c-10.59,11.12-27.31,13.72-41.23,18.47-5,1.72-59.22,17.12-59.22,20.48,0-.73-5.31-6-12-12.41-24-22.79-31.89-58-17.61-88.2,15.35-32.5,50.21-55.69,83.41-66.83,10.38-3.48,22.16-5.82,32-1s14.74,19.77,6.58,27.07a26.16,26.16,0,0,1,17.93-5.21,24.46,24.46,0,0,1,15.72,7.07,27,27,0,0,1,6.95,12.08A24.94,24.94,0,0,1,278.51,90.9Z'
            />
            <path
              className='cls-5'
              d='M278.51,90.9c-.09.59-.2,1.17-.33,1.75-.09.17-.18.35-.27.55-1.13,2.58-1.65,5.36-3,7.94l-.08.14c-.57,1-1.18,2-1.84,3a67.09,67.09,0,0,1-5.72,7.35L266,113c-.83.93-1.67,1.84-2.51,2.74,4.45-1,8.76,3.15,9.55,7.63s-1,9-3.21,13c-3.87,7.08-9.45,11.79-14.36,17.94-3.68,4.58-5.72,10-9.73,14.38a37.7,37.7,0,0,1-8.54-19.47c-1.64-13.26-.64-27.71-1.09-41.13-.28-8.44-3-10,2.06-16.83a74.3,74.3,0,0,1,14-13.29c4.08-2.69,9.33-3.11,14.2-2.42a23.5,23.5,0,0,1,11.58,5A24.94,24.94,0,0,1,278.51,90.9Z'
            />
            <circle className='cls-1' cx='134.98' cy='168' r='17' />
            <circle className='cls-2' cx='140.37' cy='168' r='15.22' />
            <path
              className='cls-1'
              d='M140.6,152,145,209l66.44,38.82A19.77,19.77,0,0,0,236.1,238c9.56-19.58,24.9-50.5,22.88-62-3-17-11-23-11-23q1.67-10,3.32-19.94c1.26-7.51,2.87-15.35,1-22.9-2.13-8.66-8.67-12.35-14.05-18.82-14.16,18.24-37.44,28.55-57.77,39C170,135.78,140.6,152,140.6,152Z'
            />
            <path
              className='cls-6'
              d='M189.72,149.8c6.1,0,6.1,9.38,0,9.43h-.28c-6.1,0-6.1-9.38,0-9.43h.28Z'
            />
            <path
              className='cls-6'
              d='M239.84,148.41c5.67.05,5.67,8.7,0,8.75h-.25c-5.66,0-5.66-8.7,0-8.75h.25Z'
            />
            <path
              className='cls-7'
              d='M215.13,147.09c-.08.35,13.36,36.13,13.36,36.13l-17.94.87'
            />
            <path
              className='cls-7'
              d='M172.65,140.17a80.57,80.57,0,0,1,28.13-.79'
            />
            <path
              className='cls-7'
              d='M231.7,140.28a55.34,55.34,0,0,1,17.45-1.21'
            />
            <path
              className='cls-8'
              d='M192.17,194.1a1.85,1.85,0,0,1,2.68-.5c2.08,1.46,5.88,4.56,11.28,5.63,7.36,1.47,13.74-1.48,15.27.42.86,1.07-.19,2.37-2.2,4a19.74,19.74,0,0,1-14.86,3.69c-7.08-1.33-12.4-9.53-12.4-12.44A1.66,1.66,0,0,1,192.17,194.1Z'
            />
          </svg>
          Joane Smith
        </Link>
      </div>
    </header>
  );
}

export default Header;
