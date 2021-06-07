import React,{useState} from 'react';
import {View, Switch, ScrollView, FlatList, TouchableWithoutFeedback, Text, SafeAreaView, Image, StyleSheet,TouchableOpacity, Keyboard} from 'react-native';
import Card from '../../components/common/Card';
import StyledButton from '../../components/common/StyledButton';
import GlobalStyles from '../../components/GlobalStyles'
import { Rating} from 'react-native-elements';
import ImageCarousel from '../../components/ImageCarousel';
import * as data from '../../Data';
import { useNavigation } from '@react-navigation/native';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const ProductButtons = (props) => {
    const navigation = useNavigation();
    return(
            <View style={{flexDirection:'row', alignSelf:'stretch', backgroundColor:'#333333', justifyContent:'center' }}>
                <StyledButton title="Buy Now" textStyle={styles.text} style={styles.button} onPress={()=>navigation.push('CheckOutScreen', props.route.params)} />
                <StyledButton title ="Add to Cart" textStyle={styles.text} style={styles.button} />
                <StyledButton textStyle={styles.text} style={styles.button} title={<FontAwesomeIcon icon={faArrowLeft} style={{color:'white'}} onPress={()=>navigation.goBack()}/>}/>
            </View>
    )
}
 //wait
const definedPadding = 10;
const ProductPage = (props) => {
    return (
        <View style={{flex:1}} onStartShouldSetResponder={() => true}>
            <ScrollView style={{flex:1}} >
                <ProductTop {...props}/>
                <ProductReviewSection/>
            </ScrollView>
            <ProductButtons {...props}/>
        </View>
    )
}

const Filter=()=> {
    const [isEnabled, setIsEnabled] = useState({
        relevant: true,
        sales: false,
    });
    const toggleSwitch = () => {
         if(isEnabled.relevant){
            isEnabled.sales=false;
         } else if(isEnabled.sales){
            isEnabled.relevant=false;
            isEnabled.sales=true
         }
    };
    //toggle switch:
    //relevant  0 
    //high to low ratings 0
    //low to high ratings 0
    //high to low price 0
    //low to high price 1
    //sales 0
    
    return (
        <View>
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        </View>
    )
}


const SearchList = (props) => {
    return (
        <View style={{ flex:1}} onStartShouldSetResponder={() => true} /*style={{flexWrap:"wrap", flexDirection:"row", justifyContent:"space-between"}}*/>
            <FlatList
                ListHeaderComponent={props.header}
                numColumns={2}
                keyExtractor={(item, index)=>index.toString()}
                data={props.data} 
                renderItem={({item})=>(
                    <Card
                        description={item.description}
                        productName={item.productName}
                        price={item.price}
                        productThumbnail={item.productThumbnail}
                    />
                )} 
            />
        </View>
    )
}

const Product = (props) => {
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <SafeAreaView style={[ GlobalStyles.droidSafeArea]}>
                <View style={{backgroundColor:'#C92D2C', }}>
                    <Text style={{color:'white', fontSize:20, fontWeight:'bold', padding:10}}>
                        Product
                    </Text>
                </View>
                <View style={{flex:1, backgroundColor:'#1F1F1F'}}>
                    <ProductPage {...props}/>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>    
    )
}

const ProductComment = (props) => {
    return (
        <View style={{flexDirection:'row', marginHorizontal:5}}>
            <View style={{flex:1, margin:2, padding:2, alignItems:'center', backgroundColor:'#333333',borderRadius:5 }}>
                <Image style={{width:50, height:50, borderRadius:25}} source={{uri:props.profilePicture}}/>
                <Text style={{color:'white'}}>
                    {props.name}
                </Text>
                <Rating readonly tintColor='#616265' fractions={1} startingValue={props.rating} imageSize={10}/>
            </View>
            <View style={{flex:4, margin:2, backgroundColor:'#616265', padding:5, borderRadius:5}}>
                <Text style={{color:'white'}}>
                    {props.comment}
                </Text>
            </View>
        </View>
    )
}

const ProductReviewSection = (props) => {
    return (
        <View>
            {data.comments.map((val, index) => <ProductComment key={index.toString()} {...val}/>)}
        </View>
        
    )
}

const ProductTop = (props) => {
    return (
        <View style={{ flex: 1}}>
            <View style={{ padding: 12 }}>
                <Text style={{ fontSize: 22, color: 'white' }}>{props.route.params.productName}</Text>
            </View>
            <View>
                <ImageCarousel image={props.route.params.productThumbnail}/>
            </View>
            <View style={{backgroundColor:'#616265', margin:5, padding:10, borderRadius:10}}>
                <View style={[styles.container,{marginTop:0}]}>
                    <Text style={{ color: 'gold', fontSize: 32, fontWeight: 'bold' }}>₱{props.route.params.price ? props.route.params.price : '5000'}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={{ color: 'white' }}>Quantity: {props.quantity ? props.quantity : '2'}</Text>
                    <Text style={{ color: 'white' }}>Stocks Left: {props.stocks ? props.stocks : '2'}</Text>
                </View>
                <View style={[ styles.container, { flexDirection: 'row', alignItems:'center'}]}>
                    <Text style={{ color: 'gold' }}>
                        <Text style={{ fontSize: 16 }}>{props.rating ? props.rating : 4.75}/</Text>
                        <Text>5</Text>
                    </Text>
                    <Rating readonly tintColor='#616265' fractions={1} startingValue={props.rating ? props.rating : 4.75} imageSize={15} style={{paddingLeft:5}} />
                </View>

            </View>
        </View>
    )
}

export default Product
const styles = StyleSheet.create({
   
    button:{
            borderRadius:10,
            backgroundColor:'#C92D2C',
            padding:definedPadding,
            margin:definedPadding
                     
        
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:15
    }
});