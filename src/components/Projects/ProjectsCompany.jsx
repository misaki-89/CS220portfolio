import CompanyCard from "./CompanyCard";

const companies = [
  {
    id: 1,
    name: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
  },
  {
    id: 2,
    name: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
  },
  {
    id: 3,
    name: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
  },
  {
    id: 4,
    name: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
  },
  {
    id: 5,
    name: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
  },
  {
    id: 6,
    name: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
  },
];

export default function ProjectsCompany() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {companies.map((company) => (
        <CompanyCard key={company.id} name={company.name} description={company.description} url={company.url} />
      ))}
    </section>
  );
}
