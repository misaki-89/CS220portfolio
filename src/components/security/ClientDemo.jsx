"use client";

import { useState, useCallback } from "react";
import { steps } from "@/data/sqlInjectionSteps";

export default function ClientDemo() {
  const [username, setUsername] = useState("");
  const [query, setQuery] = useState("");
  const [log, setLog] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const simulatedQuery = `SELECT * FROM users WHERE username = '${username}'`;
      setQuery(simulatedQuery);

      const lower = username.toLowerCase();
      const isInjection =
        lower.includes("&apos;") ||
        lower.includes(" or ") ||
        lower.includes("1&apos;=&apos;1") ||
        lower.includes("&apos;=&apos;");

      if (isInjection) {
        setLog(
          [
            `[+] Input received: ${username}`,
            `[+] Constructed Query:`,
            `    ${simulatedQuery}`,
            ``,
            `[!] Injection detected → Condition always TRUE`,
            `[!] Authentication bypassed (demo simulation)`,
            ``,
            `[!] Dumping users (demo only):`,
            `    - admin / password123`,
            `    - guest / guest`,
            ``,
            `※ This is a simulation. No real database is used.`,
          ].join("\n"),
        );
      } else {
        setLog(
          [`[i] Input received: ${username}`, `[i] Query executed safely (demo)`, `[i] No injection detected`].join(
            "\n",
          ),
        );
      }
    },
    [username],
  );

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">SQL Injection Demo Input</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border border-[color:var(--border-subtle)] rounded-lg p-6 mb-10"
      >
        <label className="flex flex-col gap-1">
          <span className="text-sm text-[color:var(--text-secondary)]">Username</span>
          <input
            type="text"
            className="border border-[color:var(--border-subtle)] rounded px-3 py-2 bg-transparent"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Try: admin' OR '1'='1"
          />
        </label>

        <button type="submit" className="bg-[color:var(--accent)] text-white py-2 rounded hover:opacity-90 transition">
          Run Query
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-6">Explanation</h2>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Step‑1: User Input</h3>
        <p className="text-[color:var(--text-secondary)] mb-3">
          The attacker enters a crafted string that contains SQL logic instead of a normal username. This input is
          designed to break out of the intended query structure.
        </p>
        <pre className="bg-black text-red-400 p-3 rounded text-sm">{steps.step1}</pre>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Step‑2: Vulnerable Query Builder</h3>
        <p className="text-[color:var(--text-secondary)] mb-3">
          The application builds the SQL query by directly concatenating the user input into the string. This lack of
          validation is the core vulnerability that enables SQL Injection.
        </p>
        <pre className="bg-black text-yellow-300 p-3 rounded text-sm whitespace-pre-wrap">{steps.step2}</pre>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Step‑3: SQL Evaluation</h3>
        <p className="text-[color:var(--text-secondary)] mb-3">
          The database evaluates the injected condition. Because <strong>&apos;1&apos;=&apos;1&apos;</strong> is always
          TRUE, the entire WHERE clause becomes TRUE, allowing the attacker to bypass authentication.
        </p>
        <pre className="bg-black text-green-400 p-3 rounded text-sm whitespace-pre-wrap">{steps.step3}</pre>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Step‑4: Database Returns All Rows</h3>
        <p className="text-[color:var(--text-secondary)] mb-3">
          Since the WHERE clause is always TRUE, the database returns all user records. The application mistakenly
          treats the attacker as a valid user and grants access.
        </p>
        <pre className="bg-black text-green-400 p-3 rounded text-sm whitespace-pre-wrap">{steps.step4}</pre>
      </div>

      {query && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Generated SQL Query</h2>
          <pre className="bg-black text-green-400 p-4 rounded-lg text-sm overflow-auto">{query}</pre>
        </div>
      )}

      {log && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Execution Log</h2>
          <pre className="bg-black text-green-400 p-4 rounded-lg text-sm whitespace-pre-wrap">{log}</pre>
        </div>
      )}
    </div>
  );
}
