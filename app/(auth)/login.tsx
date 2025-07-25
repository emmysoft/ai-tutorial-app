import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Login = () => {

  const router = useRouter(); // Using useRouter to navigate back

  //states
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //hide password state
  const [isVisible, setIsVisible] = React.useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  //handle login function
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    //navigation
    console.log('User logged in:', { email, password });
    router.push("/(tabs)")
  }


  return (
    <>
      <View style={tw`flex-1 justify-start items-center bg-[#fff] p-4`}>
        <View style={tw`p-4 justify-start items-start mr-auto`}>
          <Ionicons name="arrow-back" size={18} color="black" onPress={() => router.back()} style={tw`border-2 border-[#000] p-2 rounded-full`} />
        </View>
        <Text style={tw`text-3xl text-center text-[#000] mt-8`}>Login</Text>

        <View style={tw`flex justify-center items-center gap-3 mt-20 p-4`}>
          <TextInput
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            style={tw`border border-gray-300 rounded-md px-4 py-3 w-80`}
            placeholder="Email"
            keyboardType="email-address"
          />
          <View style={tw`flex-row items-center`}>
            <TextInput
              value={password}
              onChangeText={(text: string) => setPassword(text)}
              style={tw`border border-gray-300 rounded-md px-4 py-3 w-80`}
              placeholder="Password"
              secureTextEntry={!isVisible}
              autoCapitalize="none"
            />
            <Ionicons
              name={isVisible ? "eye-off" : "eye"}
              size={24}
              color="#808080"
              onPress={togglePasswordVisibility}
              style={tw`absolute right-4`}
            />
          </View>
          <Pressable onPress={() => handleLogin()} style={tw`flex-row justify-center items-center px-6 py-3 bg-[#fcf5d5] rounded-full mt-8 w-80`}>
            <Text style={tw`text-[#000] text-base text-center`}>Login</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}

export default Login;