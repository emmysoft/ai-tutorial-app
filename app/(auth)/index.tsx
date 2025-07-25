import { View, Text, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const AuthScreen = () => {
  return (
    <>
      <View style={tw`flex-1 h-full bg-[#fff]`}>
        <View style={tw`p-4 flex justify-start items-start`}>
          <View style={tw`p-4 flex justify-start items-start p-4 w-1/2`}>
            <Text style={tw`text-3xl text-left text-[#000] mt-4`}>Welcome to the Tutorial App</Text>
          </View>

          <View style={tw`flex justify-center items-center gap-5 p-4 m-auto h-full`}>
            <Pressable style={tw`flex-row justify-center items-center px-6 py-3 bg-[#fcf5d5] rounded-full min-w-full`}>
              <Text style={tw`text-[#000] text-base text-center`}>Login</Text>
            </Pressable>
            <Pressable style={tw`flex-row justify-center items-center px-6 py-3 bg-[#000] rounded-full min-w-full`}>
              <Text style={tw`text-[#fff] text-base text-center`}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  )
}

export default AuthScreen;