import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'



const GameCardComponet = ({}) => {
  return (
    <Card w={"xl"} overflow={'hidden'} display={"flow" }> 
        <Skeleton height={"200px"}/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardComponet
