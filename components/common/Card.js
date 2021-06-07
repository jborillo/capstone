import React,{useState} from 'react'
import { Image, View, Text, Dimensions,TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartArrowDown, faTrash, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import StyledButton from './StyledButton';
import {CheckBox} from 'react-native-elements';
import { useNavigation,StackActions } from '@react-navigation/native';
const WIDTH = Dimensions.get('window').width;

/**
  product page stack navigator
  Product Card ID = represents product id
  When User taps the product Card, it will load the product page with the same product ID
  Cart Card with quantity Buttons
  Cart Card ID = represents product id
  When User taps the Cart Card, it will load the product page with the same product ID
  
  when data is available locally, use local data, else server data
  TODO: Cart orders notification
 */
const Quantity = (props) => {
  const [state, setState] = useState(1);
  
  const increment = () => setState(val => val + 1);
  //val = 2
  const decrement = () => setState(val => val<=1?val:val-1);
  const size = 30;
  return (
      <View style={{paddingLeft:0, padding:10,flexDirection:'row', alignItems:'center', }}>
          <Text>{state<=1}</Text>
          <StyledButton onPress={decrement} title={state===1?<FontAwesomeIcon icon={faTrash} color='white'/>:'-'} style={{width:size, height:size, borderRadius:5, backgroundColor:'#C92D2C'}} textStyle={{color:'white'}}/>
          <View style={{minWidth:size, height:size, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color:'white'}}>{state}</Text>
          </View>
          <StyledButton onPress={increment} title='+' style={{width:size, height:size, borderRadius:5, backgroundColor:'#C92D2C'}} textStyle={{color:'white'}}/>
      </View>
  )
}
const CartCard = (props) => {
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();
    return (
        <TouchableOpacity disabled={props.disabled} onPress={()=>navigation.push('ProductScreen')} style={{backgroundColor:'#39383C', flexDirection:'row', padding:4, borderRadius:20, margin:2, alignItems:'center'}}>
            <CheckBox checked={checked} onPress={() => setChecked(!checked)}/>

            <Image style={{width:WIDTH/4,height:WIDTH/4, borderRadius:20}} source={{uri:props.productThumbnail}}/>
            <View style={{flex:1, paddingLeft:10, justifyContent:'space-evenly'}}>
              
                <Text style={{fontWeight: 'bold', color:'white', flexWrap:'wrap', flex:1}}>{props.productName}</Text>
                <Text style={{color:'white'}}>{props.description}</Text>
                <Text style={{color:'gold'}}>₱{props.price}</Text>
                <Quantity/>
            </View>
        </TouchableOpacity>
    )
}

const ProductCard=(props)=> {
  const size = 30;
  const navigation = useNavigation();
  const data = {
    productName:props.productName,
    productThumbnail:props.productThumbnail,
    description:props.description,
    price:props.price
  };
  return (
    <TouchableOpacity onPress={()=>navigation.dispatch(StackActions.push('ProductScreen', data))} style={{backgroundColor:'#616265', flex: 1, margin: 5, borderRadius:20, paddingBottom: 10}}>
      <View style={{padding: 10}}>
        <Text style={{color:'white'}}>{props.productName}</Text>
      </View>
      <Image style={{ flex: 1, height: WIDTH / 2 }} source={{ uri: props.productThumbnail }} />
      <View style={{padding: 10, flexDirection: 'row', alignItems:"center"}}>
        <View style={{ flex: 1,}}>
          <Text style={{color:'white'}}>{props.description}</Text>
          <Text style={{color:'gold'}}>₱{props.price}</Text>
        </View>
        
        <StyledButton style={{width:size, height:size, borderRadius:5, backgroundColor:'#C92D2C'}} title={<FontAwesomeIcon icon={faCartArrowDown} color='white'/>}/>

      </View>
    </TouchableOpacity>
  )
}

const SmallCard=(props)=>{
  const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={()=>navigation.push("ProductScreen")}>
      <Text>
        SmallCard
      </Text>
    </TouchableOpacity>
  )
}


//use arrow functions for react native components
//use standard functions, and camel case for everything else.
const Card = (props) => {
  switch(props.mode) {
    case 1: return <SmallCard {...props}/>;
    case 2: return <CartCard {...props}/>;
    default: return <ProductCard {...props}/>;
  }
}

export default Card
