import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Home = () => {
    return (
        <>
            <View style={tw`flex-1 h-full bg-[#fff]`}>
                <View style={tw`flex justify-start items-start p-4`}>
                    <Text>Tutorial AI</Text>
                </View>
            </View>
        </>
    )
}

export default Home;