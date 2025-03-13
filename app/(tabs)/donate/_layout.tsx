import { Stack } from 'expo-router';
import { Droplet } from 'lucide-react-native';

export default function DonateLayout() {
  return (
    <Stack screenOptions={{
      headerTitleStyle: {
        fontFamily: 'Inter_600SemiBold',
      },
      headerLeft: () => <Droplet size={24} color="#E53E3E" style={{ marginLeft: 16 }} />,
    }}>
      <Stack.Screen 
        name="index"
        options={{
          title: 'Donate Blood',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen 
        name="eligibility"
        options={{
          title: 'Eligibility Check',
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen 
        name="personal-info"
        options={{
          title: 'Personal Information',
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen 
        name="medical-history"
        options={{
          title: 'Medical History',
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen 
        name="consent"
        options={{
          title: 'Consent Form',
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen 
        name="success"
        options={{
          title: 'Registration Complete',
          headerShown: false,
        }}
      />
    </Stack>
  );
}