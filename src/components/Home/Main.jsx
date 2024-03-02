import { Box, Heading, Image, Text } from "@chakra-ui/react";
import first from "../../assets/screenshot1.jpg";
import second from "../../assets/screenshot2.jpg";
import third from "../../assets/screenshot3.jpg";

const Main = () => {
  return (
    <Box
      bg="gray.700"
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      flexDirection={["column", "column", "row"]}
      py={4}
    >
      <Box mb={2} w={["90%", "48%"]}>
        <Heading
          as="h1"
          fontStyle="italic"
          fontSize="40px"
          color="green.200"
          mt={10}
          fontFamily="Poppins"
          fontWeight="800"
          textTransform="uppercase"
        >
          <Text as="span" color="white">
            LifeHub
          </Text>{" "}
          - Where Wellness Unites
        </Heading>
        <Text w="90%" p={2} size="lg" color="white">
          Our app provides a space for PASHA life insurance policyholders to
          engage in physical activity, earn coins, and exchange them for rewards
          offered by our partners, promoting a healthier lifestyle and
          incentivizing positive habits.
        </Text>
        <Heading
          as="h4"
          fontStyle="italic"
          textDecoration="underline"
          size="xl"
          mt={8}
        >
          #WellnessWins
        </Heading>
        <Heading
          as="h4"
          fontStyle="italic"
          textDecoration="underline"
          size="xl"
        >
          #RewardingHealth
        </Heading>
      </Box>
      <Box display="flex" flexDirection={["column", "row"]} overflow="auto" gap={6}>
        <Image
          src={first}
          rounded="lg"
          alt="screenshot from app"
          width={["full","200px"]}
          height="420px"
          mt={["0", "100px"]}
        />
        <Image
          src={second}
          rounded="lg"
          alt="screenshot from app"
          width="200px"
          height="420px"
          mt={["0", "50px"]}
        />
        <Image
          src={third}
          rounded="lg"
          alt="screenshot from app"
          width="200px"
          height="420px"
        />
      </Box>
    </Box>
  );
};

export default Main;
