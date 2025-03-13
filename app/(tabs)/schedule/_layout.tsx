import { Stack } from 'expo-router';
import { Calendar } from 'lucide-react-native';

export default function ScheduleLayout() {
  return (
    <Stack screenOptions={{
      headerTitleStyle: {
        fontFamily: 'Inter_600SemiBold',
      },
      headerLeft: () => <Calendar size={24} color="#E53E3E" style={{ marginLeft: 16 }} />,
    }}>
      <Stack.Screen 
        name="index"
        options={{
          title: 'Schedule Donation',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen 
        name="book"
        options={{
          title: 'Book Appointment',
          presentation: 'modal',
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen 
        name="confirmation"
        options={{
          title: 'Confirmation',
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
    </Stack>
  );
}