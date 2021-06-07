import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './screens/Navigator'
import CardListing from './components/CardListing'
/*sariling website nandoon yung brand 
    at `1`1 X
    FIXED` bla
    na submit na natin yung project 
    tpos mag padagdag ng feature 
    per module/feature 2k + per hour

https://coggle.it/diagram/YIhRvdH-vFAVhHBE/t/app

*/


const App = () => {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    )
}

export default App
