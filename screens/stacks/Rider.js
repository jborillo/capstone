import React from 'react'
import { View, Text, Keyboard, SafeAreaView, Image, TouchableWithoutFeedback } from 'react-native'
import * as data from '../../Data'
import GlobalStyles from '../../components/GlobalStyles'
import CardListing from '../../components/CardListing'
import StyledButton from '../../components/common/StyledButton'
const RiderProductCard = (props) =>{
  return (
    <View style={{margin:5, padding:10, flexDirection:'row', alignItems:'center', borderRadius:10, backgroundColor:'#333333'}}>
      <Image style={{width:100,height:100, borderRadius:5}} source={{uri:props.productThumbnail}}/>
      <View style={{flex:1,margin:5, marginLeft:10}}>
        <Text style={{color:'white'}}>Product Name: {props.productName}</Text>
        <Text style={{color:'white'}}>Address: {props.customerAddress}</Text>
        <Text style={{color:'white'}}>To pay: {props.productPay?'₱'+props.productPay:'Paid'}</Text>
        <View style={{flex:1,margin:5, marginLeft:0}}>
          <Text style={{color:'white'}}>Set Delivery Status:</Text>
          <View style={{flexDirection:'row'}}>
            <StyledButton textStyle={{color:'white'}} style={{margin:5, padding:5, backgroundColor:'red', borderRadius:5}} title='Failed'/>
            <StyledButton textStyle={{color:'white'}} style={{margin:5, padding:5, backgroundColor:'green', borderRadius:5}} title='Delivered'/>
          </View>
        </View>
      </View>
    </View>
  )
}

const Rider = () => {
  const keyboardDissmiss = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardDissmiss}>
      <SafeAreaView style={[{ flex: 1 }, GlobalStyles.droidSafeArea]}>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#1F1F1F",
          }}
          onStartShouldSetResponder={() => true}
        >
          
          <CardListing renderItem={(props)=>{
            return RiderProductCard(props)
          }} data={data.riderDeliver} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Rider
