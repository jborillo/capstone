import React from 'react'
import { View, TextInput,StyleSheet } from 'react-native'

const StyledInput = (props) => {
    return (
        <View style={[props.style, styles.container]}>
            <TextInput  {...props} style={[props.style, styles.textInput]} secureTextEntry={props.password} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {borderRadius:20, backgroundColor: '#C9C2C0'},
    textInput: {color:'#333333', margin:5, paddingHorizontal:10}
});

export default StyledInput
