import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <small className="next-logo">Next app</small>
                </div>
                <div>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a className="ancor-link">About</a></Link>
                    <Link href="/contact/contact"><a className="ancor-link">Contact</a></Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;