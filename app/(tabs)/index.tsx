import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function HomeScreen() {
  return (
  <>
    <View style={tw`flex-1 justify-start items-center p-4`}>
      <View style={tw`flex-row justify-between items-center p-4`}>
        <Text style={tw`text-2xl text-[#000] text-left`}>Welcome</Text>
        <Ionicons name='globe' size={20} color={"#fcf5d5"}/>
      </View>

      <View style={tw`flex justify-start items-start gap-4 p-4`}>
        <Text style={tw`text-2xl text-[#000] text-left`}>Courses Available</Text>
      </View>
    </View>
  </>
  );
};