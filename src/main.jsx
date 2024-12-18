import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./Router/Router"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gradient-to-r from-[#0F0715] to-[#281745]'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
