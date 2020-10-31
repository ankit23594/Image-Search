import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Home = props => {
    return (
        <View style={styles.home}>
            <View style={styles.container}>
                <TextInput
                    style={styles.searchInput}
                    placeholder='Search here...'
                    autoCorrect={false}
                    autoCapitalize='none'
                    onSubmitEditing={event => {
                        props.navigation.navigate('ImageList', { searchInput: event.nativeEvent.text })
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
        flex: 1,
        justifyContent: 'center' 
    },
    container:{
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center'
    },
    searchInput: {
        height: '100%',
        width: '100%',
        paddingLeft: 8,
        fontSize: 16
    }
})

export default Home
