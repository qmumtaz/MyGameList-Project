import { Card , CardBody, Heading, Image, HStack } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { Game } from '../hooks/usegames';
import CriticScore from './CriticScore';
import PlatformIcons from './platformicon';
import GetCroppedImage from '../services/image-url';
import apiClient from '../services/api-client';


 interface Props {
    game : Game
}



const Gamecard = ({game }: Props) => {
  return (
    <Card borderRadius={5} overflow={'hidden'} display={"flow" } w={"xl"} > 
        <Image src= {game.background_image}  boxSize='400px' objectFit='cover' />
        <CardBody>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
            <HStack display={"flex"} justifyContent= {"space-between"}>
            <PlatformIcons platforms={game.parent_platforms.map(x => x.platform)} />
            <CriticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>

    
  )
}

export default Gamecard
