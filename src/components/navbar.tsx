import Link from "next/link";

type NavbarProps = {
	currentPage: String
}

const Navbar = ({currentPage}:NavbarProps) => {
	return (
		<header className="flex p-4 justify-between w-full bg-gray-100">
			<div className="text-lg md:text-2xl font-extrabold text-gray-700 w-full md:w-1/2">
				<Link href="/">
					<a><span className="text-purple-300">Stonk </span> Dashboard</a>
				</Link>
			</div>
			<div className="flex flex-row justify-end md:w-1/2 w-full">
				<Link href="/stocks">
					<a className={`text-lg md:text-2xl font-extrabold ${currentPage == "stocks" ? "text-gray-400" : "text-gray-700"} pr-4`}>Stocks</a>
				</Link>
				<Link href="/watchlists">
					<a className={`text-lg md:text-2xl font-extrabold ${currentPage == "watchlists" ? "text-gray-400" : "text-gray-700"} pr-4`}>Watchlists</a>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;