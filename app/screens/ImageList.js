import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native'
import { getImages } from '../api/imagesApi'

import ImageItem from '../components/ImageItem'

const ImageList = props => {
    let [isLoading, setIsLoading] = useState(false)
    let [imagesData, setImagesData] = useState([])
    let [isError, setIsError] = useState(false)

    let { searchInput } = props.route.params

    let filterImagesData = () => {
      setIsError(false)
      setIsLoading(true)

      getImages(searchInput)
      .then(response => {    
        let data = []

        response &&
        response.data &&
        response.data.items.forEach((item, index) => {
            let imageUrl = item.pagemap && 
                item.pagemap.cse_image &&
                item.pagemap.cse_image[0].src

            imageUrl &&
                data.push({
                    ...item,
                    thumbnail: imageUrl,
                    title: item.title,
                    id: index + '',
                })
        })

        setIsLoading(false)
        setImagesData(data)
      })
      .catch(error => {
        setIsLoading(false)
        setIsError(true)
          console.log(error)
        })
    }

    useEffect(() => {
      filterImagesData()
    },[searchInput])

    let renderData = () => {
        return imagesData.length > 0 ? 
            <FlatList
                data={imagesData}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <ImageItem
                        image={item.thumbnail}
                        title={item.title}
                        desc={item.desc}
                        onPress={() => props.navigation.navigate('ImageDetail', {item})}
                    />
                )}
            /> :
            <Text>No Results Found...</Text>
    }

    return (
        <View style={styles.container}>
            {isError ? <Text>Something went wrong...</Text> :
            isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : renderData()}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
        flex: 1,
        justifyContent: 'center',
    }
})

export default ImageList
