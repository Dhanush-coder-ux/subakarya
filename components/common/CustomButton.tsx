import { Text, Pressable, ActivityIndicator } from "react-native";

export default function CustomButton({
  title = "Button",
  onPress,
  loading = false,
  disabled = false,
  variant = "primary",
  
}) {
  const baseStyle =
    "h-12 rounded-xl items-center justify-center";

  const variants = {
    primary: "bg-primary",
    secondary: "bg-primarySoft",
    outline: "border border-primary bg-transparent",
  };

  const textVariants = {
    primary: "text-white",
    secondary: "text-textPrimary",
    outline: "text-primary",
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={`${baseStyle} ${variants[variant]} ${
        disabled ? "opacity-50" : ""
      }`}
    >
        
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          className={`font-quicksand-bold text-base ${textVariants[variant]}`}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}
