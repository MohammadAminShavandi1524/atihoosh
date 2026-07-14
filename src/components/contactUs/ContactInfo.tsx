"use client";

import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import { ContactItem } from "./contactItem";
import { useLocale, useTranslations } from "next-intl";
import { englishToPersianNumber } from "@/lib/utils";
import LoginBackground from "./LoginBackground";
import ParticlesBackground from "./Particles";

interface ContactInfoProps {}

const socials = [
  {
    icon: Instagram,
    href: "#",
  },
  {
    icon: Linkedin,
    href: "#",
  },
  {
    icon: X,
    href: "#",
  },
  {
    icon: Send,
    href: "#",
  },
];

const ContactInfo = ({}: ContactInfoProps) => {
  const t = useTranslations("ContactUs.ContactInfo");
  const locale = useLocale();

  return (
    <div className="border-border bg-secondary-bg relative flex w-full flex-col overflow-hidden rounded-2xl border p-8 md:p-10">
      {/* Background */}
      <LoginBackground />
      <ParticlesBackground />

      {/* content */}

      <div className="relative z-10">
        <span className="text-primary text-sm font-medium tracking-[0.15em] uppercase">
          {t("badge")}
        </span>

        <h2 className="mt-4 text-3xl font-bold">{t("title")}</h2>

        <div className="mt-10 space-y-6">
          <ContactItem label={t("addressLabel")} Logo={MapPin}>
            {t("addressValue")}
          </ContactItem>

          <ContactItem Logo={Mail} label={t("emailLabel")}>
            <Link
              href="mailto:Atihooshbonyanco@gmail.com"
              className="hover:text-primary transition-colors"
            >
              Atihooshbonyanco@gmail.com
            </Link>
          </ContactItem>

          <ContactItem Logo={Phone} label={t("phoneLabel")}>
            <Link
              href="tel:+982100000000"
              dir="ltr"
              className="hover:text-primary inline-block transition-colors"
            >
              {locale === "en" ? (
                <>{t("phoneNumber")}</>
              ) : (
                <>{englishToPersianNumber(t("phoneNumber"))}</>
              )}
            </Link>
          </ContactItem>
        </div>

        {/* separator */}
        <div className="border-foreground/8 my-8 border-t" />

        <div className="mb-6">
          <h3 className="text-2xl font-semibold">{t("followTitle")}</h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map(({ icon: Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="border-muted-foreground hover:border-primary hover:text-primary text-primary-hover flex size-12 items-center justify-center rounded-xl border transition-colors"
              >
                <Icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-primary/20 mt-auto h-72 overflow-hidden rounded-2xl border">
  <iframe
    src="https://www.google.com/maps?q=35.6892,51.3890&z=15&output=embed"
    width="100%"
    height="100%"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    className="border-0"
  />
</div>



      </div>
    </div>
  );
};

export default ContactInfo;
