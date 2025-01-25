"use client";
import {
  Navbar as NavbarMain,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import React from "react";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ThemeSwitch } from "./theme-switch";

export const Logo = () => {
  return (
    <Link
      className="text-primary font-bold text-lg md:text-lg dark:text-slate-100"
      href="/"
    >
      Shri Guru Ravidass Sabha Vienna
    </Link>
  );
};

const Navbar = () => {
  const icons = {
    chevron: <ChevronDownIcon />,
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const mobileMenuData = [
    {
      label: "History",
      href: "/about/history",
    },
    {
      label: "Meet our Team",
      href: "/about/our-team",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  const menuData = [
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const dropDownMeunData = [
    {
      label: "History",
      href: "/about/history",
    },
    {
      label: "Meet our Team",
      href: "/about/our-team",
    },
  ];

  return (
    <NavbarMain
      onMenuOpenChange={setIsMenuOpen}
      className="shadow"
      shouldHideOnScroll
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
                size="lg"
              >
                About us
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="About us"
            className="w-[240px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {dropDownMeunData.map(({ label, href }) => (
              <DropdownItem key={href} variant="bordered" className="p-0 ">
                <Link
                  href={href}
                  className="w-full px-2 py-1 text-gray-900 dark:text-gray-300"
                >
                  {label}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        {menuData.map(({ label, href }) => (
          <NavbarItem key={href}>
            <Link color="foreground" href={href}>
              {label}
            </Link>
          </NavbarItem>
        ))}
        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu>
        {mobileMenuData.map(({ label, href }) => (
          <NavbarMenuItem key={href}>
            <Link className="w-full" color="primary" href={href} size="lg">
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarMain>
  );
};

export default Navbar;
