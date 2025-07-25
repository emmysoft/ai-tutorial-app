import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SignUp = () => {

    const router = useRouter(); // Using useRouter to navigate back

    //states for signup
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    //hide password state
    const [isVisible, setIsVisible] = React.useState(false);
    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleRegister = () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        // Here you would typically handle the registration logic, e.g., API call
        console.log('User registered:', { username, email, password });
        router.push('/login'); // Navigate to login after successful registration
    }

    return (
        <>
            <View style={tw`flex-1 justify-start items-center bg-[#fff] p-4`}>
                <View style={tw`p-4 justify-start items-start mr-auto`}>
                    <Ionicons name="arrow-back" size={18} color="black" onPress={() => router.back()} style={tw`border-2 border-[#000] p-2 rounded-full`} />
                </View>
                <Text style={tw`text-[#000] text-3xl text-center`}>Sign Up</Text>
                <View style={tw`flex justify-center items-center gap-3 mt-20 p-4`}>
                    <TextInput
                        value={username}
                        onChangeText={(text: string) => setUsername(text)}
                        style={tw`border border-gray-300 rounded-md px-4 py-3 w-80`}
                        placeholder="Username"
                        autoCapitalize="none"
                    />
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
                    <TextInput
                        value={confirmPassword}
                        onChangeText={(text: string) => setConfirmPassword(text)}
                        style={tw`border border-gray-300 rounded-md px-4 py-3 w-80`}
                        placeholder="Confirm Password"
                        secureTextEntry={!isVisible}
                        autoCapitalize="none"
                    />

                    <Pressable onPress={() => handleRegister()} style={tw`flex-row justify-center items-center px-6 py-3 bg-[#fcf5d5] rounded-full mt-8 w-80`}>
                        <Text style={tw`text-[#000] text-base text-center`}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default SignUp;