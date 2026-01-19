import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function SignIn() {
  const [form, setForm] = useState({  
    email: "",
    password: ""
  });

  const handleLogin = () => {
  // after successful login
  router.replace("/(tabs)");
};
  const { email, password } = form;

  return (
    <View className="gap-5 p-6 rounded-3xl mt-4">
    
      <CustomInput
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setForm}
        keyboardType="email-address"
      />

      <CustomInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setForm}
        secureTextEntry
      />

      <CustomButton title="Sign In" onPress={() => handleLogin()} />

      <View className="flex-row justify-center gap-1 mt-3">
        <Text className="text-textSecondary font-quicksand-regular">
          Don’t have an account?
        </Text>
        <Link
          href="/(auth)/sign-up"
          className="text-primary font-quicksand-semibold"
        >
          Sign up
        </Link>
      </View>
    </View>
  );
}
