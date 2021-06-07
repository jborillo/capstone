import React, {useState, useEffect} from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, TextInput} from 'react-native'
import GlobalStyles from '../../components/GlobalStyles'
import CardListing from '../../components/CardListing'
import * as data from '../../Data'
import Card from '../../components/common/Card'
const SearchBar=(props)=> {
    return (
        <View style={{borderRadius:20, backgroundColor: '#C9C2C0'}}>
            <TextInput style={{color:'#333333', margin:5, paddingHorizontal:10}} value={props.value} onChangeText={(val)=>props.search(val)} onBlur={props.onBlur} blurOnSubmit={true} placeholder="Search" autoFocus={true} />
        </View>
    )
}

const Search = ({navigation}) => {
    const [state, setState] = useState({
        searchQuery: "",
        active: true,
    })
    useEffect( () => navigation.addListener('tabPress', () => setActive(true)), [] );
    useEffect( () => navigation.addListener('blur', () => setActive(false)), [] );
    const setSearchQuery=(val)=>{
        setState({...state, searchQuery: val});
    }
    const setActive=(val)=>{
        setState({...state, active: val});
    }
    const setData=(val)=>{
        setState({...state});
        data = val;
    }
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <SafeAreaView style={[ GlobalStyles.droidSafeArea]}>
                <View style={{flex:1, justifyContent:'center', backgroundColor:'#1F1F1F'}}>
                    <CardListing renderItem={Card} data={data.productData}/>
                </View>
                {state.active&&(
                <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#39383C', padding:2}}>
                    <View style={{flex: 1,margin:5, }}>
                        <SearchBar value={state.searchQuery} onBlur={() => setActive(false)} search={setSearchQuery}/>
                    </View>
                    {/*<Button style={{flex:1, height:'100%', width:'100%'}} onPress={()=>setActive(true)} title={state?"Search":"Search"} />*/}
                </View>)}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default Search;

