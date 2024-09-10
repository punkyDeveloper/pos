"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Collapse } from 'react-bootstrap';
import {FaFilter, FaPen, FaMoneyBill , FaUser , FaUserCircle } from 'react-icons/fa';
import { CiShoppingTag, CiShop, CiCreditCard1 } from "react-icons/ci";
import { GrConfigure  } from "react-icons/gr";
import { SiCivicrm } from "react-icons/si";

import '../../assets/css/navLateral.css';

const SideNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [ setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
      setIsOpen(false);
    } else {
      setOpenDropdown(dropdown);
      setIsOpen(true);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Navbar expand="lg" className="d-flex flex-column p-3 side-nav">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="flex-column w-100">

          <div className="user-profile mb-4 d-flex align-items-center">
            <FaUserCircle className="user-icon me-3" />
            <div className="user-info">
              <div className="user-name">John Doe</div>
              <div className="user-role">Administrator</div>
            </div>
          </div>

          <Nav.Link href="/pos" className="d-flex align-items-center nav-item my-2">
            <CiShoppingTag className="me-3 nav-icon" />
            <span>POS</span>
          </Nav.Link>
          <Nav.Link href="#notifications" className="d-flex align-items-center nav-item my-2">
            <CiShop  className="me-3 nav-icon" />
            <span>Factura</span>
          </Nav.Link>
          <Nav.Link href="#folders" className="d-flex align-items-center nav-item my-2">
            <SiCivicrm className="me-3 nav-icon" />
            <span>CRM</span>
          </Nav.Link>
          <Nav.Link href="#trash" className="d-flex align-items-center nav-item my-2">
            <FaMoneyBill className="me-3 nav-icon" />
            <span>Tesoseria</span>
          </Nav.Link>
          <Nav.Link href="#storage" className="d-flex align-items-center nav-item my-2">
            <CiCreditCard1  className="me-3 nav-icon" />
            <span>Credito</span>
          </Nav.Link>
          <Nav.Link href="/ERP/rol" className="d-flex align-items-center nav-item my-2">
            <GrConfigure  className="me-3 nav-icon" />
            <span>Configuracion</span>
          </Nav.Link>

          <Nav.Link href="#filter" className="d-flex align-items-center nav-item my-2">
            <FaFilter className="me-3 nav-icon" />
            <span>Filter</span>
          </Nav.Link>
          <Nav.Link href="#write" className="d-flex align-items-center nav-item my-2">
            <FaPen className="me-3 nav-icon" />
            <span>Write</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SideNav;