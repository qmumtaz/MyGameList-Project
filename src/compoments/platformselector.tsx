import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import UsePlatform, { Platform } from '../hooks/useplatforms';




interface Props{
    selectedPlatform : ( p : Platform) => void;
}


const Platformselector = ({selectedPlatform} : Props) => {
    const { platforms, isLoading, error } = UsePlatform();


    

  return (
    <Menu >
       
    <MenuButton as={Button} variant={"link"}>Choose Platform</MenuButton>
    <MenuList p={1} paddingLeft={1} >
    {platforms.map((platform) => (
          
          <MenuItem key={platform.id} onClick={() => selectedPlatform(platform)}> {platform.name}

            {/* <Image boxSize="25px" src={platforms.imageBackground} p={1 } /><span >{genre.name}</span> */}
          </MenuItem>
        ))}
      
    </MenuList>
  </Menu>
  )
}

export default Platformselector
