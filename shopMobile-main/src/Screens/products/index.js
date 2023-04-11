import React, {useState} from 'react';
import {View, Button, FlatList, StyleSheet} from 'react-native';
import { 
  useQuery,
  useLazyQuery
} from '@apollo/client';
import { productsGQL } from '../../Services/gqls';
import {getProducts} from './actions'
import {ProductItem} from '../../Components'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Products = ({navigation})=>{
  const [products, setProducts] = useState([])

  useQuery(productsGQL.getProducts, getProducts(setProducts));

  return(
  <View>
    <FlatList
      data={products}
      numColumns={2}
      columnWrapperStyle={styles.listWraper}
      horizontal={false}
      renderItem={({item}) => <ProductItem item={item} navigation={navigation} />}
      keyExtractor={item => item._id}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  listWraper: {
    gap: 10, 
    backgroundColor: '#fff',
    paddingVertical: 5, 
    paddingHorizontal: 10
  },
});
export default Products