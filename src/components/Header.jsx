import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/header/EARTHBOUND-LOGO.png";
import me from "../assets/images/header/me.png";
import NotificationBell from "./NotificationBell";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-transparent">
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="Stacks Logo" className="h-6" />
      </Link>

      <div className="flex items-center gap-3">
        {/* Notification Bell */}
        <NotificationBell />

        {/* User Profile */}
        <Link to="/profile">
          <img
            src={me}
            alt="User profile"
            className="h-6 w-6 rounded-full cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
