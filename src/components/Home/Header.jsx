import { Box, Link, Image } from "@chakra-ui/react";
import lifehub_logo from "../../assets/lifehub_logo.svg";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  
  const menuItems = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "How it works",
      href: "/how"
    },
    {
      label: "About us",
      href: "/about"
    },
    {
      label: "Our team",
      href: "/team"
    },
    {
      label: "Contact us",
      href: "/contact"
    }
  ];
  
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      px={10}
      alignItems="center"
      bg="gray.700"
      w="100%"
      color="green.200"
      fontWeight="medium"
      borderBottom="2px solid #4A5568"
    >
      <Box>
        <Image
          src={lifehub_logo}
          alt="LifeHub Logo"
          height="100px"
          width="120px"
        />
      </Box>
      <HamburgerIcon color="green.200" display={["block", "none"]} /> 
      {menuItems.map((item) => (
        <Link key={item.label} href={item.href} display={["none", "block"]}>{item.label}</Link>
      ))}
    </Box>
  );
};

export default Header;
