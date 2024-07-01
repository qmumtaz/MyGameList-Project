import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props{
    score : number
}

const CriticScore = ({score} : Props) => {
let colors = (score > 75 ) ? "green"  : "yellow" && (score < 50) ?  "red" : "yellow";

  return (
    <Badge colorScheme={colors} fontSize={13} p={1} borderRadius={4}>
        {score}
    </Badge>
  )
}

export default CriticScore
