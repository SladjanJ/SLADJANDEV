import Image from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary-filled" | "secondary-outline";

type ButtonProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  variant?: ButtonVariant;
  iconSrc?: string;
  iconAlt?: string;
  download?: boolean | string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-btn text-text-primary hover:bg-[#0018cc] border border-transparent",
  "secondary-filled":
    "bg-secondary-btn text-navbar-footer hover:bg-transparent hover:text-text-primary hover:border-white/40 border border-transparent",
  "secondary-outline":
    "bg-transparent text-text-primary border border-text-primary hover:bg-white/10",
};

export function Button({
  variant = "primary",
  iconSrc,
  iconAlt = "",
  className = "",
  children,
  href,
  download,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {iconSrc ? (
        <Image src={iconSrc} alt={iconAlt} width={29} height={20} />
      ) : null}
      {children}
    </>
  );

  if (download) {
    return (
      <a className={classes} href={href} download={download} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {content}
    </Link>
  );
}
