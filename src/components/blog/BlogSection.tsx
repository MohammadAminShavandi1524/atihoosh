type BlogSectionProps = {
  title: string;
  paragraphs: string[];
};

export function BlogSection({ title, paragraphs }: BlogSectionProps) {
  return (
    <section className=" mb-16">
      <h2 className="text-foreground text-2xl font-bold tracking-tight md:text-3xl mb-6">
        {title}
      </h2>

      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-muted-foreground text-base leading-8 md:text-lg md:leading-9"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
