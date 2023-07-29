import React from 'react'

const Footer = () => {
  return (
    <footer className="d-flex flex-row justify-content-center">
    <p className="m-2 ">&copy; 2023 My Fitness Tips. All rights reserved.</p>
    <ul className="d-flex felx-column ">
        <li className="m-2 fs-4"><a href="#">Privacy Policy</a></li>
        <li className="m-2 fs-4"><a href="#">Terms of Service</a></li>
    </ul>
</footer>
  )
}

export default Footer