import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { useNavigation, StackActions } from "@react-navigation/native";
import StyledButton from '../../components/common/StyledButton'
import GlobalStyles from '../../components/GlobalStyles';
//dispatch - send an action object to update the navigation state
const CheckOutButtons = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'stretch', backgroundColor: '#333333', justifyContent: 'center' }}>
            <StyledButton title="Back" textStyle={{color: "white", fontWeight: "bold", fontSize: 15,}} style={styles.button} onPress={() =>
                navigation.dispatch(
                    StackActions.popToTop()
                )} />
        </View>
    )
}

const QR=()=>{
    return(
        <View>
            <View style={styles.margin}>
                <Text style={styles.text}>Kindly show this QR code to the Employee</Text>
            </View>
            <View style={{ flex: 1, color: 'white', margin: 10, padding: 10, marginTop: 0 }}>
                <Image style={{ borderRadius: 20, height: 400, width: '100%', alignSelf: 'center', resizeMode: 'contain' }} source={{ uri: 'https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.15752-9/186037492_211355283919081_5308940240618800851_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=rJBbE1okC3sAX8p75lz&_nc_ht=scontent.fmnl13-1.fna&oh=185cb302732200c312ee05946221454c&oe=60C7406C' }} />
            </View>
        </View>
    )
}
const OrderInfo = ({route, specialRequest}) => {
    let date = new Date();
    let day = date.getDate();
    let hours = date.getHours();
    let twelvehours = ((hours + 11) % 12 + 1);
    let minutes = date.getMinutes();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;

    //24 hour
    //12 hour
    //hours = ((hours + 11) % 12 + 1);
    return (
        <SafeAreaView style={[GlobalStyles.droidSafeArea, { flex: 1, backgroundColor: '#1F1F1F' }]}>
            <ScrollView>
                <View onStartShouldSetResponder={() => true}>
                    <View style={[styles.view, { backgroundColor: '#616265' }]}>
                        <Image style={{ alignSelf: 'center', height: 100, width: 150 }} source={{ uri: 'https://scontent.fcrk2-1.fna.fbcdn.net/v/t1.15752-9/176049861_931850044303454_2954272676772229190_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=bQjPRvzGbxYAX_ndYVq&_nc_ht=scontent.fcrk2-1.fna&oh=6b1ad674a095026548c34bcb6f819690&oe=60A70220' }} />
                    </View>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, alignSelf: 'center' }}>Thank you for your order! </Text>

                    {route.params.deliveryMethod?<QR/>:null}
                    
                    <View style={styles.margin}>
                        <Text style={styles.text}>Time to {route.params.deliveryMethod?'Pickup':'Deliver'}</Text>
                    </View>
                    <View style={[styles.view, { alignItems: 'center' }]}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Your order will be ready to {route.params.deliveryMethod?'Pickup':'Deliver'} by :</Text>
                        <Text style={{ fontSize: 32, color: 'white' }}>9:00 AM</Text>
                        <Text style={{ color: 'white' }}>06/5/2021</Text>
                    </View>

                    <View style={styles.margin}>
                        <Text style={styles.text}>{route.params.deliveryMethod?'Pickup':'Delivery'} location</Text>
                    </View>

                    <View style={styles.view}>
                        <Paragraph style={{ color: 'white', fontWeight: 'bold', fontSize: 15, color: 'white', padding: 10, alignSelf: 'center' }}>
                            Cacapian, San Juan, La Union, 2514
                        </Paragraph>
                    </View>

                    
                    <View style={styles.margin}>
                        <Text style={styles.text}>Special Request</Text>
                    </View>

                    <View style={styles.view}>
                        <Paragraph style={{ color: 'white', fontWeight: 'bold', fontSize: 15, color: 'white', padding: 10, alignSelf: 'center' }}>
                            {route.params.specialRequest}
                        </Paragraph>
                    </View>
                </View>
            </ScrollView>
            <CheckOutButtons />
        </SafeAreaView>


    )
}

export default OrderInfo;
const styles = StyleSheet.create({
    view: {
        borderRadius: 20,
        backgroundColor: '#333333',
        margin: 10, padding: 10
    },
    margin: {
        margin: 10,
        padding: 10,
        marginBottom: 0
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#C92D2C",
        padding: 10,
        margin: 10,
    },
});
