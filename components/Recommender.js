import React from 'react'
import { View, Text } from 'react-native'
import Card from './common/Card';
import Listing from './Listing';
import * as data from '../Data';
const Recommender = () => {
  return (
    <>
        <Text style={{margin:10, color:'white' ,fontWeight:'bold',fontSize:20}}>Just For You</Text>
        <Listing renderItem={Card }  data={data.productData}/>
    </>
    
  )
}

export default Recommender
