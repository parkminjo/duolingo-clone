import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost">
          <Image
            src="/us.svg"
            alt="English"
            height={32}
            width={40}
            className="mr-4 rounded-b-md"
          />
          English
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/de.svg"
            alt="German"
            height={32}
            width={40}
            className="mr-4 rounded-b-md"
          />
          German
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/fr.svg"
            alt="France"
            height={32}
            width={40}
            className="mr-4 rounded-b-md"
          />
          France
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/it.svg"
            alt="Italy"
            height={32}
            width={40}
            className="mr-4 rounded-b-md"
          />
          Italy
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/jp.svg"
            alt="Japan"
            height={32}
            width={40}
            className="mr-4 rounded-b-md"
          />
          Japan
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
