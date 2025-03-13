import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { Droplet, Clock, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, FileText, Heart } from 'lucide-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function DonateScreen() {
  const handleStartDonation = () => {
    router.push('/donate/eligibility');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.heroSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=80' }}
          style={styles.heroImage}
        />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Save Lives Through Blood Donation</Text>
          <Text style={styles.heroSubtitle}>Your donation can help save up to 3 lives</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <Animated.View entering={FadeInUp.delay(200)} style={styles.statCard}>
          <Droplet size={24} color="#E53E3E" />
          <Text style={styles.statNumber}>3.5M</Text>
          <Text style={styles.statLabel}>Annual Donations</Text>
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(400)} style={styles.statCard}>
          <Heart size={24} color="#E53E3E" />
          <Text style={styles.statNumber}>10.5M</Text>
          <Text style={styles.statLabel}>Lives Saved</Text>
        </Animated.View>
      </View>

      <Animated.View entering={FadeInUp.delay(600)} style={styles.requirementsCard}>
        <Text style={styles.sectionTitle}>Basic Requirements</Text>
        <View style={styles.requirementItem}>
          <Clock size={20} color="#4A5568" />
          <View style={styles.requirementText}>
            <Text style={styles.requirementTitle}>Age 18-65 years</Text>
            <Text style={styles.requirementDesc}>Must be at least 18 years old</Text>
          </View>
        </View>
        <View style={styles.requirementItem}>
          <AlertCircle size={20} color="#4A5568" />
          <View style={styles.requirementText}>
            <Text style={styles.requirementTitle}>Weight above 50kg</Text>
            <Text style={styles.requirementDesc}>Minimum weight requirement</Text>
          </View>
        </View>
        <View style={styles.requirementItem}>
          <CheckCircle2 size={20} color="#4A5568" />
          <View style={styles.requirementText}>
            <Text style={styles.requirementTitle}>Good Health</Text>
            <Text style={styles.requirementDesc}>Free from serious medical conditions</Text>
          </View>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(800)} style={styles.processSection}>
        <Text style={styles.sectionTitle}>Donation Process</Text>
        <View style={styles.processStep}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>1</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Registration & Screening</Text>
            <Text style={styles.stepDesc}>Complete registration form and basic health check</Text>
          </View>
        </View>
        <View style={styles.processStep}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>2</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Medical History</Text>
            <Text style={styles.stepDesc}>Review your medical history and eligibility</Text>
          </View>
        </View>
        <View style={styles.processStep}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>3</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Donation</Text>
            <Text style={styles.stepDesc}>The actual donation takes about 10-15 minutes</Text>
          </View>
        </View>
      </Animated.View>

      <View style={styles.documentSection}>
        <Text style={styles.sectionTitle}>Required Documents</Text>
        <View style={styles.documentCard}>
          <FileText size={24} color="#4A5568" />
          <View style={styles.documentContent}>
            <Text style={styles.documentTitle}>Valid ID Proof</Text>
            <Text style={styles.documentDesc}>Government issued photo ID</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.startButton} onPress={handleStartDonation}>
        <Text style={styles.startButtonText}>Start Donation Process</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSection: {
    position: 'relative',
    height: 300,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  heroTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: '#fff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#fff',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFF5F5',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#E53E3E',
    marginTop: 8,
  },
  statLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4A5568',
    marginTop: 4,
  },
  requirementsCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#F7FAFC',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#2D3748',
    marginBottom: 16,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  requirementText: {
    flex: 1,
  },
  requirementTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#2D3748',
  },
  requirementDesc: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#718096',
    marginTop: 2,
  },
  processSection: {
    padding: 20,
  },
  processStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    gap: 16,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E53E3E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#2D3748',
  },
  stepDesc: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#718096',
    marginTop: 4,
  },
  documentSection: {
    padding: 20,
  },
  documentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 12,
  },
  documentContent: {
    flex: 1,
  },
  documentTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#2D3748',
  },
  documentDesc: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#718096',
    marginTop: 2,
  },
  startButton: {
    margin: 20,
    marginTop: 10,
    backgroundColor: '#E53E3E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
});