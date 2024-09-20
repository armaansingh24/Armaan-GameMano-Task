import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  border?: boolean;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home", border: true },
  { href: "/product-store", label: "Product Store", border: true },
  { href: "/leaderboard", label: "Leaderboard", border: false },
];

const TopbarList = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4 p-6 text-white text-base md:px-8 px-14 whitespace-nowrap">
      {pathname !== "/" && (
        <div
          className={`transition-all duration-500 ease-in-out  text-2xl text-[#DAB785] opacity-100 md:text-4xl`}
        >
          GQ
        </div>
      )}
      {navItems.map(({ href, label, border }, index) => (
        <Link key={index} href={href}>
          <li
            className={`${
              border ? "border-r-[1px] border-[#5B5A57] pr-4" : ""
            } py-1 hover:text-[#DAB785] cursor-pointer transition text-sm md:text-base`}
          >
            {label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default TopbarList;
