import React from 'react'
import { View, StyleSheet, ScrollView, Image, Text, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const ImageDetail = props => {
    let { item } = props.route.params
    let metatags = item.pagemap.metatags[0]

    let metaImageUrl = metatags['og:image']
    let metaTitle = metatags['twitter:title']

    return metaImageUrl && metaTitle ? (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: metaImageUrl }} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{metaTitle}</Text>
                <Text style={styles.description}>{metatags['twitter:description']}</Text>
            </View>
        </ScrollView>
    ) : <View style={styles.message}><Text>No Details Found...</Text></View>
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    imageContainer:{
        width: width,
        height: height / 2
    },
    image: {
        width: '100%',
        height: '100%'
    },
    contentContainer: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 16,
        color: '#4e4d4d',
    },
    message: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ImageDetail
