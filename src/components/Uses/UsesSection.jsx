import UsesCard from "./UsesCard";

export default function UsesSection() {
  const items = [
    {
      groupName: "Workstation",
      items: [
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
      ],
    },
    {
      groupName: "Development tools",
      items: [
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
      ],
    },
    {
      groupName: "Design",
      items: [
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
      ],
    },
    {
      groupName: "Productivity",
      items: [
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
        {
          title: "Item Name",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet AppPageRouteModule. Vestibulum auctor ornare loadGetInitialProps,
            non suscipit megana interdum eu",
            `,
        },
      ],
    },
  ];

  return (
    <section className="w-full px-0 py-6">
      <div className="flex flex-col gap-20 w-full">
        {items.map((group, index) => (
          <div
            key={index}
            className="
              flex flex-col gap-8
              border-l-0
              md:flex-row md:gap-12
              md:border-l-2 md:border-[color:var(--border-subtle)] md:pl-6
            "
          >
            <h2 className="text-xl font-bold md:min-w-[160px] text-[color:var(--text-primary)]">{group.groupName}</h2>

            <div className="flex flex-col gap-10 w-full">
              {group.items.map((item, idx) => (
                <UsesCard key={idx} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
