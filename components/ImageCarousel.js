import React, { useState, useRef,useEffect} from 'react'
import { StyleSheet, Image, View, ScrollView, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native'

const width = Dimensions.get('window').width;
const height = width * 0.6;
const images = [
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
]    
let val, val2, val3, val4 = 0;
//useEffect(() => {
    //document.title = `You clicked ${count} times`;//
const ImageCarousel = (props) => {
    const [active, setActive] = useState(0);
    const carouselBanner = useRef(0);
    const carouselThumbnail = useRef(0);

    const change = ({ nativeEvent }) => {
        val = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        val2 = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        val3 = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        //layoutMeasurement.width = width ng picture/carousel
        //scroll position ----- -----
        //width ng image =
        /*
        last width
        for every 5 swipes, we offset the flat list
        val%5 <--
        */
        if (val !== active) {
            setActive(val);
        }
        if((val%5)==0){
            carouselThumbnail.current.scrollToOffset({offset: width*(val/5)});
        }
    }

    const update = ({nativeEvent}) => {
        val2 = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        val3 = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    }

    const thumbnail = ({ item, index }) => (
        <TouchableOpacity key={index} onPress={()=>{setActive(index); changeBanner(index)}}>
            <Image
                source={{ uri: item }}
                style={[style.thumbnail, {opacity: index==active?1:0.5, borderColor:index==active?'#e94560':null}]}
            />
        </TouchableOpacity>
    );

    const banner = ({ item, index }) => (
        <Image
            key={index}
            source={{ uri: item }}
            style={style.image}
        /> 
    );

    const changeBanner = (val) => {
        carouselBanner.current.scrollToOffset({offset: width*val});
    }

    return (
        <View>
            <FlatList 
                    ref={carouselBanner} 
                    pagingEnabled
                    horizontal 
                    data={props.image ? [props.image]:images}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={banner} 
                    onScroll={change}
            />
            <View style={{alignItems: 'center'}}>
                <FlatList 
                    ref={carouselThumbnail} 
                    horizontal 
                    data={props.image ? [props.image]:images}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={thumbnail} 
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: { marginTop: 50, width, height },
    thumbnail: { width:width/5-10, height:width/5-10, borderRadius:10, margin:5, borderWidth:2},
    image: {borderRadius:10, margin:10, width:width-20, height }
})

export default ImageCarousel
