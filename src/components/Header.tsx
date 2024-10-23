import { Box } from "@chakra-ui/react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Box
      style={{
        boxShadow: "5px 3px 30px 0px rgba(0, 0, 0, 0.09)",
      }}
      className="w-full header px-[20px] py-[20px] h-[72px] flex items-center">
      Header
    </Box>
  );
};

export default Header;
