import React, { useState, } from 'react';
import { View,  FlatList, Image, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';


const { width } = Dimensions.get('window');


const carouselData = [
  {
    id: '1',
    title: 'Mountain Escape',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    description: 'Explore the heights of nature.'
  },
  {
    id: '2',
    title: 'Urban Jungle',
    image: 'https://images.unsplash.com/photo-1449824913929-4bca4280d965?auto=format&fit=crop&w=800&q=80',
    description: 'Discover the city lights.'
  },
  {
    id: '3',
    title: 'Ocean Breeze',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: 'Relax by the deep blue sea.'
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

 
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };


  const renderItem = ({ item }: { item: typeof carouselData[0] }) => {
    return (
      <View style={{ width: width }} className="justify-center items-center p-3">
        <View className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
                source={require("../../assets/images/c.webp")} 
                className="w-full h-48 object-cover"
            />
        </View>
      </View>
    );
  };

return (
  <View className="items-center bg-gray-100">
    <View className="h-72">
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </View>

    <View className="flex-row justify-center  gap-1">
      {carouselData.map((_, index) => (
        <View
          key={index}
          className={`h-3 rounded-full ${
            activeIndex === index ? "bg-primary w-6" : "bg-gray-300 w-3"
          }`}
        />
      ))}
    </View>
  </View>
);
}
export default Carousel;