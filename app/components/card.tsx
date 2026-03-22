export function Card({
  accent,
  icon,
  title,
  description,
  tags,
  href,
}: {
  accent: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  tags?: string[];
  href?: string;
}) {
  const content = (
    <>
      {icon && (
        <span className="shrink-0" style={{ color: accent }}>
          {icon}
        </span>
      )}
      <span className="flex flex-col gap-1 min-w-0">
        <span className="text-lg font-bold">{title}</span>
        {tags && tags.length > 0 && (
          <span className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full border border-card-border px-2.5 py-0.5 text-base text-muted"
              >
                {tag}
              </span>
            ))}
          </span>
        )}
        {description && (
          <span className="text-base text-muted">{description}</span>
        )}
      </span>
    </>
  );

  const className =
    "flex items-center gap-4 rounded-lg border border-card-border px-4 py-3 transition-colors hover:brightness-95 dark:hover:brightness-110";

  const style = {
    background: `linear-gradient(135deg, ${accent}08 0%, ${accent}18 100%)`,
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={className} style={style}>
      {content}
    </div>
  );
}
