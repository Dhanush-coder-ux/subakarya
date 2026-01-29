import React, { useState, useRef } from 'react';
import { 
  View, 
  FlatList, 
  Image, 
  Dimensions, 
  Text, 
  Animated, 
  NativeSyntheticEvent, 
  NativeScrollEvent 
} from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_SIZE = width * 0.8; // Card takes 80% of screen width
const SPACING = 10;
const FULLSIZE = ITEM_SIZE + SPACING * 2;

const carouselData = [
  {
    id: '1',
    title: 'Mountain Escape',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    description: 'Explore the heights of nature.'
  },

  {
    id: '3',
    title: 'Ocean Breeze',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: 'Relax by the deep blue sea.'
  },
];

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / FULLSIZE);
    setActiveIndex(index);
  };

  const renderItem = ({ item, index }: { item: typeof carouselData[0], index: number }) => {
    // Input range for animations based on scroll position
    const inputRange = [
      (index - 1) * FULLSIZE,
      index * FULLSIZE,
      (index + 1) * FULLSIZE,
    ];

    // Scale effect: middle card is 1, side cards are 0.9
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });

    return (
      <View style={{ width: FULLSIZE }} className="items-center justify-center">
        <Animated.View 
          style={{ transform: [{ scale }] }}
          className="w-full bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <Image 
            source={{ uri: item.image }} // Switched to uri to use your data
            className="w-full h-48 object-cover"
          />
       
        </Animated.View>
      </View>
    );
  };

  return (
    <View className="mt-5">
      <Animated.FlatList
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULLSIZE} // Snaps to card center
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: (width - FULLSIZE) / 2 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true, listener: handleScroll }
        )}
        scrollEventThrottle={16}
      />

      {/* Modern Indicators */}
      <View className="flex-row justify-center mt-6 gap-1">
        {carouselData.map((_, index) => {
          const isActive = activeIndex === index;
          return (
            <View
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive ? "bg-primary w-8" : "bg-gray-300 w-2"
              }`}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Carousel;