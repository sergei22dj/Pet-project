import Link from "next/link";
import * as React from "react";

interface Props {
  href: string;
  label: string;
}
const MenuItem: React.FC<Props> = ({ href, label }) => (
  <Link href={href} passHref>
    <a>{label}</a>
  </Link>
);
export { MenuItem };
