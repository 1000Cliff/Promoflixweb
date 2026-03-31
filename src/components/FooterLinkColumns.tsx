type FooterLinkColumn = {
  title: string;
  links: string[];
  className: string;
};

type FooterLinkColumnsProps = {
  className: string;
  columns: FooterLinkColumn[];
};

export function FooterLinkColumns({ className, columns }: FooterLinkColumnsProps) {
  return (
    <div
      className={className}
      data-name="footer links"
    >
      {columns.map((column) => (
        <div key={column.title} className={column.className} data-name="column">
          <p className="relative shrink-0 text-[#a0a0ab] w-full">{column.title}</p>
          {column.links.map((link) => (
            <p key={link} className="relative shrink-0 text-[#fafafa] w-full">
              {link}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
