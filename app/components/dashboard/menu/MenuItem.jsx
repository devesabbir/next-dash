import Link from "next/link";

function MenuItem({ path, title }) {
  return <Link href={path}> {title} </Link>;
}

export default MenuItem;
