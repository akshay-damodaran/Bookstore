import React from 'react';

const BreadCrumb = ({ tabs = [], active = '', onNewTab = f => f, children }) => (
  <div id='breadcrumb-container'>
    {children}
  </div>
)

export default BreadCrumb;
