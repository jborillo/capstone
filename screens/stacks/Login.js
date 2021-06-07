import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StyledInput from '../../components/common/StyledInput';
import StyledButton from '../../components/common/StyledButton';
import { TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
const Login = () => {
    const navigation = useNavigation();  
    return (
        <View style={{flex:1,backgroundColor:'#333333', justifyContent:'center', alignItems:'center'}}>
            <View style={{backgroundColor:'#616265', width:'70%', padding:20, borderRadius:20}}>
            <Image style={{alignSelf:'center', height:100, width:150}} source={{uri:"https://scontent.fcrk2-1.fna.fbcdn.net/v/t1.15752-9/176049861_931850044303454_2954272676772229190_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=bQjPRvzGbxYAX_ndYVq&_nc_ht=scontent.fcrk2-1.fna&oh=6b1ad674a095026548c34bcb6f819690&oe=60A70220"}}/>
                <View>
                    <StyledInput style={{color:'white', margin:10}} placeholder={"Username/Email"} />
                    <StyledInput style={{color:'white', margin:10}} placeholder={"Password"} password={true}/>
                </View>
                <StyledButton textStyle={styles.textStyle} title={"Login"} style={styles.button}/>
                <TouchableOpacity style={{marginVertical:25}}>
                    <Text style={{fontSize:16, fontWeight:'bold', alignSelf:'center', color:'#C9C2C0'}}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>
                <Text style={{marginTop:10, alignSelf:'flex-end', color:'#C9C2C0'}}>
                        Not yet signed up?
                </Text>
                <StyledButton onPress={()=>navigation.navigate('RegisterPage')} title="Create Account" textStyle={{color:'white',padding:10}} style={styles.button2}/>
                <StyledButton onPress={()=>navigation.navigate('RiderScreen')} title="Rider Demo" textStyle={{color:'white',padding:10}} style={styles.button2}/>

            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        color:'white'
    },
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
