import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import tw from 'twrnc';

//object of courses
const courses = [
  { id: 1, name: 'CPE 501', description: 'introduction to prototyping' },
  { id: 2, name: 'CPE 502', description: 'Machine Learning using Artificial Intelligence' },
  { id: 3, name: 'CPE 503', description: 'Robotics and Animation' },
  { id: 4, name: 'CPE 504', description: 'Computer Science Course 504' },
  { id: 5, name: 'CPE 505', description: 'Computer Engineering Course 505' },
  { id: 6, name: 'CPE 506', description: 'Electrical Engineering Course 506' },
  { id: 7, name: 'CPE 507', description: 'Mechanical Engineering Course 507' },
  { id: 8, name: 'CPE 508', description: 'Software Engineering' },
]

export default function HomeScreen() {

  const router = useRouter(); // Using useRouter to navigate back

  return (
    <>
      <View style={tw`flex-1 justify-start items-center p-4 bg-[#fff]`}>
        <View style={tw`flex-row justify-between items-center w-full p-8`}>
          <Text style={tw`text-2xl text-[#000] text-left`}>Tutorial App</Text>
          <Ionicons name='globe' size={20} color={"#fcf5d5"} style={tw`rounded-full border-2 border-[#fcf5d5] p-2`} />
        </View>

        <View style={tw`flex justify-start items-start gap-4 w-full p-4`}>
          <Text style={tw`text-2xl text-[#000]`}>Tutorials Available</Text>

          <View style={tw`flex-row items-center justify-between gap-5 p-4 w-full`}>
            <FlatList
              data={courses}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <>
                  <Pressable onPress={() => router.push('/courses')} style={tw`flex items-center justify-between p-4 gap-3 bg-[#f0f0f0] rounded-xl shadow-md`}>
                    <Image source={require("../../assets/images/books.jpeg")} style={tw`w-32 h-32 rounded-md`} />
                    <View style={tw`flex-row items-center justify-between gap-6`}>
                      <Text style={tw`text-lg text-[#000] font-bold`}>{item.name}</Text>
                      <Ionicons name="chevron-forward" size={16} color="#000" />
                    </View>
                  </Pressable>
                </>
              )}
              horizontal={true}
              contentContainerStyle={tw`gap-4`}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={tw`flex justify-start items-start gap-4 w-full p-4`}>
          <Text style={tw`text-2xl text-[#000]`}>Active Tutorials</Text>

          <View style={tw`flex-row items-center justify-between gap-5 w-full p-4`}>
            <FlatList
              data={courses.length > 3 ? courses.slice(0, 3) : courses} //use data but limit the number to 3
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <>
                  <Pressable onPress={() => router.push('/courses/index')} style={tw`flex items-center justify-between p-4 gap-3 bg-[#f0f0f0] rounded-xl shadow-md`}>
                    <Image source={require("../../assets/images/books.jpeg")} style={tw`w-32 h-32 rounded-md`} />
                    <View style={tw`flex-row items-center justify-between gap-6`}>
                      <Text style={tw`text-lg text-[#000] font-bold`}>{item.name}</Text>
                      <Ionicons name="chevron-forward" size={16} color="#000" />
                    </View>
                  </Pressable>
                </>
              )}
              horizontal={true}
              contentContainerStyle={tw`gap-4`}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </>
  );
};