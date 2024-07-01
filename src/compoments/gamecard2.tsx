import { Card , CardBody, Heading, Image, HStack } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { Games } from '../hooks/usegenregames';
import CriticScore from './CriticScore';
import PlatformIcons from './platformicon';
import GetCroppedImage from '../services/image-url';
import apiClient from '../services/api-client';


 interface Props {
    games : Games,
    genreId: number

}



const Gamecard2 = ({games }: Props) => {
  return (
    <Card borderRadius={5} overflow={'hidden'} display={"flow" } w={"xl"} > 
        <Image src= {games.background_image}  boxSize='400px' objectFit='cover' />
        <CardBody>
            <Heading fontSize={"2xl"}>{games.name}</Heading>
            <HStack display={"flex"} justifyContent= {"space-between"}>
            <PlatformIcons platforms={games.parent_platforms.map(x => x.platform)} />
            <CriticScore score={games.metacritic} />
            </HStack>
        </CardBody>
    </Card>

    
  )
}

export default Gamecard2
