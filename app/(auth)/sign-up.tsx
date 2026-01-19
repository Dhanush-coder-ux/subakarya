import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import { Link } from "expo-router";
import { useState } from "react";

import { Text, View } from "react-native";

export default function SignUp() {
 
  const [ form, setForm ] = useState({
    name:"",
    email:"",
    password:""
  });

  return (
    <View className="gap-5 p-6 rounded-3xl">
    

      <CustomInput
        label="Full Name"
        placeholder="Enter your full name"
        value={form.name}
        onChangeText={setForm}
      />

      <CustomInput
        label="Email"
        placeholder="Enter your email"
        value={form.email}
        onChangeText={setForm}
        keyboardType="email-address"
      />

      <CustomInput
        label="Password"
        placeholder="Create a password"
        value={form.password}
        onChangeText={setForm}
        secureTextEntry
      />

      <CustomButton title="Sign Up" onPress={() => {}} />

      <View className="flex-row justify-center gap-1 mt-3">
        <Text className="text-textSecondary font-quicksand-regular">
          Already have an account?
        </Text>
        <Link
          href="/(auth)/sign-in"
          className="text-primary font-quicksand-semibold"
        >
          Sign in
        </Link>
      </View>
    </View>
  );
}
