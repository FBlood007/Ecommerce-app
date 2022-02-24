import React from 'react';
import { Text, View,Image, StyleSheet } from 'react-native';
import cart from './cart.png';
import { Button } from 'react-native-paper';
import cart1 from './cart1.png'

export default function Cart(props) {
  return (
    <View style={{flex:1}}>
    <View style={{marginVertical:150}}>
    <Text style={{textAlign:'center', fontWeight:'bold',fontSize:20}}>
        {"Sorry your\nCart is Empty"}</Text>
    <Image style={{width: '70%', height: '70%',backgroundColor:'grey',alignSelf:'center'}} source={cart}/>
    </View>
     <Button  style={edit.butn} mode="contained" icon={cart1} onPress={props.navigation.goBack}>
            back
     </Button> 
    </View>
  );
} 

const edit = StyleSheet.create({

    butn:{
        width:"50%",
        alignSelf:'center',
        marginVertical:-180,
    }


});

