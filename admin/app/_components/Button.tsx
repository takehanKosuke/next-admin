import Link from "next/link";

export const SuccessButton = ({ text, link }) => {
  return (
    <Link href={link}>
      <button className="bg-green-600">{text}</button>
    </Link>
  );
};
