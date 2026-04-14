import dynamic from "next/dynamic";

const ClientDemo = dynamic(
  () => import("@/components/security/ClientDemo"),
  { ssr: false }
);

export default function SqlInjectionPage() {
  return (
    <section className="w-full max-w-3xl mx-auto py-10 px-4">

      <h1 className="text-3xl font-bold mb-6 text-[color:var(--text-primary)]">
        SQL Injection Lab (Demo)
      </h1>

      <p className="text-[color:var(--text-secondary)] mb-8 leading-relaxed">
        This page demonstrates how SQL Injection works using a safe, simulated environment.
        No real database is used. Everything happens in the browser.
      </p>

      {/* Attack Flow Diagram */}
<div className="mb-10">
  <h2 className="text-xl font-semibold mb-3">Attack Flow</h2>
  <pre className="text-sm text-[color:var(--text-secondary)] whitespace-pre-wrap">
{`User Input → Login Form → Vulnerable Query Builder → SQL Engine → Data Leak`}
  </pre>
</div>


      <ClientDemo />

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Real-World SQL Injection Incidents</h2>

        <ul className="list-disc ml-6 text-[color:var(--text-secondary)] leading-relaxed">
          <li>
            <a
              href="https://lecs.io/famous-hacker-attacks-heartland-payment-system/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--accent)] underline"
            >
              Heartland Payment Systems (2008)
            </a>
            — Over 130 million credit cards were stolen due to SQL Injection vulnerabilities.
          </li>

          <li>
            <a
              href="https://www.theguardian.com/business/2016/oct/05/talktalk-hit-with-record-400k-fine-over-cyber-attack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--accent)] underline"
            >
              TalkTalk (2015)
            </a>
            — A simple SQL Injection attack exposed data of 150,000 customers.
          </li>

          <li>
            <a
              href="https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-fmc-sql-inject-2EnmTC8v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--accent)] underline"
            >
              Cisco Firepower Management Center (2024)
            </a>
            — Cisco confirmed a SQL Injection vulnerability allowing attackers to access sensitive database information.
          </li>
        </ul>
      </div>

    </section>
  );
}
