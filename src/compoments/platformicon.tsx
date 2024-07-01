import {FaWindows, FaPlaystation , FaXbox , FaApple, FaLinux, FaAndroid} from "react-icons/fa"
import {MdPhone } from "react-icons/md"
import {SiNintendo } from "react-icons/si"
import {BsGlobe } from "react-icons/bs"

import { Platform  } from '../hooks/usegames'
import { HStack , Icon } from '@chakra-ui/react';
import { IconType } from "react-icons/lib"

interface Props{
    platforms : Platform[]
}

const PlatformIcons = ({platforms} : Props ) => {

    const iconMap : {[key:string] : IconType} = {
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        nintendo :SiNintendo,
        linux : FaLinux,
        mac : FaApple,
        andriod : FaAndroid,
        ios : MdPhone,
        web:BsGlobe
    };

  return (
    <>
    <HStack marginY={1}>
        {platforms.map( (platform) => 
        <Icon key={platform} as = {iconMap[platform.slug]}  color="gray.800" />
        )}
        PlatformIconList
    </HStack>
    </>
  )
}

export default PlatformIcons
