import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native'

import Card from './Card'

const ImageItem = props => {
  let TouchableCmp = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }

  return (
    <Card style={styles.container}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onPress} useForeground>
          <View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 10
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold'
  }
})

export default ImageItem
