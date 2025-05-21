import { Link, NavLink } from "react-router";

export default function Navbar() {
	return (
		<nav>
			<section className="logo">
				<Link to="/homepage">
					<p>logo</p>
				</Link>
			</section>
			<section className="navLinks">
				<ul>
					<li>
						<NavLink to="/homepage" className="capitalized">
							home
						</NavLink>
					</li>
					<li>
						<NavLink to="/products" className="capitalized">
							produts
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" className="capitalized">
							about
						</NavLink>
					</li>
				</ul>
			</section>
		</nav>
	);
}
