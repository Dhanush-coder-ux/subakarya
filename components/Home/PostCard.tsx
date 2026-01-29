import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { Heart, MessageCircle, Share2 } from "lucide-react-native"; 
import { router } from "expo-router";
type PostCardProps = {
  onCommentPress?: () => void;
};

export default function PostCard({ onCommentPress }: PostCardProps) {

  // 1. STATE MANAGEMENT
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(57); // in thousands
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 0.1 : prev + 0.1); // Simple visual update
  };

  const handleBookNow = () => {
    router.push("/(booking)/BookingScreen");
  };

  return (
    <View className="flex-1 p-4 justify-center bg-gray-100">
      
      {/* CARD CONTAINER */}
      <View className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* 1. HEADER section */}
        <View className="flex-row items-center justify-between p-3">
          <View className="flex-row items-center gap-3">
            <Image 
              source={require("../../assets/images/dhanush.jpeg")}
              className="w-10 h-10 rounded-full bg-gray-200"
            />
            <View>
              <Text className="font-bold text-gray-800 text-base">Dhanush</Text>
              <Text className="text-xs text-gray-500">Chennai, India</Text>
            </View>
          </View>

          <TouchableOpacity 
            onPress={() => setIsFollowing(!isFollowing)}
            className={`rounded-full px-4 py-1 border ${isFollowing ? 'bg-gray-100 border-gray-300' : 'border-yellow-500'}`}
          >
            <Text className={`text-sm font-medium ${isFollowing ? 'text-gray-500' : 'text-gray-900'}`}>
              {isFollowing ? "Following" : "Follow"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* 2. MAIN IMAGE (Double tap to like could be added here) */}
        <TouchableOpacity activeOpacity={0.9} onPress={toggleLike}>
            <Image
            source={require("../../assets/images/dhanush.jpeg")} 
            className="w-full h-64 object-cover"
            />
        </TouchableOpacity>

        {/* 3. ACTION ROW */}
        <View className="flex-row items-center justify-between px-4 py-3">
          
          <View className="flex-row items-center gap-4">
            {/* Like Button */}
            <TouchableOpacity onPress={toggleLike} className="flex-row items-center gap-1">
              <Heart 
                fill={liked ? "#ef4444" : "none"} 
                color={liked ? "#ef4444" : "black"} 
                size={24} 
              />
              <Text className="text-gray-700 font-medium">{likeCount.toFixed(1)}k</Text>
            </TouchableOpacity>
            
            {/* Comment Button */}
            {/* Comment Button */} 
            <TouchableOpacity 
              onPress={onCommentPress}
              className="flex-row items-center gap-1"
            >
              <MessageCircle color="black" size={24} />
              <Text className="text-gray-700 font-medium">1k</Text>
            </TouchableOpacity>


            {/* Share Button */}
            <TouchableOpacity onPress={() => Alert.alert("Shared!", "Post link copied.")} className="flex-row items-center gap-1">
              <Share2 color="black" size={24} />
            </TouchableOpacity>
          </View>

          {/* Book Now Button */}
          <TouchableOpacity 
            onPress={handleBookNow}
            className="bg-[#EBC146] px-5 py-2 rounded-full active:opacity-70 shadow-sm"
          >
            <Text className="text-white font-bold text-sm">Book now</Text>
          </TouchableOpacity>

        </View>

        {/* 4. CAPTION */}
        <View className="px-4 pb-4">
            <Text className="text-gray-800 text-base">
                <Text className="font-bold">Dhanush </Text>
                The best mahal in chennai for grand weddings! ✨
            </Text>
        </View>

      </View>
    </View>
  );
}