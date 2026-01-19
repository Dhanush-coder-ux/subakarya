import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView, 
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Search, Play } from "lucide-react-native";

const { width } = Dimensions.get("window");

const COLUMN_WIDTH = width / 3;

const CATEGORIES = ["All", "Marriage", "Engagement", "Birthday", "Mehandi", "Baby Shower"];


const DATA = [
  { id: "1", uri: "https://picsum.photos/500/800", views: "1.2M", type: "reel", height: 250 },
  { id: "2", uri: "https://picsum.photos/500/500", views: "22K", type: "post", height: 130 },
  { id: "3", uri: "https://picsum.photos/500/700", views: "560K", type: "reel", height: 220 },
  { id: "4", uri: "https://picsum.photos/500/500", views: "14K", type: "post", height: 130 },
  { id: "5", uri: "https://picsum.photos/500/900", views: "2.1M", type: "reel", height: 280 },
  { id: "6", uri: "https://picsum.photos/500/500", views: "8K", type: "post", height: 130 },
  { id: "7", uri: "https://picsum.photos/500/600", views: "1.5M", type: "reel", height: 200 },
  { id: "8", uri: "https://picsum.photos/500/500", views: "10K", type: "post", height: 130 },
  { id: "9", uri: "https://picsum.photos/500/750", views: "100K", type: "reel", height: 240 },
];

export default function ExploreScreen() {
  const [activeCategory, setActiveCategory] = useState("All");
  const insets = useSafeAreaInsets();


  const col1 = DATA.filter((_, i) => i % 3 === 0);
  const col2 = DATA.filter((_, i) => i % 3 === 1);
  const col3 = DATA.filter((_, i) => i % 3 === 2);

  const AppBar = () => (
    <View style={{ paddingTop: insets.top + 10 }} className=" px-4 pb-4 rounded-b-3xl z-10 ">
      <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
        <Search size={20} color="gray" />
        <TextInput
          placeholder="Search"
          className="ml-3 flex-1 text-gray-700 font-medium h-10"
          placeholderTextColor="gray"
        />
      </View>
    </View>
  );

  const CategoryList = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-3 bg-white pl-4">
      {CATEGORIES.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => setActiveCategory(item)}
          className={`px-5 py-2 rounded-full mr-3 border ${
            activeCategory === item ? "bg-primary border-primary" : "bg-white border-gray-300"
          }`}
        >
          <Text className={`font-semibold ${activeCategory === item ? "text-white" : "text-gray-700"}`}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const GridCard = ({ item }) => (
    <TouchableOpacity 
      activeOpacity={0.9} 
      className="mb-1 bg-gray-200 relative border-[0.5px] border-white"
      style={{ width: COLUMN_WIDTH, height: item.type === 'reel' ? 220 : 130 }} 
    >
      <Image source={{ uri: item.uri }} className="w-full h-full" resizeMode="cover" />
      
      {item.type === "reel" && (
        <View className="absolute top-2 right-2 bg-black/30 rounded-full p-1">
          <Play size={12} color="white" fill="white" />
        </View>
      )}

      <View className="absolute bottom-2 left-2 flex-row items-center bg-black/30 px-1.5 py-0.5 rounded">
        <Play size={8} color="white" fill="white" />
        <Text className="text-white text-[10px] font-bold ml-1">{item.views}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white">
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
      {/* Fixed Header */}
      <AppBar />

      <ScrollView showsVerticalScrollIndicator={false}>

        <CategoryList />


        <View className="flex-row justify-between">
          
          {/* Column 1 */}
          <View className="flex-1">
            {col1.map((item) => <GridCard key={item.id} item={item} />)}
          </View>

          {/* Column 2 */}
          <View className="flex-1">
            {col2.map((item) => <GridCard key={item.id} item={item} />)}
          </View>

          {/* Column 3 */}
          <View className="flex-1">
            {col3.map((item) => <GridCard key={item.id} item={item} />)}
          </View>

        </View>
        
        {/* Padding for bottom tabs */}
        <View className="h-20" />
      </ScrollView>
    </View>
  );
}