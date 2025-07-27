import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
    return (
        <>
            <View style={tw`flex-1 justify-center items-center bg-[#fff] p-4`}>
                <Text style={tw`text-2xl text-[#000]`}> Your Profile</Text>
                <View style={tw`mt-4`}>
                    <Ionicons name="person-circle" size={100} color="#000" />
                </View>
            </View>
        </>
    )
}

export default ProfileScreen;