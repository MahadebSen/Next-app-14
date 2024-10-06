import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <div className="mt-5">
      <ul className="flex justify-start gap-5">
        <li>
          <Link href="/about/mission">Mission</Link>
        </li>
        <li>
          <Link href="/about/vision">Vision</Link>
        </li>
      </ul>
      <hr />

      {children}
    </div>
  );
}
