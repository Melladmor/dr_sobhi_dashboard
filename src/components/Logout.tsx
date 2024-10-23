import { Button, useColorMode } from "@chakra-ui/react";

import { Icon as ChakraIcon, Text } from "@chakra-ui/react";
import { LogoutIcon } from "../assets/Icons";

const Logout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="py-6">
      <Button
        onClick={toggleColorMode}
        bg="none"
        _hover={{
          bg: "gray-950",
          opacity: 10,
        }}
        width="full"
        justifyContent="start"
        px="4px"
        py="4px"
        className={`gap-4 p-2 rounded-md  transition duration-[0.3s] ${
          colorMode === "dark"
            ? "hover:bg-opacity-10 hover:bg-gray-50"
            : "hover:bg-opacity-10 hover:bg-gray-950"
        }`}>
        <ChakraIcon as={LogoutIcon} width="22px" fill="none" height="22px" />
        <Text
          color="text.light"
          fontSize="13px"
          fontWeight="500"
          className="text-nowrap">
          LogOut
        </Text>
      </Button>
    </div>
  );
};

export default Logout;
