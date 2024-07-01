import { HStack , Image , Text} from "@chakra-ui/react"
import logo from "../assets/inpixio-removebg-image.png"
import ColorModeSwitch from "./colorModeSwitch";

const Navbar = () =>  {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding="10px">
        <Image src = {logo} boxSize = "65px" />
        <ColorModeSwitch />
      </HStack>
    </div>
  )
}

export default Navbar;
