import Image from "next/image";

type ServiceItemProps = {
  number: string;
  iconSrc: string;
  title: string;
  description: string;
  isLast?: boolean;
};

export function ServiceItem({
  number,
  iconSrc,
  title,
  description,
  isLast = false,
}: ServiceItemProps) {
  return (
    <li className="relative flex items-start gap-5 sm:gap-6 lg:gap-8">
      {!isLast ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 w-[10px] -translate-x-1/2 bg-[#0B1754] left-9 top-9 -bottom-[76px] sm:-bottom-[84px] lg:left-[43px] lg:top-[43px] lg:-bottom-[91px]"
        />
      ) : null}

      <div className="relative shrink-0">
        <span className="absolute z-20 flex h-8 w-8 items-center justify-center rounded-[5px] bg-[#0077BE] text-xs font-bold text-text-primary lg:h-10 lg:w-10 lg:text-sm -left-[10px] -top-[10px] lg:-left-[14px] lg:-top-[14px]">
          {number}
        </span>

        <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-[5px] bg-[#0B1754] lg:h-[86px] lg:w-[86px]">
          <Image
            src={iconSrc}
            alt=""
            width={34}
            height={34}
            className="h-7 w-7 lg:h-[34px] lg:w-[34px]"
          />
        </div>
      </div>

      <div className="min-w-0 flex-1 pt-1 sm:pt-2">
        <h3 className="text-xl font-semibold text-text-primary sm:text-2xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted sm:mt-3 sm:text-base">
          {description}
        </p>
      </div>
    </li>
  );
}
