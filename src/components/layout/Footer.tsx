// /src/components/layout/Header.tsx
import React from 'react';
interface HeaderProps {
  children?: React.ReactNode;
}
export default function Header({ children }: HeaderProps) {
  return <header>{children}</header>;
}
