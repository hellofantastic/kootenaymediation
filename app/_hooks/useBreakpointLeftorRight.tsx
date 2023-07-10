import { useBreakpointValue } from "@chakra-ui/react";

function useBreakpointLeftorRight() {
  const isLeftOrRight = useBreakpointValue({ base: "left", md: "right" }, { ssr: false });
  return isLeftOrRight;
}

export default useBreakpointLeftorRight;
