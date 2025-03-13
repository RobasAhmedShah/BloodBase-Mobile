import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { Calendar, MapPin, Clock, CircleAlert as AlertCircle } from 'lucide-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function ScheduleScreen() {
  const upcomingAppointment = {
    date: 'Tomorrow, 10:00 AM',
    location: 'City Blood Bank',
    address: '123 Medical Center Ave',
    status: 'Confirmed'
  };

  const handleBookAppointment = () => {
    router.push('/schedule/book');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Schedule Your Next Donation</Text>
        <Text style={styles.subtitle}>Save lives by donating blood regularly</Text>
      </View>

      <View style={styles.eligibilityCard}>
        <View style={styles.eligibilityHeader}>
          <AlertCircle size={24} color="#E53E3E" />
          <Text style={styles.eligibilityTitle}>Next Eligible Date</Text>
        </View>
        <Text style={styles.eligibilityDate}>January 15, 2024</Text>
        <Text style={styles.eligibilityNote}>You can donate blood every 56 days</Text>
      </View>

      {upcomingAppointment && (
        <Animated.View entering={FadeInUp.delay(200)} style={styles.upcomingCard}>
          <Text style={styles.upcomingTitle}>Upcoming Appointment</Text>
          <View style={styles.appointmentDetails}>
            <View style={styles.detailRow}>
              <Calendar size={20} color="#4A5568" />
              <Text style={styles.detailText}>{upcomingAppointment.date}</Text>
            </View>
            <View style={styles.detailRow}>
              <MapPin size={20} color="#4A5568" />
              <Text style={styles.detailText}>{upcomingAppointment.location}</Text>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{upcomingAppointment.status}</Text>
            </View>
          </View>
        </Animated.View>
      )}

      <View style={styles.nearbySection}>
        <Text style={styles.sectionTitle}>Nearby Blood Banks</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.banksScroll}>
          {[1, 2, 3].map((_, index) => (
            <TouchableOpacity key={index} style={styles.bankCard} onPress={handleBookAppointment}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80' }}
                style={styles.bankImage}
              />
              <View style={styles.bankInfo}>
                <Text style={styles.bankName}>Red Cross Blood Bank</Text>
                <View style={styles.bankDetail}>
                  <Clock size={16} color="#4A5568" />
                  <Text style={styles.bankTime}>Open 9AM - 5PM</Text>
                </View>
                <View style={styles.bankDetail}>
                  <MapPin size={16} color="#4A5568" />
                  <Text style={styles.bankDistance}>2.5 km away</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.bookButton} onPress={handleBookAppointment}>
        <Text style={styles.bookButtonText}>Book New Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 20,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#1A202C',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
  },
  eligibilityCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#FFF5F5',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FED7D7',
  },
  eligibilityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  eligibilityTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#E53E3E',
    marginLeft: 8,
  },
  eligibilityDate: {
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    color: '#1A202C',
    marginBottom: 4,
  },
  eligibilityNote: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4A5568',
  },
  upcomingCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#F7FAFC',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  upcomingTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#2D3748',
    marginBottom: 16,
  },
  appointmentDetails: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
  },
  statusBadge: {
    backgroundColor: '#C6F6D5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  statusText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#2F855A',
  },
  nearbySection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#2D3748',
    marginLeft: 20,
    marginBottom: 16,
  },
  banksScroll: {
    paddingLeft: 20,
  },
  bankCard: {
    width: 280,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
  },
  bankImage: {
    width: '100%',
    height: 150,
  },
  bankInfo: {
    padding: 16,
  },
  bankName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#2D3748',
    marginBottom: 8,
  },
  bankDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 6,
  },
  bankTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4A5568',
  },
  bankDistance: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4A5568',
  },
  bookButton: {
    margin: 20,
    backgroundColor: '#E53E3E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 40,
  },
  bookButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
});