import React from 'react';
import {FlatList, View, Text, StyleSheet, StatusBar} from 'react-native';
const CardListing = (props) => {
    return (
        <View style={{ flex:1}} onStartShouldSetResponder={() => true} /*style={{flexWrap:"wrap", flexDirection:"row", justifyContent:"space-between"}}*/>
            <FlatList
                ListFooterComponent={props.footer}
                ListHeaderComponent={props.header}
                numColumns={props.numColumns}
                keyExtractor={(item, index)=>index.toString()}
                data={props.data} 
                renderItem={({item})=>{
                    item.mode = props.mode
                    item.navigation = props.navigation
                    return props.renderItem(item)
                }}
            />
        </View>
    )
}
export default CardListing;