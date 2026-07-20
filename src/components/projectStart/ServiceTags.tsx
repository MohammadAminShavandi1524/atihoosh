"use client";

interface ServiceTagsProps {
  services: string[];
}

const ServiceTags = ({ services }: ServiceTagsProps) => {
  if (!services.length) {
    return <span className="text-muted-foreground text-sm">-</span>;
  }

  if (services.length === 1) {
    return (
      <span className="text-muted-foreground text-sm font-medium">{services[0]}</span>
    );
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {services.map((service) => (
        <span
          key={service}
          className="border-primary/20 bg-primary/5 text-primary rounded-md border px-2 py-0.5 text-xs font-medium"
        >
          {service}
        </span>
      ))}
    </div>
  );
};

export default ServiceTags;
