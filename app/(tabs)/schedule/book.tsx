import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Calendar, Clock, MapPin } from 'lucide-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM'
];

export default function BookScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleConfirm = () => {
    router.push('/schedule/confirmation');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selected Location</Text>
        <View style={styles.locationCard}>
          <Text style={styles.locationName}>Red Cross Blood Bank</Text>
          <View style={styles.locationDetail}>
            <MapPin size={16} color="#4A5568" />
            <Text style={styles.locationText}>123 Medical Center Ave</Text>
          </View>
          <View style={styles.locationDetail}>
            <Clock size={16} color="#4A5568" />
            <Text style={styles.locationText}>Open 9AM - 5PM</Text>
          </View>
        </View>
      </View>

      <Animated.View entering={FadeInUp.delay(200)} style={styles.section}>
        <Text style={styles.sectionTitle}>Select Date</Text>
        <View style={styles.dateGrid}>
          {[...Array(5)].map((_, index) => {
            const date = new Date();
            date.setDate(date.getDate() + index);
            const dateStr = date.toLocaleDateString('en-US', { 
              weekday: 'short',
              day: 'numeric',
              month: 'short'
            });
            
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dateCard,
                  selectedDate === dateStr && styles.selectedDate
                ]}
                onPress={() => setSelectedDate(dateStr)}
              >
                <Text style={[
                  styles.dateText,
                  selectedDate === dateStr && styles.selectedDateText
                ]}>{dateStr}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(400)} style={styles.section}>
        <Text style={styles.sectionTitle}>Select Time</Text>
        <View style={styles.timeGrid}>
          {timeSlots.map((time, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeCard,
                selectedTime === time && styles.selectedTime
              ]}
              onPress={() => setSelectedTime(time)}
            >
              <Text style={[
                styles.timeText,
                selectedTime === time && styles.selectedTimeText
              ]}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>

      <TouchableOpacity 
        style={[
          styles.confirmButton,
          (!selectedDate || !selectedTime) && styles.disabledButton
        ]}
        onPress={handleConfirm}
        disabled={!selectedDate || !selectedTime}
      >
        <Text style={styles.confirmButtonText}>Confirm Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#2D3748',
    marginBottom: 16,
  },
  locationCard: {
    padding: 16,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  locationName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#2D3748',
    marginBottom: 8,
  },
  locationDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 8,
  },
  locationText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4A5568',
  },
  dateGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  dateCard: {
    flex: 1,
    minWidth: '18%',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#F7FAFC',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  selectedDate: {
    backgroundColor: '#E53E3E',
    borderColor: '#E53E3E',
  },
  dateText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#4A5568',
    textAlign: 'center',
  },
  selectedDateText: {
    color: '#fff',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  timeCard: {
    width: '22%',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#F7FAFC',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  selectedTime: {
    backgroundColor: '#E53E3E',
    borderColor: '#E53E3E',
  },
  timeText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#4A5568',
  },
  selectedTimeText: {
    color: '#fff',
  },
  confirmButton: {
    margin: 20,
    backgroundColor: '#E53E3E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#CBD5E0',
  },
  confirmButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
});