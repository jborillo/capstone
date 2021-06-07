import React, { useState } from "react";
import {useNavigation, StackActions} from '@react-navigation/native'
import { View, Text,TouchableWithoutFeedback,SafeAreaView,FlatList,StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import GlobalStyles from "../../components/GlobalStyles";
import Card from "../../components/common/Card";
import * as data from "../../Data";
import CardListing from '../../components/CardListing'
import StyledButton from '../../components/common/StyledButton'

const CheckOutButton = (props) => {
  const navigation = useNavigation();
  let data = {deliveryMethod:props.deliveryMethod, paymentMethod:props.paymentMethod, };
  return(
    <View style={{flexDirection:'row', alignSelf:'stretch', backgroundColor:'#333333', justifyContent:'center' }}>
      <StyledButton title={'Place Order'} textStyle={styles.text} style={styles.button} onPress={() => navigation.dispatch(StackActions.push('CheckOutScreen', data))} />
    </View>
  )
}

const Cart = () => {
  const keyboardDissmiss = () => {
    Keyboard.dismiss();
  };
  //#C92D2C
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
            props.mode = 2
            props.disabled = true;
            return Card(props)
          }} data={data.productData} />
        </View>
        <CheckOutButton/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
//<Text>{state<=1}</Text>


export default Cart;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: "#C92D2C",
    padding: 10,
    margin: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  }
});