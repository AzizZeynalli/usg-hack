import { Box, Heading, Image, Text } from "@chakra-ui/react";
import pashalife_logo from "../../assets/pasha_life.svg";
import landing from "../../assets/landing.jpeg"


const Footer = () => {
    return (
        <Box>
            <Heading as="h1" size="lg" textAlign="center" p={4} bg="gray.700" color="green.200" fontFamily="">
                New product by PASHA Life
                </Heading>
            <Box>
                <Image src={pashalife_logo} alt="LifeHub Logo" width={200} />
            </Box>
            <Text>sapak</Text>
            <Box>
                
            </Box>
            <Image rounded="full" width={500} height={500} src={landing} />
        </Box>
    );
}

export default Footer;
