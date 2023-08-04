import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({href, children}: Props) {
  const LinkCmp = href.startsWith("http") ? "a" : Link;

  return (
    <li>
      <LinkCmp
        className="hover:scale-105 hover:shadow-xl border w-44 rounded-md shadow-lg px-4 py-2 inline-flex gap-4 items-center h-full"
        href={href}
      >
        <span>{children}</span>
        <ArrowRight className="text-2xl flex-shrink-0" />
      </LinkCmp>
    </li>
  );
}
