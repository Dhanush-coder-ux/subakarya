import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Heart, MessageCircle, Share, MoreVertical, Share2 } from "lucide-react-native"; 

export default function PostCard() {
  return (
    <View className="flex-1 p-4 justify-center">
      
      {/* CARD CONTAINER */}
      <View className="bg-white rounded-2xl border border-primary  shadow-sm overflow-hidden">
        
        {/* 1. HEADER section */}
        <View className="flex-row items-center justify-between p-3">
          <View className="flex-row items-center gap-3">
            {/* Avatar */}
            <Image 
              source={require("../../assets/images/dhanush.jpeg") }
              className="w-10 h-10 rounded-full bg-gray-200"
            />
            <Text className="font-quicksand-semibold text-gray-800 text-base">
              Dhanush
            </Text>
          </View>

          <TouchableOpacity className="border border-yellow-500 rounded-full px-4 py-1">
            <Text className="text-gray-900 font-quicksand-medium text-sm">Follow</Text>
          </TouchableOpacity>
        </View>

        {/* 2. MAIN IMAGE */}
        <Image
          source={require("../../assets/images/dhanush.jpeg")} 
          className="w-full h-64 object-cover"
        />

        {/* 3. ACTION ROW (Likes & Book Now) */}
        <View className="flex-row items-center justify-between px-4 py-3">
          
          {/* Left Side: Icons & Stats */}
          <View className="flex-row items-center gap-4">
            <View className="flex-row items-center gap-1">
              <Heart color="black" size={22} />
              <Text className="text-gray-700 font-quicksand-medium">57k</Text>
            </View>
            
            <View className="flex-row items-center gap-1">
              <MessageCircle color="black" size={22} />
              <Text className="text-gray-700 font-quicksand-medium">1k</Text>
            </View>

            <View className="flex-row items-center gap-1">
              <Share2 color="black" size={22} />
              <Text className="text-gray-700 font-quicksand-medium">39k</Text>
            </View>
          </View>

          {/* Right Side: Book Now Button */}
          <TouchableOpacity className="bg-[#EBC146] px-5 py-2 rounded-full shadow-sm">
            <Text className="text-white font-quicksand-bold text-sm">Book now</Text>
          </TouchableOpacity>

        </View>

        {/* 4. CAPTION */}
        <View className="px-4 pb-4">
            <Text className="text-gray-800 text-base font-medium">
                The best mahal in chennai .........
            </Text>
        </View>

      </View>
    </View>
  );
}