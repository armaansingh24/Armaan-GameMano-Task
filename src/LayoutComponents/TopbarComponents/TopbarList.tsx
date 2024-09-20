import Link from "next/link";

// Define a type for the navigation items
interface NavItem {
  href: string;
  label: string;
  border?: boolean;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home", border: true },
  { href: "/product-store", label: "Product Store", border: true },
  { href: "/leaderboard", label: "Leaderboard" },
];

const TopbarList = () => {
  return (
    <ul className="flex gap-4 p-6 text-white text-base md:px-8 px-14 whitespace-nowrap">
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
