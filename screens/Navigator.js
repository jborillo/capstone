import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
//Todo
//Card: Add to Cart Button functionality
//Product Screen: Add to Cart Button functionality, Back Button design
//Login: Create account button, Forgot password, Login button
//Register: Login Button, Register Button
//Select Payme`nt Method
//Profile Drawer Design (Show Guest if not logged in)
//Settings Screen
//History Screen
//Verification

//Don't save  money 
//Savers are loosers

// yung banko nag prprint nmn money bat ka pa nag sasave??
//interest rate ng saving mo is less 0%
//$2000 after ilang years $2000
// maging $1500 or $1mil
//2020 nasa 10-20k
//last halving, 2017, tumaas din, crash

//cash flow
//Poor :Income(job) Expenses(Taxes,Rent,Transportation,Food ,Clothes) Asset(none) Liability(none)
//Middle:Income(job) Expenses(Taxes,Mortgage Payment,Car Payment,Credit Card Debt, School Loans) Asset(none) Liabilities(Mortgage Payment,Car Payment,Credit Card Debt, School Loans)
//Elon Musk:Income(Rental Income,Dividend,Interest,Royalties) Expenses(Taxes,Mortgage Payment) Assests(Real Estate,Stocks,Bonds,Notes,Intellectual Property) Liablities(Mortgage Payment, Credit Card Debt,Consumer Loans)
 
//Rothschild: Income(bank), expenses(wala), assets(banks), liabilities(banks)
// wealthy: kung kaya na ng assests mo icover up yung monthly expenses without having a job
//Rich get more assests and invest more
/*
1.)Confirm order: // done
delivery method: delivery or pickup
if delivery, show time and date
if pickup, generate and show qr code 

2.)Product Recommender //partially done
3.)Product Categories // wip
4.)Pass data between screens (example: tap on piatos card -> pass piatos card data to ProductScreen)

 Higagante
 Discord bro
a.)Learn a High Income skill tpos maging freelancer
b.)Turn the High Income skill to a scalable business
c.)We should invest the income in High Return Investments. (example: we invested $5000 after some time it became $1mill  example 1:crypto, example2: Real Estate )

Check out screen - yan ung may delivery options, 
Order Summary Screen - yan ung summary lang ng orders nila, tapos may confirm button kung ok na ung orders nila.
Order Info screen - yan ung parang 'resibo'

18 recommendations to 11 recomendations
-User Verification (Courier, Buyer, Seller) (KYC - Know your Customers) //wip, placeholder only
-Terms and Conditions for valid cancelation of orders //wip
-Delivery Fee (free if seller can deliver the item themselves) //wip
-Order Ready Notification - shows up when order is accepted by the seller //triggered by timer for demo only, no database yet. 

-Cater whole la union (Region Lock, buyers and sellers within la union only) //region locking can be done by verifying seller and buyer location. 

*Confirm Order/ Checkout (Buyer and Seller) //done, add special request input, wait for seller to accept order.
*QR Code Generator (for pickup) //placeholder, partially done
*Special Request Input //done
*Payment Method (Cash on Delivery, Cash on Pickup, Gcash) //done
*Delivery/Pickup option (seller can choose to deliver item themselves or hire a courier) //partially done

Admin Page (Report Generation) //no admin page yet

 */


//Real Estate

//Time consuming



// Robert Kiyosaki: Taxes and Debt sa advantage
//Bili ka bahay bank loan pero pag rent pabayaran mo sa kanila lahat $800 every month 
//S1000, $1,500 , $150k, Downpayment :$15k,$200k, total loan mo is $135 %5 200-135
//Equity :$65k
/*
Equity represents the value that would be returned to a company’s shareholders 
if all of the assets were liquidated and all of the company's debts were paid off.
Shareholders’ Equity=Total Assets−Total Liabilities
*/

// dapat may 5 na buckets

//import { createFluidNavigator} from 'react-navigation-fluid-transitions';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, Button, View, Alert, Image } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartArrowDown, faHome, faSearch, faShoppingCart, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import Home from "./tabs/Home";
import Search from "./tabs/Search";
import Cart from "./tabs/Cart";
import Product from "./stacks/Product";
import OrderInfo from "./stacks/OrderInfo";
import CheckOut from "./stacks/CheckOut"
import Login from "./stacks/Login";
import Register from "./stacks/Register";
import Rider from "./stacks/Rider";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeTab = createBottomTabNavigator();

const DrawerButton = ()=>{
  return null
}

const HomePage = ({navigation}) => {
  return (
    <HomeTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeBackgroundColor:'#616265',
        inactiveBackgroundColor:'#333333',
        activeTintColor:'white',
        inactiveTintColor:'white'
      }}
    >
      <HomeTab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHome} color={color} size={size} />
          ),
        }}
      />
      <HomeTab.Screen name="Search" component={Search} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faSearch} color={color} size={size} />
          ),
        }}
      />
      <HomeTab.Screen name="Cart" component={Cart} options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faShoppingCart} color={color} size={size} />
          ),
        }}
      />
      <HomeTab.Screen name="Profile" component={DrawerButton} listeners={{
          tabPress: e => {
            // Prevent default action
            navigation.openDrawer()
            e.preventDefault();
          },
        }} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} color={color} size={size} />
          )
        }}
      />
    </HomeTab.Navigator>
  );
};

const HomeStack = () =>{
  return (
    <Stack.Navigator
      screenOptions={
        ({route})=>({
          headerShown: false,
        })
      }
    >
      <HomeTab.Screen name="HomeScreen" component={HomePage} />
      <HomeTab.Screen name="ProductScreen" component={Product} />
      <HomeTab.Screen name="CheckOutScreen" component={CheckOut} />
      <HomeTab.Screen name="OrderInfoScreen" component={OrderInfo}/>
      <HomeTab.Screen name="RiderScreen" component={Rider}/>
    </Stack.Navigator>
  );
}

import {Avatar} from 'react-native-elements'
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer'
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome'
import { Divider } from 'react-native-elements';


const DrawerContent = (props) => {
  return (
      <DrawerContentScrollView contentContainerStyle={{flex:1,justifyContent:'flex-end'}}{...props}>
        <View style={{flex:1}}>
          <View style={{flex:1, justifyContent:'flex-end'}}>
          </View>
          <Divider style={{ backgroundColor: 'gray' }} />
          <View>
            <View style={{padding:15,flexDirection:'row', alignItems:'center'}}>
              <Avatar size="medium" backgroundColor='gray' rounded title='G'/>
              <Text style={{color:'white', margin:10}}>Guest</Text>
            </View>
            <DrawerItem 
              activeTintColor='#C92D2C' 
              inactiveTintColor='white' 
              color='white' 
              label="Sign In" 
              onPress={()=>{props.navigation.navigate('LoginPage')}} 
              icon={({color,size})=>(
                <Icon color={color} size={size} icon={faSignInAlt}/>
              )}
            />
          </View>
        </View>
      </DrawerContentScrollView>
  );
}

const Navigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#1F1F1F',
        width: 240,
      }}
      drawerContentOptions={{
        labelStyle:{color:'white'},
        activeTintColor:'#C92D2C',
        inactiveTintColor:'white'
      }}
      
      drawerContent={(props)=><DrawerContent {...props}/>}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack}/>
      <Drawer.Screen name="LoginPage" component={Login} />
      <Drawer.Screen name="RegisterPage" component={Register} />
    </Drawer.Navigator>
  );
}

export default Navigator;
