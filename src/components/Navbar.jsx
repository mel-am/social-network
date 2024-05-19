"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import navBarStyles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={navBarStyles.navBar}>
      <NavigationMenu.Root
        className={navBarStyles.navMenu}
      >
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item one content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item Two content</NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}
