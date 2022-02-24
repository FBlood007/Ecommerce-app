import React from 'react'
import { Text, View, StatusBar } from 'react-native'

export default function PhonePay() {
  return (
    <View>
        <StatusBar backgroundColor={'#4b2b80'}  barStyle={'default'}/>
        <View>
            {/* <Image/> */}
            <View style={{marginVertical:10}}>
                <Text>{'Your\nLocation'}</Text>
                <Text>Pune</Text>
            </View>
            <View>
                {/* <Image></Image>
                <Image></Image>
                <Image></Image> */}
            </View>
        </View>
    </View>
  );
}
