import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Droplet, Calendar, MapPin, CircleAlert as AlertCircle } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Sarah</Text>
        <Text style={styles.subtitle}>Ready to save lives today?</Text>
      </View>

      <View style={styles.emergencyButton}>
        <AlertCircle size={24} color="#E53E3E" />
        <Text style={styles.emergencyText}>Emergency Blood Request</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Lives Saved</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>A+</Text>
          <Text style={styles.statLabel}>Blood Type</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>Donations</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsGrid}>
        <TouchableOpacity style={styles.actionCard}>
          <View style={[styles.actionIcon, { backgroundColor: '#FED7D7' }]}>
            <Droplet size={24} color="#E53E3E" />
          </View>
          <Text style={styles.actionText}>Donate Blood</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <View style={[styles.actionIcon, { backgroundColor: '#C4F1F9' }]}>
            <Calendar size={24} color="#00A3C4" />
          </View>
          <Text style={styles.actionText}>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <View style={[styles.actionIcon, { backgroundColor: '#FEEBC8' }]}>
            <MapPin size={24} color="#DD6B20" />
          </View>
          <Text style={styles.actionText}>Find Banks</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Upcoming Appointment</Text>
      <View style={styles.appointmentCard}>
        <View style={styles.appointmentHeader}>
          <Text style={styles.appointmentTitle}>Blood Donation</Text>
          <View style={styles.appointmentBadge}>
            <Text style={styles.appointmentBadgeText}>Confirmed</Text>
          </View>
        </View>
        <Text style={styles.appointmentDate}>Tomorrow, 10:00 AM</Text>
        <Text style={styles.appointmentLocation}>City Blood Bank, Downtown</Text>
      </View>
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
    paddingTop: 60,
  },
  greeting: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: '#1A202C',
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
    marginTop: 4,
  },
  emergencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FED7D7',
  },
  emergencyText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#E53E3E',
    marginLeft: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#2D3748',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4A5568',
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#2D3748',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    paddingTop: 0,
  },
  actionCard: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: '5%',
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  actionCard: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: '5%',
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#2D3748',
    textAlign: 'center',
  },
  appointmentCard: {
    margin: 20,
    padding: 16,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  appointmentTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#2D3748',
  },
  appointmentBadge: {
    backgroundColor: '#C6F6D5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  appointmentBadgeText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: '#2F855A',
  },
  appointmentDate: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4A5568',
    marginBottom: 4,
  },
  appointmentLocation: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#718096',
  },
});