import { Box, Link, Image } from "@chakra-ui/react";
import lifehub_logo from "../../assets/lifehub_logo.png";

const Header = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        bg="gray.700"
        w="100%"
        p={4}
        color="green.200"
        fontWeight="bolder"
      >
        <Box>
          <Image src={lifehub_logo} alt="LifeHub Logo" width={140} />
        </Box>
        <Link href="/">Home</Link>
        <Link href="/how">How it works</Link>
        <Link href="/about">About us</Link>
        <Link href="/team">Our team</Link>
        <Link href="/contact">Contact us</Link>
      </Box>
    </div>
  );
};

export default Header;
