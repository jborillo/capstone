import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import StyledInput from '../../components/common/StyledInput';
import StyledButton from '../../components/common/StyledButton';
import {useNavigation} from '@react-navigation/native'

const Register = () => {
    const navigation = useNavigation();  
    return (
        <View style={{flex:1,backgroundColor:'#333333',justifyContent:'center', alignItems:'center'}}>
            <View style={{backgroundColor:'#616265', width:'70%', padding:30, borderRadius:20}}>
            <Image style={{alignSelf:'center',height:100, width:150}} source={{uri:"https://scontent.fcrk2-1.fna.fbcdn.net/v/t1.15752-9/176049861_931850044303454_2954272676772229190_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=bQjPRvzGbxYAX_ndYVq&_nc_ht=scontent.fcrk2-1.fna&oh=6b1ad674a095026548c34bcb6f819690&oe=60A70220"}}/>
                <View style={{marginBottom:10}}>
                    <StyledInput style={{color:'white', margin:10}} placeholder={"Username"} />
                    <StyledInput style={{color:'white', margin:10}} placeholder={"Email"} />
                    <StyledInput style={{color:'white', margin:10}} placeholder={"Password"} />
                    <StyledInput style={{color:'white', margin:10}} placeholder={"Confirm Password"} />
                </View>
                
                <StyledButton textStyle={{color:'white'}}title={"Register"} style={styles.button}/>
                <Text style={{marginTop:40, alignSelf:'flex-end', color:'#C9C2C0'}}>
                        Already have an account?
                </Text>
                <StyledButton onPress={()=>navigation.goBack()} title="Login" textStyle={{color:'white',padding:10}} style={styles.button2}/>
            </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    button:{
        borderRadius:20,
        backgroundColor:'#C92D2C',
        alignSelf:'center',
        width:'50%',
        height:40
    },
    button2:{
        marginTop:5,
        borderRadius:10,
        backgroundColor:'#C92D2C',
        alignSelf:'flex-end',
        height:20
    }
});
