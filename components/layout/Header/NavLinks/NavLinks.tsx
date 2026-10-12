export interface NavItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Platform', href: '#platform' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: 'https://docs.github.com' }, // أو أي رابط توثيق
];

import Link from 'next/link';



export default function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-6  ">
      {NAV_LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-neutral-400 hover:text-[#333333] text-sm font-medium transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}