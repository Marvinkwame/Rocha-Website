"use client"
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdownItems: DropdownItem[];
}

interface MobileDropdowns {
  [key: string]: boolean;
}

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<MobileDropdowns>({});

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const navItems: NavItem[] = [
    {
      label: 'Conservation',
      href: '/',
      dropdownItems: [
        { label: 'Wildlife Protection', href: '/wildlife' },
        { label: 'Ocean Conservation', href: '/ocean' },
        { label: 'Forest Preservation', href: '/forest' }
      ]
    },
    {
      label: 'Projects',
      href: '/',
      dropdownItems: [
        { label: 'Current Initiatives', href: '/current' },
        { label: 'Past Projects', href: '/past' },
        { label: 'Future Plans', href: '/future' }
      ]
    },
    {
      label: 'About',
      href: '/',
      dropdownItems: [
        { label: 'Our Mission', href: '/mission' },
        { label: 'Team', href: '/team' },
        { label: 'Partners', href: '/partners' }
      ]
    }
  ];

  return (
    <header className="fixed w-full top-8 left-0 bg-white text-black shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-xl font-bold transition-transform hover:scale-105">
            Website
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center py-2 text-gray-700 transition-colors hover:text-black"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100" />
                  </a>
                  
                  {/* Desktop Dropdown */}
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                    <div className="py-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-600 text-sm px-4 rounded-md font-bold text-white py-2 transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95">
              Subscribe
            </button>
            <button className="bg-green-600 text-sm py-2 px-4 font-bold text-white rounded-md transition-all hover:bg-green-700 hover:shadow-lg active:scale-95">
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="px-4 pt-2 pb-4 bg-white shadow-lg">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label} className="space-y-2">
                <button
                  onClick={() => toggleMobileDropdown(item.label)}
                  className="flex w-full items-center justify-between py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md px-3 transition-colors"
                >
                  {item.label}
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openMobileDropdowns[item.label] ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {/* Mobile Dropdown */}
                <div
                  className={`transition-all duration-300 origin-top ${
                    openMobileDropdowns[item.label]
                      ? 'max-h-48 opacity-100 scale-100'
                      : 'max-h-0 opacity-0 scale-95'
                  } overflow-hidden`}
                >
                  <div className="bg-gray-50 rounded-md mt-1 shadow-inner">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 px-4 transition-colors"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
            <li className="pt-2 space-y-2">
              <button className="w-full bg-blue-600 text-sm px-4 rounded-md font-bold text-white py-2 transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95">
                Subscribe
              </button>
              <button className="w-full bg-green-600 text-sm py-2 px-4 font-bold text-white rounded-md transition-all hover:bg-green-700 hover:shadow-lg active:scale-95">
                Donate
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNav;