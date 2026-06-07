import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RENDER_BACKEND_URL = "https://earthbound-admin.onrender.com";
const BELL_GREEN = "#2f8b82";

export default function NotificationBell() {
  const [unread, setUnread] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${RENDER_BACKEND_URL}/api/notifications`, {
      headers: { "X-Auth-Token": localStorage.getItem("authToken") }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.success) {
          setNotifications(data.notifications || []);
          const lastRead = Number(localStorage.getItem("lastReadNotificationId") || 0);
          setUnread(
            (data.notifications && data.notifications.length > 0) &&
            Number(data.notifications[0].id) > lastRead
          );
        }
      })
      .catch(() => {
        // ignore errors, keep silent
      });
  }, []);

  const handleBellClick = () => {
    if (notifications.length) {
      try {
        localStorage.setItem("lastReadNotificationId", notifications[0].id);
      } catch (e) {}
      setUnread(false);
    }
    navigate("/notifications");
  };

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleBellClick();
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <svg
        onClick={handleBellClick}
        onKeyDown={handleKey}
        role="button"
        tabIndex={0}
        aria-label={unread ? "You have unread notifications" : "Notifications"}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={BELL_GREEN}
        stroke={BELL_GREEN}
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer", display: "block" }}
      >
        <title>{unread ? "You have unread notifications" : "Notifications"}</title>
        <path d="M12 22c1.1 0 2-.89 2-2h-4a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-1.7 1.7c-.14.14-.3.3-.3.6 0 .39.31.7.7.7h14c.39 0 .7-.31.7-.7 0-.3-.16-.46-.3-.6L18 16z"/>
      </svg>

      {unread && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 2,
            right: 2,
            minWidth: 10,
            height: 10,
            background: BELL_GREEN,
            borderRadius: "50%",
            display: "inline-block",
            boxShadow: "0 0 0 2px rgba(0,0,0,0.06)"
          }}
        />
      )}
    </div>
  );
}
