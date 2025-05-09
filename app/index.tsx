import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function Index() {
    return (
        <View className='flex-1 justify-center items-center'>
            <Text className='text-3xl text-accent'>Welcome!</Text>
            <Link href='/onboarding'>Go to Onboarding</Link>
            <Link href='/movie/expedition-33'>Go to Movie</Link>
        </View>
    )
}
