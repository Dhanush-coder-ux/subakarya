import { Redirect, Tabs } from "expo-router";
import { Home, Compass, Calendar, User } from "lucide-react-native";

export default function TabsLayout() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:"#F4B400",
        tabBarInactiveTintColor: "#9ca3af",
        // tabBarShowLabel:false,
        headerShown: false,
        tabBarStyle:{
          borderTopLeftRadius :50,
          borderTopRightRadius :50,
          borderBottomLeftRadius :50,
          borderBottomRightRadius :50,
          marginHorizontal:20,
          height:60,
          position:"absolute",
          bottom:15,
          shadowColor:"#1a1a1a",
          shadowOffset:{ width :0,height:2},
          shadowOpacity:0.1,
          shadowRadius:4,
          elevation:5
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Compass color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Booking"
        options={{
          title: "Booking",
          tabBarIcon: ({ color, size }) => (
            <Calendar color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
