"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Image from "next/image";

interface Props {
  label: string;
  iconSrc: string;
  href: string;
}

const SidebarItem = ({ label, iconSrc, href }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Button
      variant={isActive ? "sidebarOutline" : "sidebar"}
      className="h-[52px] justify-start"
    >
      <Link href={href} className="flex items-center gap-4">
        <Image src={iconSrc} alt={label} width={24} height={24} />
        {label}
      </Link>
    </Button>
  );
};

export default SidebarItem;
