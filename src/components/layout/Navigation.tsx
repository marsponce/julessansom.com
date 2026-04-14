// /src/components/layout/Navigation.tsx;

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
  IoCloseOutline,
  IoMenuOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';
import styles from './Navigation.module.css';

type NavLink = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

const NavLinks = [
  {
    href: '/',
    label: 'Jules Sansom',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/selected-works',
    label: 'Selected Works',
  },
  {
    href: '/cv',
    label: 'CV',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
] as NavLink[];

export function Nav() {
  const pathname = usePathname();
  const isIndex = pathname === '/';

  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={clsx(styles.nav, isOpen ? styles.navOpen : '')}>
      <span className={styles.enterSite} data-visible={isIndex && !isOpen}>
        enter site <IoArrowForwardOutline />
      </span>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.iconClose}>
          <IoCloseOutline size={32} />
        </span>
        <span className={styles.iconMenu}>
          <IoMenuOutline size={32} />
        </span>
      </button>

      <ul>
        {NavLinks.map(({ href, label, icon }) => {
          const isCurrent = pathname === href;
          return (
            <li key={label}>
              <Link
                href={href}
                aria-label={label}
                aria-current={isCurrent ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {icon ?? label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const SocLinks = [
  {
    href: 'https://www.instagram.com/judy.and.the.junie.queues',
    label: 'Instagram',
    icon: <FaInstagram size={32} />,
  },
  {
    href: 'mailto:hello@julessansom.com',
    label: 'EMail',
    icon: <MdEmail size={32} />,
  },
  {
    href: 'https://julessansom.com',
    label: 'julessansom.com',
  },
] as NavLink[];

export function Socials() {
  return (
    <nav className={styles.soc}>
      <ul>
        {SocLinks.map(({ href, label, icon }) => {
          return (
            <li key={label}>
              <Link key={href} href={href} aria-label={label}>
                {icon ?? label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
