import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { icons } from '@/constants/icons'

interface ISearchBarProps {
    placeholder: string
    onPress: () => void
}

const SearchBar: React.FC<ISearchBarProps> = ({ onPress, placeholder }) => {
    const [input, setInput] = useState<string>('')
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image
                source={icons.search}
                className='size-5'
                resizeMode='contain'
                tintColor='#ab8bff'
            />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={input}
                onChangeText={e => {
                    setInput(e)
                }}
                placeholderTextColor='#a8b5db'
                className='flex-1 ml-2 text-white'
            />
        </View>
    )
}

export default SearchBar
