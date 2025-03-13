import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { FileText, CircleCheck as CheckCircle2, CircleAlert as AlertCircle } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const CONSENT_SECTIONS = [
  {
    id: 'procedure',
    title: 'Donation Procedure',
    content: 'I understand that blood donation involves the collection of blood through a sterile, single-use needle, and the process takes approximately 10-15 minutes.',
  },
  {
    id: 'risks',
    title: 'Potential Risks',
    content: 'I acknowledge that while blood donation is generally safe, there may be minor side effects such as bruising, dizziness, or fainting. Serious complications are extremely rare.',
  },
  {
    id: 'testing',
    title: 'Blood Testing',
    content: 'I agree that my donated blood will be tested for various infectious diseases, and I will be notified if any significant findings are discovered.',
  },
  {
    id: 'privacy',
    title: 'Privacy & Data Use',
    content: 'I consent to the collection and storage of my personal and medical information for the purposes of blood donation and future eligibility screening.',
  },
  {
    id: 'emergency',
    title: 'Emergency Contact',
    content: 'I authorize the blood bank to contact my designated emergency contact in case of any complications during or after the donation process.',
  },
];

export default function ConsentScreen() {
  const [acceptedSections, setAcceptedSections] = useState<Record<string, boolean>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleToggleSection = (id: string) => {
    setAcceptedSections(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allSectionsAccepted = CONSENT_SECTIONS.every(section => acceptedSections[section.id]);

  const handleSubmit = () => {
    if (allSectionsAccepted) {
      setShowSuccess(true);
      setTimeout(() => {
        router.push('/donate/success');
      }, 2000);
    }
  };

  if (showSuccess) {
    return (
      <Animated.View 
        entering={FadeIn}
        style={styles.successContainer}
      >
        <CheckCircle2 size={64} color="#48BB78" />
        <Text style={styles.successTitle}>Consent Confirmed</Text>
        <Text style={styles.successMessage}>
          Thank you for completing the consent process. We're preparing your registration...
        </Text>
      </Animated.View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <FileText size={32} color="#E53E3E" />
        <Text style={styles.title}>Consent Form</Text>
        <Text style={styles.subtitle}>Please review and accept all sections</Text>
      </View>

      {CONSENT_SECTIONS.map((section, index) => (
        <Animated.View 
          key={section.id}
          entering={FadeIn.delay(index * 100)}
          style={styles.sectionCard}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <TouchableOpacity
              style={[
                styles.checkButton,
                acceptedSections[section.id] && styles.checkedButton,
              ]}
              onPress={() => handleToggleSection(section.id)}
            >
              <CheckCircle2 
                size={24} 
                color={acceptedSections[section.id] ? '#fff' : '#CBD5E0'}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionContent}>{section.content}</Text>
        </Animated.View>
      ))}

      <View style={styles.warningCard}>
        <AlertCircle size={24} color="#E53E3E" />
        <Text style={styles.warningText}>
          By accepting all sections, you confirm that you have read, understood, and agree to all the terms and conditions of blood donation.
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.submitButton,
          !allSectionsAccepted && styles.disabledButton,
        ]}
        onPress={handleSubmit}
        disabled={!allSectionsAccepted}
      >
        <Text style={styles.submitButtonText}>
          Accept & Continue
        </Text>
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
    alignItems: 'center',
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
    textAlign: 'center',
  },
  sectionCard: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    backgroundColor: '#F7FAFC',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#2D3748',
  },
  checkButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F7FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  checkedButton: {
    backgroundColor: '#48BB78',
    borderColor: '#48BB78',
  },
  sectionContent: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
    lineHeight: 24,
  },
  warningCard: {
    margin: 20,
    padding: 16,
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FED7D7',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  warningText: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#E53E3E',
  },
  submitButton: {
    margin: 20,
    backgroundColor: '#E53E3E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#CBD5E0',
  },
  submitButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
  successContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  successTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#48BB78',
    marginTop: 16,
    marginBottom: 8,
  },
  successMessage: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
    textAlign: 'center',
    marginTop: 8,
  },
});