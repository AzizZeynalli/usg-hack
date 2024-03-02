import { Box, Heading, Image, Text } from "@chakra-ui/react";
import pashalife_logo from "../../assets/pasha_life.svg";

const Footer = () => {
    return (
        <Box p={4} display="flex" flexDirection="column" gap="5px" justifyContent="center" alignItems="center" w="full">
            <Box display="flex" alignItems="center">
                <Heading as="h5" size="md" p={4} color="gray.600" fontFamily="Poppins" fontWeight="400">
                    Product of 
                </Heading>
                <Box>
                    <Image src={pashalife_logo} alt="LifeHub Logo" width={120} />
                </Box>
            </Box>
            <Text color="gray.600" mt={2} fontWeight="400" fontFamily="Lato">&copy; All rights reserved</Text>
        </Box>
    );
}

export default Footer;
