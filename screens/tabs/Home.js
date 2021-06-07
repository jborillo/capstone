import React from 'react';
import { View, Text,TouchableWithoutFeedback, SafeAreaView,Keyboard } from 'react-native';
import CardListing from '../../components/CardListing';
import ImageCarousel from '../../components/ImageCarousel';
import GlobalStyles from '../../components/GlobalStyles'
import Card from '../../components/common/Card'
import * as data from '../../Data';
import Recommender from '../../components/Recommender';
const Home = ({navigation}) => {
    const keyboardDissmiss=()=>{
        Keyboard.dismiss();
    }
    return(
        <TouchableWithoutFeedback onPress={keyboardDissmiss}>
            <SafeAreaView style={[{flex:1, justifyContent:'center', backgroundColor:'#1F1F1F'}, GlobalStyles.droidSafeArea]}>
                <View style={{flex:1}} onStartShouldSetResponder={() => true} >
                    <CardListing footer={ <Recommender />} numColumns={2} header={()=>(<>
                    <Text style={{margin:10,color:'white' ,fontWeight:'bold',fontSize:20}}>Best Selling</Text><ImageCarousel /><Text style={{margin:10,color:'white' ,fontWeight:'bold',fontSize:20}}>Featured</Text></>)} renderItem={Card} data={data.productData}/>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default Home
