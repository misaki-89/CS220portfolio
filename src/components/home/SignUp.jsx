"use client";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="
        w-full max-w-xl rounded-2xl p-6 space-y-5
        bg-[color:var(--card-bg)]
        border border-[color:var(--border-subtle)]
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <svg width="22" height="22" fill="none" stroke="#9ca3af" strokeWidth="2">
          <path d="M4 4h16v16H4z" />
          <path d="M4 4l8 8 8-8" />
        </svg>

        <h2 className="text-lg font-semibold text-[color:var(--text-primary)]">Stay up to date</h2>
      </div>

      <p className="text-[color:var(--text-secondary)]">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>

      {/* Input row */}
      <div className="flex gap-3">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            flex-1 rounded-lg px-4 py-2
            bg-[color:var(--input-bg)]
            border border-[color:var(--border-subtle)]
            text-[color:var(--text-primary)]
            placeholder:text-[color:var(--text-secondary)]
            focus:outline-none
            focus:ring-1 focus:ring-[color:var(--text-primary)]
          "
        />

        <button
          type="submit"
          className="
            px-5 py-2 rounded-lg
            bg-[#2f2f33]
            text-white
            hover:bg-[#38383d]
            transition
          "
        >
          Join
        </button>
      </div>
    </form>
  );
}
