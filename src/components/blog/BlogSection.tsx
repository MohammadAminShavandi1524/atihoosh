type BlogSectionProps = {
  title: string;
  paragraphs: string[];
};

export function BlogSection({ title, paragraphs }: BlogSectionProps) {
  return (
    <section className="mb-10 md:mb-14 lg:mb-16">
      <h2 className="text-foreground mb-5 text-xl leading-9 font-medium tracking-tight sm:text-2xl md:mb-6 md:text-3xl">
        {title}
      </h2>

      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-muted-foreground text-justify text-base leading-8 sm:text-lg md:leading-9"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
