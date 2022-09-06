import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="pt-3 pb-3">
        <span
          className="font-bold"
          style={{
            color: "white",
            textDecoration: "none",
            textTransform: "uppercase",
            fontSize: "150%",
          }}
        >
          SQUEZELINK
        </span>
        <span>
          <Nav style={{ color: "white" }}>
            <Link to="/">Выйти</Link>
          </Nav>
          <Nav style={{ color: "white" }}>
            <Link to="/squeeze">Сжатие</Link>
          </Nav>
          <Nav style={{ color: "white" }}>
            <Link to="/statistic">Статистика</Link>
          </Nav>
        </span>
      </Navbar>
    </>
  );
}
