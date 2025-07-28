import { ROUTER_PATH } from "@/constants/router-path";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

interface Props {
  className?: string;
}

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        `top-0 left-0 h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]`,
        className,
      )}
    >
      <Link href={ROUTER_PATH.LEARN}>
        <div className="flex items-center gap-x-3 pt-9 pb-7 pl-4">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItem
          label="learn"
          href={ROUTER_PATH.LEARN}
          iconSrc="/learn.svg"
        />
        <SidebarItem
          label="leaderboard"
          href={ROUTER_PATH.LEADERBOARD}
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem
          label="quests"
          href={ROUTER_PATH.QUESTS}
          iconSrc="/quests.svg"
        />
        <SidebarItem label="shop" href={ROUTER_PATH.SHOP} iconSrc="/shop.svg" />
      </div>
      <div>
        <ClerkLoading>
          {" "}
          <Loader className="text-muted-foreground h-5 w-5 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl={ROUTER_PATH.LANDING} />
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
