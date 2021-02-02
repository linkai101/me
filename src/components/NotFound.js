import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <>
    <Helmet><title>404</title></Helmet>
      <div className="NotFound">
        <span style={{marginRight:8}}><strong>{location.pathname}</strong> was not found.</span>
        <Link to="/" style={{ color: 'inherit' }}>Go home</Link>
      </div>
    </>
  );
}