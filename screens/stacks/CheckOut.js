import React,{useState} from "react";
import { RadioButton } from 'react-native-paper';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import * as data from "../../Data";
import { useNavigation, StackActions } from "@react-navigation/native";
import GlobalStyles from "../../components/GlobalStyles";
import Card from "../../components/common/Card";
import StyledButton from "../../components/common/StyledButton";
import StyledInput from "../../components/common/StyledInput";
const width = Dimensions.get('window').width;
const height = width * 0.6;
const ConfirmOrderButtons = (props) => {
  const navigation = useNavigation();
  let data = {deliveryMethod:props.deliveryMethod, paymentMethod:props.paymentMethod, specialRequest:props.specialRequest};
  return(
    <View style={{flexDirection:'row', alignSelf:'stretch', backgroundColor:'#333333', justifyContent:'center' }}>
      <StyledButton title={'Place Order'} textStyle={styles.text} style={styles.button} onPress={() => navigation.dispatch(StackActions.replace('OrderInfoScreen', data))} />
    </View>
  )
}
//wala nang static?
//wala na
//pero hdi ko na naririnig boses  mo
//mahina boses mo
//oo okay na

const CheckOut = ({route}) => {
  const navigation = useNavigation();
  const [deliveryMethod, setDeliveryMethod] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [request, setRequest] = useState ('');
  return (
    <SafeAreaView style={[GlobalStyles.droidSafeArea,{ flex: 1, backgroundColor: "#1F1F1F" }]}>
      <ScrollView>
        <View style={styles.view}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            {data.userInfo[0].defaultName}
          </Text>
          <Text style={{ color: "white", fontSize: 15 }}>
            Address: {data.userInfo[0].defaultAddress}
          </Text>
        </View>
        <View style={{ height: 256 }}>
          <Image
              source={{ uri: route.params.productThumbnail }}
              style={{borderRadius:10, margin:10, width:width-20, height }}
          /> 
          {/*<Card onPress={()=>console.log(props)} />*/}        
        </View>
        <View style={styles.view}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Select Delivery Method
          </Text>
          <RadioButton.Group onValueChange={deliveryMethod => setDeliveryMethod(deliveryMethod)} value={deliveryMethod}>
            <RadioButton.Item labelStyle={{color:'white'}} label="Delivery" value={0} />
            <RadioButton.Item labelStyle={{color:'white'}} label="Pickup" value={1} />
          </RadioButton.Group>
        </View>
        <View style={styles.view}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            Select Payment Method
          </Text>

          <RadioButton.Group onValueChange={paymentMethod => setPaymentMethod(paymentMethod)} value={paymentMethod}>
            <RadioButton.Item labelStyle={{color:'white'}} label="Cash On Delivery/Pickup" value={0} />
            <RadioButton.Item labelStyle={{color:'white'}} label="G-cash" value={1} />
          </RadioButton.Group>
        </View>
        
        <View style={styles.view}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            Special Request
          </Text>

          <StyledInput 
            multiline
            numberOfLines={4}
            maxLength = {200}
            onChangeText={text => setRequest(text)}
            value={request}
            placeholder="Enter your special request here"
          />
        </View>
      </ScrollView>
      <ConfirmOrderButtons specialRequest={request} deliveryMethod={deliveryMethod} paymentMethod={paymentMethod}/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  view: {
    borderRadius: 20,
    backgroundColor: "#333333",
    margin: 20,
    padding: 10,
    marginTop: 30,
  },
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
  },
});
export default CheckOut;
