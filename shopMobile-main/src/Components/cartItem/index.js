import { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import config from '../../Config';
import { storeCart } from '../../Services/store';

const windowWidth = Dimensions.get('window').width;

export default function CartItem({ item, updateList }) {
  const data = item;
  const [counter, setCounter] = useState(data?.count ? data.count : 1);
  const [price, setPrice] = useState(data.price);

  const increaseNum = async () => {
    setCounter((pre) => pre + 1);
    setPrice((pre) => data.price * (counter + 1));
    await storeCart.update_cart_list(item, counter);
  };
  const decreaseNum = async () => {
    setCounter((pre) => (pre > 1 ? pre - 1 : pre));
    setPrice((pre) =>
      counter > 1 ? (pre - data.price).toFixed(1) : pre
    );
    await storeCart.update_cart_list(item, counter);
  };

  const deleteItem = () => {
    storeCart.remove_cart_list(item).then(() => {
      updateList();
    });
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.productImg}
            source={{ uri: `${config.public}${data.picture}` }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {data.title}
            </Text>
            <TouchableOpacity style={styles.deleteButton} onPress={deleteItem}>
              <Text style={styles.deleteButtonText}>Удалить</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.priceAndQuantityContainer}>
            <Text style={styles.price}>{price} {data.currency}</Text>
            <View style={styles.addButtonWrapper}>
              <TouchableOpacity style={styles.addButton} onPress={increaseNum}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
              <Text style={styles.counter}>{counter}</Text>
              <TouchableOpacity style={styles.addButton} onPress={decreaseNum}>
                <Text style={styles.addButtonText}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  productImg: {
    height: '100%',
    width: '100%',
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: windowWidth * 0.035,
    color: '#000',
    flexShrink: 1,
  },
});