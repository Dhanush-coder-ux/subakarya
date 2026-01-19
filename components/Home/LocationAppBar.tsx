import { View, Text, TouchableOpacity } from "react-native";
import { MapPin, ChevronDown, Bell } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LocationAppBar() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top + 8 }}
      className="bg-primary px-4 pb-6 rounded-b-3xl"
    >
        
      <View className="flex-row items-center justify-between">
        <TouchableOpacity className="flex-row items-center gap-1">
          <MapPin size={18} color="#fff" />
          <Text className="font-quicksand-bold text-xl text-white">
            Madurai
          </Text>
          <ChevronDown size={16} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Bell size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text
        numberOfLines={1}
        className="font-quicksand-medium text-xs text-white/90 mt-1"
      >
        Sri Srinivasa nagar alamathi road, avadi
      </Text>
    </View>
  );
}
