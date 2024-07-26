import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75p transition items-center gap-x-2 hidden md:flex">
        <Image src="/public/logo.svg" alt="logo" height={30} width={30} />
        <p
          className={cn(
            "text-large text-neutral-700 pb-1",
            headingFont.className
          )}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};
