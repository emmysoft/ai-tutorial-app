import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useRouter } from 'expo-router';

const AuthScreen = () => {

  const router = useRouter();

  return (
    <>
      <View style={tw`flex-1 h-full bg-[#fff]`}>
        <View style={tw`p-4 gap-120`}>
          <Text style={tw`text-3xl text-left text-[#000] mt-12`}>The Tutorial App</Text>

          <View style={tw`flex justify-center items-center gap-2`}>
            <Pressable onPress={() => router.push('/login')} style={tw`flex-row justify-center items-center px-6 py-3 bg-[#fcf5d5] rounded-full mb-2 w-full`}>
              <Text style={tw`text-[#000] text-lg text-center`}>Login</Text>
            </Pressable>
            <TouchableOpacity onPress={() => {
              router.push('/signup')
              console.log('Sign Up Pressed');
            }}
              style={tw`flex-row justify-center items-center px-6 py-3 bg-[#000] rounded-full w-full`}>
              <Text style={tw`text-[#fff] text-base text-center`}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}

export default AuthScreen;