import { Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'

export default function Index() {
    return (
        <View className='flex-1 justify-center items-center'>
            <Text className='text-3xl text-accent'>Welcome!</Text>
            <AntDesign name='downcircle' size={24} color='black' />
        </View>
    )
}
