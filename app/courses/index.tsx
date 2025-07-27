import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { useVideoPlayer, VideoView } from 'expo-video';
import tw from 'twrnc';
import { useEvent } from 'expo';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Courses = () => {

    //router
    const router = useRouter();

    //video source 
    const videoSource = "https://www.youtube.com/watch?v=avZTQgLs064&pp=ygUaY29tcHV0ZXIgZW5naW5lZXJpbmcgY2xhc3M%3D";
    //function for video tutorial
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.muted = true;
        player.play();
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    return (
        <>
            <ScrollView style={tw`flex-1 h-full bg-[#fff]`}>
                <View style={tw`flex-1 justify-start items-center p-8`}>
                    <View style={tw`p-4 justify-start items-start mr-auto`}>
                        <Ionicons name="arrow-back" size={18} color="black" onPress={() => router.back()} style={tw`border-2 border-[#000] p-2 rounded-full`} />
                    </View>
                    <Text style={tw`text-2xl text-[#000] text-left`}>Tutorial</Text>

                    <VideoView
                        style={tw`w-full h-64 mt-4 rounded-lg`}
                        player={player}
                    />
                    <Text style={tw`text-sm text-[#555] mt-2`}>
                        {isPlaying ? "Video is playing" : "Video is paused"}
                    </Text>

                    <VideoView
                        style={tw`w-full h-64 mt-4 rounded-lg`}
                        player={player}
                    />
                    <Text style={tw`text-sm text-[#555] mt-2`}>
                        {isPlaying ? "Video is playing" : "Video is paused"}
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

export default Courses;