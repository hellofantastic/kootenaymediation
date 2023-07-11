"use client";
import { useBreakpointValue } from "@chakra-ui/react";

function useBreakpointLeftorRight() {
  const isLeftOrRight = useBreakpointValue({ base: "flex-start", xs: "flext-start", sm: "flex-start", md: "flex-end" }, { ssr: false });
  console.log(isLeftOrRight);
  return isLeftOrRight;
}

export default useBreakpointLeftorRight;
