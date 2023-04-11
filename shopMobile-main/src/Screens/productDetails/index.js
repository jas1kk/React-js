
import {useState} from 'react'
import {View, Text,Image,Button,StyleSheet,ScrollView} from 'react-native'
import { 
  useQuery,
} from '@apollo/client';
import { productsGQL } from '../../Services/gqls'
import actionProducts from './actions'
import config from '../../Config/index';

const ProductDetails = ({navigation, route, item})=>{
  const [productData, setProducData] = useState(route.params?.item);


  const putProduct = (data)=>{
    setProducData(data.product)
  }


  useQuery(productsGQL.getProduct, actionProducts.getProduct(putProduct, route.params?.item?._id));


 console.log(8888888888, productData)

  return(
    <ScrollView>
    <View>
      <Image 
            resizeMode='cover'
            style={styles.productImg}
            source={{uri: `${config.public}${productData?.picture}`}} 
      />
      
          <View style={styles.productWord}>
            <Text style={styles.text}>Характеристики</Text>
            <View>{productData.addition_product?.characteristics?.map((el)=> {
              return(
                <Text>  {el.name}:  {el.value}</Text>
              )
            })}</View>
          </View>

          <View style={styles.productWord}>
            <Text style={styles.text}>Описание</Text>
            <Text style={styles.text}>{productData.description}</Text>
          </View>

          <View style={styles.productWord}>
            <Text style={styles.text}>Физическое лицо</Text>
            <Text style={styles.text}>№{productData.vendor_code}</Text>
          </View>

      <Text style={styles.text_2}>{`${productData?.title}`} </Text>


      <View style={styles.productCartFavorite}> 
        <Text style={styles.text}>В корзину</Text>
        <Text style={styles.text}>В избранные</Text>
      </View>

      <View style={styles.productPrice}> 
        <Text style={styles.text}>{`$${productData.price} оптом`}</Text>
        <Text style={styles.text}>{`Одно: $${productData.price_one}`}</Text>
        </View>
      {/* <Text>{$${productData.price} оптом       Одно: $${productData.price_one}}</Text> */}
      <Text style={styles.text}>{`Компания: GOSAUDA`}</Text>


    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    display:'flex',
    justifyContent:'center',
    maxWidth: 350
  },
  productImg: {
    height: 500,
    width: 360,
    // marginHorizontal:125
  },
  productPrice: {
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    width: 340,
    marginVertical:10,
    marginLeft: 10
  },
  productWord: {
    display:'flex',
    justifyContent:'space-between',
    flexDirection:"column",
    width: 340,
    marginVertical:10,
    marginLeft: 10
  },
  productCartFavorite: {
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    width: 340,
    marginVertical:10,
    marginLeft: 10
  },
  text:{
    fontSize:18
  },
  text_2:{
    fontSize:20
  },
});
export default ProductDetails