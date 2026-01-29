import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { ArrowBigLeft, ArrowLeft } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState('03');
  const [selectedTime, setSelectedTime] = useState('09:00 AM');
  const insets = useSafeAreaInsets();

  const dates = [
    { day: 'SAT', date: '03' }, { day: 'FRI', date: '04' },
    { day: 'THU', date: '05' }, { day: 'SAT', date: '06' },
    { day: 'SAT', date: '07' }, { day: 'SAT', date: '08' },
  ];

  const times = ['09:00 AM', '11:00 AM', '05:35 PM', '07:00 PM'];

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View style={{ paddingTop: insets.top + 8 }} className="flex-row items-center justify-between px-4 py-3">
        <TouchableOpacity className="flex-row items-center">
          <ArrowLeft name="arrowleft" size={24} color="black" />
          <Text className="ml-4 text-lg font-bold">DR Grand Mahal</Text>
        </TouchableOpacity>
        <Ionicons name="calendar-outline" size={24} color="black" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Horizontal Date Picker */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-4 border-b border-gray-100">
          {dates.map((item, index) => (
            <TouchableOpacity 
              key={index}
              onPress={() => setSelectedDate(item.date)}
              className={`items-center mx-2 p-3 rounded-lg w-14 ${selectedDate === item.date ? 'bg-yellow-400' : 'bg-transparent'}`}
            >
              <Text className="text-xs font-semibold">{item.day}</Text>
              <Text className="text-xl font-bold">{item.date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Timing Section */}
        <View className="m-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <Text className="text-lg font-bold">Timing of booking</Text>
          <Text className="text-gray-400 text-xs mb-4">Cancelation available</Text>
          
          <View className="flex-row flex-wrap justify-between">
            {times.map((time) => (
              <TouchableOpacity 
                key={time}
                onPress={() => setSelectedTime(time)}
                className={`w-[48%] py-4 mb-3 border-2 items-center rounded-lg ${selectedTime === time ? 'border-l-8 border-r-8 border-yellow-400 bg-white' : 'border-gray-200 bg-white'}`}
              >
                <Text className="font-semibold">{time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Reviews Section */}
        <View className="px-4 mt-4">
          <Text className="text-lg font-bold">Customer reviews</Text>
          <View className="flex-row items-center my-2">
            {[1, 2, 3, 4].map(s => <FontAwesome key={s} name="star" size={16} color="#fbbf24" />)}
            <FontAwesome name="star-o" size={16} color="#fbbf24" />
            <Text className="ml-2 text-gray-500">4 out of 5 ratings</Text>
          </View>

          <Text className="text-lg font-bold mt-4">Review froms customers</Text>
          
          <View className="mt-4 flex-row">
            <View className="w-10 h-10 bg-gray-200 rounded-full items-center justify-center">
               <AntDesign name="user" size={20} color="gray" />
            </View>
            <View className="flex-1 ml-3">
              <Text className="text-gray-600 leading-5">
                Indha mandabam romba clean and neat ah irundhuchi aprm indha app romba easy to booking...
              </Text>
              <View className="flex-row mt-2">
                {[1, 2, 3, 4].map(s => <FontAwesome key={s} name="star" size={12} color="#fbbf24" />)}
                <Text className="ml-2 text-xs text-gray-400">4 out of 5 ratings</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity className="flex-row items-center justify-center py-6">
            <Text className="font-bold mr-1">See all reviews</Text>
            <AntDesign name="down" size={14} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingScreen;