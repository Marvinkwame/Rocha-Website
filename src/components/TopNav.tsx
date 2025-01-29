import Link from "next/link";
import React from "react";
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopNav = () => {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: "/", 
      label: "Instagram",
      hoverColor: "hover:text-pink-400"
    },
    { 
      icon: Twitter, 
      href: "/", 
      label: "Twitter",
      hoverColor: "hover:text-blue-400"
    },
    { 
      icon: Facebook, 
      href: "/", 
      label: "Facebook",
      hoverColor: "hover:text-blue-600"
    },
    { 
      icon: Youtube, 
      href: "/", 
      label: "Youtube",
      hoverColor: "hover:text-red-500"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-10 flex items-center justify-between">
          {/* Contact Information */}
          <div className="hidden sm:flex items-center space-x-4 text-blue-100">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">contact@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (234) 567-8900</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-1">
            {socialLinks.map((social) => (
              <Link 
                key={social.label} 
                href={social.href}
                aria-label={social.label}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-1 text-blue-100 hover:bg-blue-500 ${social.hoverColor} transition-colors duration-200`}
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;