import React, { Component } from "react";
import {Link} from 'react-router-dom'

import img1 from "../static/img/images/Group2.svg";
export default class NavBar extends Component {
  render() {
    return (
      <header id="header-section">
        <nav class="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
        <div class="container">
          <div class="navbar-brand-wrapper d-flex w-100">
            <img src={img1} alt=""></img>
            <button
              class="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="mdi mdi-menu navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse navbar-menu-wrapper" id="navbarSupportedContent">
          <ul class="navbar-nav align-items-lg-center align-items-start ml-auto">
          <li class="d-flex align-items-center justify-content-between pl-4 pl-lg-0">
            <div class="navbar-collapse-logo">
              <img src={img1}alt=""/>
            </div>
            <button class="navbar-toggler close-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="mdi mdi-close navbar-toggler-icon pl-5"></span>
            </button>
            </li>
            <li class="nav-item">
              <Link to="/" className="nav-link">home</Link>
          </li>
          <li class="nav-item">
          <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          </ul>
          </div>
        </div>
      </nav>
      </header>
      
    );
  }
}
