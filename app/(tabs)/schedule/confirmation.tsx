import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { Calendar, MapPin, Clock, CircleCheck as CheckCircle2 } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function ConfirmationScreen() {
  const handleDone = () => {
    router.push('/schedule');
  };

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn} style={styles.content}>
        <View style={styles.header}>
          <CheckCircle2 size={64} color="#E53E3E" />
          <Text style={styles.title}>Appointment Confirmed!</Text>
          <Text style={styles.subtitle}>Thank you for scheduling your donation</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Appointment Details</Text>
          
          <View style={styles.detailRow}>
            <Calendar size={20} color="#4A5568" />
            <Text style={styles.detailText}>Thursday, Jan 15 2024</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Clock size={20} color="#4A5568" />
            <Text style={styles.detailText}>10:00 AM</Text>
          </View>
          
          <View style={styles.detailRow}>
            <MapPin size={20} color="#4A5568" />
            <Text style={styles.detailText}>Red Cross Blood Bank</Text>
          </View>
          
          <Text style={styles.address}>123 Medical Center Ave, Downtown</Text>
        </View>

        <View style={styles.qrContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=800&auto=format&fit=crop&q=80' }}
            style={styles.qrCode}
          />
          <Text style={styles.qrText}>Show this QR code at check-in</Text>
        </View>

        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 40,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#1A202C',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
  },
  card: {
    backgroundColor: '#F7FAFC',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#2D3748',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  detailText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#2D3748',
  },
  address: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4A5568',
    marginLeft: 32,
  },
  qrContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  qrCode: {
    width: 200,
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  qrText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#4A5568',
  },
  doneButton: {
    backgroundColor: '#E53E3E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 'auto',
  },
  doneButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
});