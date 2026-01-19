import { Slot } from "expo-router";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";



export default function AuthLayout() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
     <ScrollView
  contentContainerStyle={{ flexGrow: 1 }}
  keyboardShouldPersistTaps="handled"
  showsVerticalScrollIndicator={false}
  className="bg-white"
>
        <View  style={{height:Dimensions.get("screen").height / 2.25}} className="relative">
          <ImageBackground
            source={require("../../assets/images/Event.png")}
            resizeMode="cover"
            className="flex-1 justify-end"
          >
            
            <View className="absolute inset-0 bg-primary/20" />
     
            <View className="absolute -bottom-20 left-[-20%] w-[140%] h-40 bg-white rounded-t-[200px]" />
          </ImageBackground>

     
          <View className="absolute -bottom-14 left-0 right-0 items-center">
            <View className="bg-white rounded-full p-2 shadow-xl elevation-5">
              <Image
                source={require("../../assets/images/logo.png")}
                className="w-28 h-28 rounded-full"
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        <View className="flex-1 px-6 pt-20 pb-10">
          <Slot />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
