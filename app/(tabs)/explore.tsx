import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Play, Heart } from 'lucide-react-native';


const { width } = Dimensions.get('window');

// --- 1. Data Setup ---
const CATEGORIES = ["All", "Marriage", "Engagement", "Birthday", "Mehandi", "Baby Shower"];

const EXPLORE_DATA = [
  { id: 1, uri: 'https://picsum.photos/400/600', heightRatio: 1.5, views: '1.2M', type: 'reel' },
  { id: 2, uri: 'https://picsum.photos/400/400', heightRatio: 1, views: '12K', type: 'post' },
  { id: 3, uri: 'https://picsum.photos/400/500', heightRatio: 1.2, views: '45K', type: 'reel' },
  { id: 4, uri: 'https://picsum.photos/400/700', heightRatio: 1.7, views: '890K', type: 'reel' },
  { id: 5, uri: 'https://picsum.photos/400/400', heightRatio: 1, views: '30K', type: 'post' },
  { id: 6, uri: 'https://picsum.photos/400/600', heightRatio: 1.5, views: '100K', type: 'reel' },
  { id: 7, uri: 'https://picsum.photos/400/300', heightRatio: 0.8, views: '5K', type: 'post' },
  { id: 9, uri: 'https://picsum.photos/400/300', heightRatio: 0.8, views: '5K', type: 'post' },
  { id: 8, uri: 'https://picsum.photos/400/550', heightRatio: 1.4, views: '2.1M', type: 'reel' },
];

export default function ExploreScreen() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Split data for Masonry Layout
  const leftColumn = EXPLORE_DATA.filter((_, i) => i % 2 === 0);
  const rightColumn = EXPLORE_DATA.filter((_, i) => i % 2 !== 0);

  // --- Components ---

  const SearchHeader = () => (
    <View className="px-4 pb-2">
      {/* Search Input */}
      <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3 mb-4 border border-gray-200">
        <Search color="gray" size={20} />
        <TextInput 
          placeholder="Search for events, ideas..." 
          className="flex-1 ml-3 text-gray-700 font-medium"
          placeholderTextColor="gray"
        />
      </View>
    

      {/* Filter Chips */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="mb-2"
      >
        {CATEGORIES.map((cat) => (
          <TouchableOpacity 
            key={cat} 
            onPress={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full mr-3 border ${
              activeCategory === cat 
                ? 'bg-primary border-primary' // Active: Yellow
                : 'bg-white border-gray-300'  // Inactive: White with border
            }`}
          >
            <Text className={`font-bold ${
              activeCategory === cat ? 'text-black' : 'text-gray-600'
            }`}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  const GridCard = ({ item }) => (
    <TouchableOpacity 
      activeOpacity={0.9}
      className="mb-3 rounded-xl overflow-hidden relative bg-gray-200"
      style={{ height: (width / 2 - 24) * item.heightRatio }}
    >
      <Image 
        source={{ uri: item.uri }} 
        className="w-full h-full"
        resizeMode="cover"
      />
      
      {/* Dark Gradient Overlay for text readability */}
      <View className="absolute bottom-0 w-full h-16 bg-black/30" /> 

      {/* Type Icon (Reel/Video) */}
      {item.type === 'reel' && (
        <View className="absolute top-2 right-2 bg-black/20 p-1.5 rounded-full backdrop-blur-sm">
          <Play fill="white" color="white" size={12} />
        </View>
      )}

      {/* Stats overlay */}
      <View className="absolute bottom-3 left-3 flex-row items-center">
        <Play fill="white" color="white" size={10} />
        <Text className="text-white text-[10px] font-bold ml-1">{item.views}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <StatusBar barStyle="dark-content" />
      
      {/* We nest the Header INSIDE the ScrollView so it scrolls up 
         when the user looks at images, giving more screen space.
      */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }} // Space for Bottom Nav
        stickyHeaderIndices={[0]} // Optional: Makes the search bar stick to top
      >
        {/* Index 0: Header Section (Search + Chips) */}
        <View className="bg-white pt-2">
           <SearchHeader />
        </View>

        {/* Index 1: Masonry Grid */}
        <View className="flex-row px-4 justify-between pt-2">
          {/* Left Column */}
          <View style={{ width: '48%' }}>
            {leftColumn.map(item => <GridCard key={item.id} item={item} />)}
          </View>
          {/* Right Column */}
          <View style={{ width: '48%' }}>
            {rightColumn.map(item => <GridCard key={item.id} item={item} />)}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}