
import {Link} from "@nextui-org/link";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";


const Header = () => {
  return (
    <Navbar className="bg-black">
      <NavbarBrand>
        <a href="/" className="font-sans text-green-600">Hexu</a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4"  justify="center">
        <NavbarItem>
          <Link href="/home" className="text-green-600 font-sans">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className="text-green-600 font-sans">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects" className="text-green-600 font-sans">Projects</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" className="text-green-600 font-sans">Contact</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
