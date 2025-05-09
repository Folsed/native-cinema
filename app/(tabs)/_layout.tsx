import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Tabs } from 'expo-router' // or wherever your Tabs navigator comes from
import { ImageSourcePropType } from 'react-native'

interface ITabIconProps {
    focused: boolean
    icon: React.ReactElement
    title: string
}

const TabIcon: React.FC<ITabIconProps> = ({ focused, icon, title }) => {
    if (focused) {
        return (
            <ImageBackground
                source={require('../../assets/images/highlight.png')}
                className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
            >
                {icon}
                <Text className='text-secondary text-base font-semibold ml-1'>{title}</Text>
            </ImageBackground>
        )
    }
    return <View className='size-full justify-center items-center mt-4 rounded-full'>{icon}</View>
}

const Layout: React.FC = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    backgroundColor: '#0F0D23',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    borderWidth: 0,
                    borderColor: '#0F0D23',
                },
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }: { focused: boolean }) => (
                        <TabIcon
                            focused={focused}
                            icon={
                                <AntDesign name='home' size={24} color={focused ? '' : '#a8b5db'} />
                            }
                            title='Home'

                        />
                    ),
                }}

            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }: { focused: boolean }) => (
                        <TabIcon
                            focused={focused}

                            icon={
                                <AntDesign
                                    name='search1'
                                    size={24}
                                    color={focused ? '' : '#a8b5db'}
                                />
                            }
                            title='Search'
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }: { focused: boolean }) => (
                        <TabIcon
                            focused={focused}
                            icon={
                                <AntDesign name='save' size={24} color={focused ? '' : '#a8b5db'} />
                            }
                            title='Saved'
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }: { focused: boolean }) => (
                        <TabIcon
                            focused={focused}
                            icon={
                                <AntDesign name='user' size={24} color={focused ? '' : '#a8b5db'} />
                            }
                            title='Profile'
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

export default Layout
