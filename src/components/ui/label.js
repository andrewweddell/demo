// src/components/ui/label.js
import React from 'react';

export const Label = ({ children, ...props }) => (
  <label className="font-semibold" {...props}>{children}</label>
);