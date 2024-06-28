
import {Link} from "@nextui-org/link";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";


const Header = () => {
  return (
    <Navbar className="bg-darkGreen">
      <NavbarBrand>
        <a href="/" className="text-4xl font-mont text-white">Tomasz</a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4"  justify="center">
        <NavbarItem>
          <Link href="/home" className="text-4xl text-green font-mont">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className="text-4xl text-green font-mont">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects" className="text-4xl text-green font-mont">Projects</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects" className="text-4xl text-green font-mont">Blog</Link>
        </NavbarItem>
        
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem>
          <Link href="/contact" className="text-4xl text-white font-mont">Contact</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
