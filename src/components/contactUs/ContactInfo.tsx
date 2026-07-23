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
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LightParticles from "./LightParticles";

interface ContactInfoProps {}

const socials = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/atihooshbonyan?igsh=dHdvbHdkcXNiZGRn",
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
    href: "telegram.com/atihooshbonyanco",
  },
];

const ContactInfo = ({}: ContactInfoProps) => {
  const t = useTranslations("ContactUs.ContactInfo");
  const locale = useLocale();

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="border-border bg-secondary-bg xss:p-6 relative w-full overflow-hidden rounded-2xl border p-5 sm:p-8 md:p-10">
      {/* Background */}
      <LoginBackground />
      {theme === "dark" ? <ParticlesBackground /> : <LightParticles />}

      <div className="relative z-10">
        {/* badge */}
        <span className="text-primary text-xs font-medium tracking-[0.15em] uppercase sm:text-sm">
          {t("badge")}
        </span>

        {/* title */}
        <h2 className="xss:text-[30px] mt-3 text-[28px] leading-[1.25] font-bold sm:mt-4 sm:text-[32px] md:text-3xl">
          {t("title")}
        </h2>

        {/* infos */}
        <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
          <ContactItem label={t("addressLabel")} Logo={MapPin}>
            {t("addressValue")}
          </ContactItem>

          <ContactItem Logo={Mail} label={t("emailLabel")}>
            <Link
              href="mailto:info@atihooshbonyan.com"
              className="hover:text-primary break-all transition-colors"
            >
              info@atihooshbonyan.com
            </Link>
          </ContactItem>

          <ContactItem Logo={Phone} label={t("phoneLabel")}>
            <Link
              href="tel:+989126956223"
              dir="ltr"
              className="hover:text-primary inline-block transition-colors"
            >
              {locale === "en"
                ? "+98 912 695 6223"
                : englishToPersianNumber("+98 912 695 6223")}
            </Link>

            <Link
              href="tel:+982144624084"
              dir="ltr"
              className="hover:text-primary inline-block transition-colors"
            >
              {locale === "en"
                ? "+98 21 4462 4084"
                : englishToPersianNumber("+98 21 4462 4084")}
            </Link>
          </ContactItem>
        </div>

        {/* separator */}
        <div className="border-foreground/8 my-6 border-t sm:my-8" />

        {/* socials */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold sm:text-2xl">
            {t("followTitle")}
          </h3>

          <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
            {socials.map(({ icon: Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="border-muted-foreground hover:border-primary hover:text-primary text-primary-hover flex size-10 items-center justify-center rounded-xl border transition-colors sm:size-11 xl:size-12"
              >
                <Icon className="size-4 sm:size-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* map */}
        <div className="border-primary/20 mt-auto h-56 overflow-hidden rounded-2xl border sm:h-64 md:h-72">
          <iframe
            src="https://www.google.com/maps?q=35.755164,51.333777&z=15&output=embed"
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
