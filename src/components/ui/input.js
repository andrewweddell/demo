// src/components/ui/input.js
import React from 'react';

export const Input = ({ ...props }) => <input className="border rounded px-2 py-1" {...props} />;
export const Select = ({ ...props }) => <select className="border rounded px-2 py-1" {...props} />;
export const Button = ({ children, ...props }) => (
  <button className="bg-blue-500 text-white px-4 py-2 rounded" {...props}>{children}</button>
);