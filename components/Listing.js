import React from "react";
import { View, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Listing = (props) => {
  return (
    // <Listing  renderItem={Card} data={data.productData}></Listing>
    <View style={{flex:1,flexWrap:'wrap',height:2000,alignContent:'space-around', width:windowWidth}}>
      {props.data.map((item, index) => {
        item.mode = props.mode;
        item.key=index;
        return props.renderItem(item);
      })}
    </View>
  );
};

export default Listing;
