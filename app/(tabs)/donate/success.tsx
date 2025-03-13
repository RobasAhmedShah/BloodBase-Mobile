import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { CircleCheck as CheckCircle2, Calendar, MapPin, FileText } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function SuccessScreen() {
  const handleViewAppointment = () => {
    router.push('/schedule');
  };

  const handleDone = () => {
    router.push('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn} style={styles.content}>
        <View style={styles.header}>
          <CheckCircle2 size={64} color="#48BB78" />
          <Text style={styles.title}>Registration Complete!</Text>
          <Text style={styles.subtitle}>Thank you for choosing to donate blood</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Appointment Details</Text>
          
          <View style={styles.detailRow}>
            <Calendar size={20} color="#4A5568" />
            <Text style={styles.detailText}>Thursday, Jan 15 2024 at 10:00 AM</Text>
          </View>
          
          <View style={styles.detailRow}>
            <MapPin size={20} color="#4A5568" />
            <Text style={styles.detailText}>Red Cross Blood Bank</Text>
          </View>
          
          <Text style={styles.address}>123 Medical Center Ave, Downtown</Text>
        </View>

        <View style={styles.instructionsCard}>
          <FileText size={24} color="#4A5568" />
          <Text style={styles.instructionsTitle}>Pre-donation Instructions</Text>
          <View style={styles.instructionsList}>
            <Text style={styles.instruction}>• Get adequate sleep the night before</Text>
            <Text style={styles.instruction}>• Eat a healthy meal before donation</Text>
            <Text style={styles.instruction}>• Drink plenty of water</Text>
            <Text style={styles.instruction}>• Bring a valid photo ID</Text>
          </View>
        </View>

        <View style={styles.certificateContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&auto=format&fit=crop&q=80' }}
            style={styles.certificateImage}
          />
          <Text style={styles.certificateText}>Your donation certificate will be available after completion</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.viewButton} onPress={handleViewAppointment}>
            <Text style={styles.viewButtonText}>View Appointment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
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
    color: '#48BB78',
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
  instructionsCard: {
    backgroundColor: '#F7FAFC',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  instructionsTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#2D3748',
    marginTop: 12,
    marginBottom: 16,
  },
  instructionsList: {
    width: '100%',
  },
  instruction: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
    marginBottom: 8,
  },
  certificateContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  certificateImage: {
    width: 200,
    height: 150,
    borderRadius: 16,
    marginBottom: 16,
  },
  certificateText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4A5568',
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 12,
  },
  viewButton: {
    backgroundColor: '#F7FAFC',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  viewButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#2D3748',
    fontSize: 16,
  },
  doneButton: {
    backgroundColor: '#E53E3E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  doneButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
});