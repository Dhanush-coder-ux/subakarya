import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function CustomInput({
  label,
  placeholder = "Enter text",
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",

}) {
  return (
    <View className="mb-6">
  
      <View className="flex-row justify-between items-center mb-1">
        {label && (
          <Text className="text-primary font-quicksand-medium text-sm">
            {label}
          </Text>
        )}
        
      </View>

    
      <TextInput
        className="border-b border-gray-300 py-2 px-0 text-base text-black font-quicksand-regular"
        placeholder={placeholder}
        placeholderTextColor="#9E9E9E"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
}