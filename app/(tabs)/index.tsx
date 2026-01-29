import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "@/components/Home/Carousel";
import LocationAppBar from "@/components/Home/LocationAppBar";
import { ScrollView, View, Text } from "react-native";
import PostCard from "@/components/Home/PostCard";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useMemo, useRef } from "react";

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "60%","70%"], []);

  const openComments = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <SafeAreaView edges={[]}>
          <LocationAppBar />
        </SafeAreaView>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <Carousel />

          {/* ✅ Pass function to PostCard */}
          <PostCard onCommentPress={openComments} />
          <PostCard onCommentPress={openComments} />
        </ScrollView>

        {/* ✅ Global BottomSheet */}
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose
        >
          <BottomSheetView className="flex-1 px-4 py-2">
            <Text className="text-lg font-bold mb-3">Comments</Text>

            <View className="mb-3">
              <Text className="font-semibold">Zoya</Text>
              <Text className="text-gray-600">Super mahal 😍</Text>
            </View>

            <View className="mb-3">
              <Text className="font-semibold">Arun</Text>
              <Text className="text-gray-600">Booking easy bro 🔥</Text>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}
