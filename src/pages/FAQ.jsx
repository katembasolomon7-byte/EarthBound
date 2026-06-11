import React, { useState } from "react";

/**
 * FAQ.jsx
 *
 * Updated to:
 * - Use a teal/green accent that matches the provided Profile screenshot.
 * - Include a top header bar with a back button (left) and a centered title.
 * - Collapsible accordion for Q1..Q9 with expand/collapse animation.
 * - Badge color and chevron use the accent color.
 *
 * Replace your existing FAQ.jsx with this file. No other files are touched.
 */

// Accent color chosen to match the teal/green tone from the screenshot.
const ACCENT_GREEN = "#17a784"; // teal/green similar to the screenshot
const BG = "#070707";
const CARD_BG = "linear-gradient(180deg, #151515 0%, #0f0f0f 100%)";
const CARD_BORDER = "rgba(255,255,255,0.04)";
const TEXT_LIGHT = "#e6e6e6";
const TEXT_MUTED = "#bdbdbd";

const faqs = [
  {
    id: "Q1",
    title: "I.Start brand promotion tasks",
    content: [
      "1.1) A minimum amount of $100 is needed to reset your account for your daily sets of task."
    ]
  },
  {
    id: "Q2",
    title: "II.Withdrawal",
    content: [
      "2.1) If the withdrawal amount is $10,000 or more, please contact our online customer service to withdraw.",
      "2.2) After completing all tasks, you can apply for full withdrawal.",
      "2.3) Users must complete all tasks before they can apply for withdrawal.",
      "2.4) If you choose to give up or quit during the task promotion process, you cannot apply for withdrawal or refund."
    ]
  },
  {
    id: "Q3",
    title: "III.Funds",
    content: [
      "3.1) All funds will be kept safe in the user's account and can be withdrawn in full after submitting all brand data.",
      "3.2) To avoid fund loss, all data will be processed by the system, not manually.",
      "3.3) The platform bears full responsibility for any unexpected fund loss."
    ]
  },
  {
    id: "Q4",
    title: "IV.Account Security",
    content: [
      "4.1) Please do not disclose your login password and security code to others. The platform is not responsible for any loss.",
      "4.2) Users are advised not to use their birthday, ID number, mobile phone number, etc. as security code or login password.",
      "4.3) If you forget your login password or security code, please contact our online customer service to reset it."
    ]
  },
  {
    id: "Q5",
    title: "V.Single product mission",
    content: [
      "5.1) Platform earnings are divided into regular earnings and \"10 times\" earnings. Normally, users receive 0 to 3 combined product combinations per submission.",
      "5.2) VIP1 members receive 0.5% of the profits from each regular single product submission.",
      "5.3) VIP1 members receive 5.0% of the profits from each combo product submission.",
      "5.4) After a product is successfully completed, the system will return the funds and earnings to the user's account.",
      "5.5) The system will randomly allocate products to the user's account based on their account balance.",
      "5.6) Once a product is allocated to a user's account, it cannot be cancelled, skipped, or modified."
    ]
  },
  {
    id: "Q6",
    title: "VI.Combo product mission",
    content: [
      "6.1) Combo mission consists of 2 brand tasks. Within a set of tasks, the system randomly matches based on the user's balance, and the commissions will be superimposed. Every time a user completes a combo mission, the user will get a generous commission reward.",
      "6.2) The commission for each product in a combo mission will be 6 times higher than that of a regular task. The specific amount depends on the user's level and the value of the task obtained.",
      "6.3) The system will randomly assign combo mission based on the total balance of the user's account. After completing the combo mission, you can submit the order in the order details, and all funds will be returned to the account. After completing the remaining tasks, you can apply for withdrawal.",
      "6.4) Once a combo mission is assigned to a user account, it cannot be cancelled or skipped.",
      "6.5) The recharge amount is chosen by the user; we cannot decide the deposit amount for the user. However, the recharge amount must be in accordance with the platform's requirements.",
      "6.6) If a user is required to pay a deposit upon receiving a matching task, it is recommended that the user prepay the deposit based on the difference shown in their account."
    ]
  },
  {
    id: "Q7",
    title: "VII.Deposit",
    content: [
      "7.1) The deposit amount is chosen by the user. We cannot decide the deposit amount for the user. We recommend that the user pay a deposit in advance according to their own ability.",
      "7.2) If the user needs to pay a deposit when receiving a Coupling tasks, we recommend that the user pay the deposit in advance according to the difference amount shown in the account.",
      "7.3) The user must confirm the address with the customer service before making a deposit. If the user transfers to the wrong address, the platform will not be responsible.",
      "7.4) If the user deposit the money into the wrong deposit account, the platform will not be responsible."
    ]
  },
  {
    id: "Q8",
    title: "VIII.Invitation",
    content: [
      "9.1) VIP3 users must work on the platform for 15 working days before they are eligible to invite new users.",
      "9.2) Once you become a VIP4 user and complete the tasks, you will be eligible to invite other users without meeting other conditions.",
      "9.3) If the account has not completed all brand promotion tasks, it cannot invite other users."
    ]
  },
  {
    id: "Q9",
    title: "IX.Operation Time",
    content: [
      "10.1) Platform operation time 10:00 to 23:00",
      "10.2) Online customer service time 10:00 to 23:00",
      "10.3) Withdrawal operation time 10:00 to 23:00"
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const handleBack = () => {
    // if using React Router you could call navigate(-1) instead.
    if (window && window.history && window.history.length > 1) {
      window.history.back();
    } else {
      // fallback: go to root
      window.location.href = "/";
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT_LIGHT, fontFamily: "Inter, Arial, sans-serif", paddingBottom: 48 }}>
      {/* Top header with back button and title (matches screenshot layout) */}
      <div style={{
        height: 56,
        background: "#111111",
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        boxSizing: "border-box",
        borderBottom: `1px solid ${CARD_BORDER}`
      }}>
        <button
          onClick={handleBack}
          aria-label="Back"
          style={{
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            marginRight: 8
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15 18l-6-6 6-6" stroke={ACCENT_GREEN} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div style={{ flex: 1, textAlign: "center", fontWeight: 700, fontSize: 18, color: TEXT_LIGHT }}>
          Profile FAQs
        </div>

        <div style={{ width: 44 }} /> {/* placeholder to balance layout */}
      </div>

      <div style={{ maxWidth: 980, margin: "0 auto", padding: "28px 18px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div style={{ fontWeight: 800, color: "#ffffff", fontSize: 36, lineHeight: 1.05 }}>
            Frequently Asked
          </div>
          <div style={{ fontWeight: 900, color: ACCENT_GREEN, fontSize: 40, marginTop: 6 }}>
            Questions
          </div>
          <div style={{ color: TEXT_MUTED, marginTop: 10, fontSize: 15 }}>
            Find answers to common questions about our services
          </div>
        </div>

        <div style={{ marginTop: 22 }}>
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={f.id} style={{ marginBottom: 14 }}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggleIndex(idx)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggleIndex(idx); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: CARD_BG,
                    borderRadius: 14,
                    padding: "14px 16px",
                    cursor: "pointer",
                    border: `1px solid ${CARD_BORDER}`,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
                    transition: "all 220ms ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      aria-hidden
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        background: ACCENT_GREEN,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#0b0b0b",
                        fontWeight: 800,
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
                        fontSize: 14,
                        flexShrink: 0
                      }}
                    >
                      {f.id.replace("Q", "")}
                    </div>
                    <div style={{ color: TEXT_LIGHT, fontWeight: 700, fontSize: 16 }}>
                      {f.title}
                    </div>
                  </div>

                  <div style={{ marginLeft: 12, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 180ms ease" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M6 9l6 6 6-6" stroke={ACCENT_GREEN} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Expanded content */}
                <div
                  style={{
                    maxHeight: isOpen ? 1000 : 0,
                    overflow: "hidden",
                    transition: "max-height 320ms ease",
                  }}
                >
                  <div style={{
                    marginTop: 10,
                    background: "#0f0f0f",
                    borderRadius: 12,
                    padding: "18px 18px 18px 18px",
                    color: TEXT_MUTED,
                    border: `1px solid ${CARD_BORDER}`,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.6)"
                  }}>
                    <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                      {f.content.map((line, i) => (
                        <li key={i} style={{ marginBottom: 8, fontSize: 14 }}>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ height: 10 }} />
      </div>

      {/* Mobile safe bottom padding */}
      <div style={{ height: 36 }} />
    </div>
  );
}
