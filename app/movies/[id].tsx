import React from 'react'
import { Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

const MovieDetails = () => {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Text>Movie details: {id}</Text>
        </View>
    )
}

export default MovieDetails
