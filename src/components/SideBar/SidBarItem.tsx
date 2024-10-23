import { Icon as ChakraIcon, Text, useColorMode } from "@chakra-ui/react";
import { RoutesI } from "../../router/route";
import { NavLink } from "react-router-dom";

type Props = RoutesI;

const SidBarItem = ({ id, Icon, title, path }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <div className="py-6 border-b border-solid border-[#C0C0C0]">
      <NavLink
        to={`/${path}`}
        className={`flex items-center gap-4 p-2 rounded-md  transition duration-[0.3s] ${
          colorMode === "dark"
            ? "hover:bg-opacity-10 hover:bg-gray-50"
            : "hover:bg-opacity-10 hover:bg-gray-950"
        }`}>
        <ChakraIcon as={Icon} width="22px" fill="none" height="22px" />
        <Text
          fontSize="13px"
          fontWeight="500"
          className="text-nowrap capitalize">
          {title}
        </Text>
      </NavLink>
    </div>
  );
};

export default SidBarItem;
