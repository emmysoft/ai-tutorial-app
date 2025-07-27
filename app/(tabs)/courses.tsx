import { View, Text, ScrollView } from 'react-native'
import React from 'react'
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
const CoursesScreen = () => {
    return (
        <>
            <ScrollView style={tw`flex-1 h-full`}>
                <View style={tw`flex justify-start items-center bg-[#fff] p-4`}>
                    <Text style={tw`text-2xl text-[#000] mt-8`}>Courses</Text>

                    <View style={tw`flex justify-start items-start gap-4 w-full p-4`}>
                        {courses.map((course) => (
                            <View key={course.id} style={tw`p-4 bg-[#fcf5d5] rounded-xl shadow-md w-full`}>
                                <Text style={tw`text-lg text-[#000] font-bold`}>{course.name}</Text>
                                <Text style={tw`text-sm text-[#555]`}>{course.description}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default CoursesScreen;