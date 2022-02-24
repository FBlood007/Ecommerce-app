import React from 'react'
import { Text, View, Image,Pressable} from 'react-native';



export default function Details(props) {
    console.log(props);
    const pData = props?.route?.params?.data;

    return (
        <View style={{padding:20}}>
        <Pressable onPress={props.navigation.goBack}>
            <Text style={{fontSize:15, 
                          fontWeight:'bold', 
                          backgroundColor:'lightgreen', 
                          marginRight:305,
                          paddingHorizontal:6,
                          borderRadius:5}}>
                Back
            </Text>
        </Pressable>
        <View style={{alignItems:"center"}}>
        <Image 
            source={{uri:pData.image_url}} 
            style={{height:300, width:300,marginVertical:10}}

        />
        <Text style={{fontSize:20, fontWeight:'bold', color:'#000'}}>
            {pData.name}
        </Text>
        <Text style={{fontSize:20, color:"#000"}}>
        INR {pData.discounted_price} 
        </Text>
        </View>
       
        </View>
  );
}
