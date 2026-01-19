
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "@/components/Home/Carousel";
import LocationAppBar from "@/components/Home/LocationAppBar";
import { ScrollView, View } from "react-native";
import PostCard from "@/components/Home/PostCard";



export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView edges={[]}>

        <LocationAppBar />
      </SafeAreaView>
      <ScrollView
      showsVerticalScrollIndicator={false}
      
       contentContainerStyle={{ paddingBottom: 100 }}>
        <Carousel />
       <PostCard/>
       <PostCard/>
       <PostCard/>
       <PostCard/>
      </ScrollView>

    </View>
  );
}
