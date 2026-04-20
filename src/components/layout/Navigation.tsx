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
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    const visited = localStorage.getItem('visited');

    if (!visited || Date.now() > Number(visited)) {
      const timer = setTimeout(() => {
        setHasLoaded(true);
        localStorage.setItem(
          'visited',
          String(Date.now() + 24 * 60 * 60 * 1000)
        );
      }, 5000); // delay before fade-in (adjust to taste)
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className={clsx(styles.nav, isOpen ? styles.navOpen : '')}>
      <div className={styles.navUi}>
        <span
          className={styles.enterSite}
          data-visible={isIndex && !isOpen && hasLoaded}
          aria-hidden
        >
          enter site <IoArrowForwardOutline />
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className={styles.iconClose} aria-hidden>
            <IoCloseOutline />
          </span>
          <span className={styles.iconMenu} aria-hidden>
            <IoMenuOutline />
          </span>
        </button>
      </div>
      <nav aria-hidden={!isOpen}>
        <ul>
          {NavLinks.map(({ href, label, icon }) => {
            const isCurrent = pathname === href;
            return (
              <li key={label}>
                <Link
                  href={href}
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
    </div>
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
              <Link
                key={href}
                href={href}
                aria-label={label}
                className={styles.link}
              >
                <span className={styles.sizeIcon} aria-hidden>
                  {icon ?? label}
                </span>
                <span className={styles.frontIcon} aria-hidden>
                  {icon ?? label}
                </span>
                <span className={styles.backIcon} aria-hidden>
                  {icon ?? label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
