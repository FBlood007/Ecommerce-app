import React, {useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import {useState} from 'react';
import axios from 'axios';
import AAA from './AAA.jpg';
import cart1 from './cart1.png';

export default function Eapp(props) {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiURL =
    'https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0';

  useEffect(() => {
    axios.get(apiURL).then(data => {
      setApiData(data.data);
      console.log('first', data);
    });
  }, []);

  useEffect(() => {
    setLoading(true) 
      setTimeout(() => {
        setLoading(false)}, 3000);
  }, []);

  // function data(productData){
  //   alert(JSON.stringify(productData));
  // }
  return (
    <View style={css.container}>
      <ImageBackground source={AAA} style={{width: '100%', height: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#9999',
          }}>
          <Text style={css.pageHeading}>Ecommerse Applicaion</Text>
          <Text
            style={css.cart}
            onPress={() => props.navigation.navigate('Cart')}>
            <Image source={cart1} />
          </Text>
        </View>
        { loading? <ActivityIndicator size="large" style={css.loading}/> :
        <ScrollView>
          {apiData?.store_items?.map((item, i) => {
            return (
              <View key={i}>
                <Text style={css.cName}>
                  {item.category && item.category.name}
                </Text>
                <View style={css.productItemContainer}>
                  {item?.items?.map(productItem => {
                    return (
                      <View style={css.product} key={productItem.id}>
                        <Image
                          style={{height: 150, width: '100%'}}
                          source={{uri: productItem?.image_url}}
                        />
                        <Text
                          style={{
                            fontSize: 15,
                            marginBottom: 10,
                            color: '#000',
                          }}
                          numberOfLines={1}>
                          {productItem?.name}
                        </Text>
                        <View style={css.price}>
                          <Text style={css.oPrice}>
                            {productItem?.price} INR
                          </Text>
                          <Text style={css.dPrice}>
                            {productItem?.discounted_price} INR
                          </Text>
                        </View>
                        <Button
                          onPress={() =>
                            props.navigation.navigate('Details', {
                              data: productItem,
                            })
                          }
                          title="Add to cart"
                        />
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>
        }     
      </ImageBackground>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'skyblue',
  },
  pageHeading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    paddingHorizontal: 70,
  },
  cart: {
    marginLeft: -25,
    paddingHorizontal: 2,
    paddingBottom: 12,
  },
  cName: {
    textAlign: 'center',
    fontSize: 19,
    textDecorationLine: 'underline',
    color: '#000',
    backgroundColor: 'skyblue',
    padding: 10,
  },
  productItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  product: {
    width: '44%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 10,
    borderStyle: 'dashed',
  },
  price: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  oPrice: {
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  dPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  loading:{
    marginVertical:300,
    justifyContent: "center",

}
});
