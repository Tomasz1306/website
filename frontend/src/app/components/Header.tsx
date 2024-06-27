import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-retroBrown p-5 text-white text-center">
      <div className="text-2xl font-retro">Moje Portfolio</div>
      <nav>
        <ul className="flex justify-center space-x-6">
          <li><Link href="/home" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">O mnie</Link></li>
          <li><Link href="/projects" className="hover:underline">Projekty</Link></li>
          <li><Link href="/contact" className="hover:underline">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
