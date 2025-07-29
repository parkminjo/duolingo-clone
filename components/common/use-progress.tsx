import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ROUTER_PATH } from "@/constants/router-path";
import { InfinityIcon } from "lucide-react";

interface Props {
  activeCourse: { title: string; imageSrc: string }; // TODO: DB 타입으로 변경
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Link href={ROUTER_PATH.COURSES}>
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href={ROUTER_PATH.SHOP}>
        <Button variant="ghost" className="text-orange-500">
          <Image src="/points.svg" alt="Points" width={22} height={22} />
          {points}
        </Button>
      </Link>
      <Link href={ROUTER_PATH.SHOP}>
        <Button variant="ghost" className="text-rose-500">
          <Image src="/heart.svg" alt="Hearts" width={22} height={22} />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};

export default UserProgress;
