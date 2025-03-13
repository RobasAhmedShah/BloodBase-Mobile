import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { router } from 'expo-router';
import { CircleAlert as AlertCircle, Plus } from 'lucide-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const MEDICAL_QUESTIONS = [
  {
    id: 'allergies',
    question: 'Do you have any allergies?',
    followUp: 'Please specify your allergies',
  },
  {
    id: 'medications',
    question: 'Are you currently taking any medications?',
    followUp: 'Please list your current medications',
  },
  {
    id: 'surgery',
    question: 'Have you had any surgeries in the past?',
    followUp: 'Please describe your surgical history',
  },
  {
    id: 'transfusion',
    question: 'Have you ever had any blood transfusions?',
    followUp: 'When was your last transfusion?',
  },
  {
    id: 'diseases',
    question: 'Have you ever been diagnosed with any chronic diseases?',
    followUp: 'Please specify the conditions',
  },
];

export default function MedicalHistoryScreen() {
  const [answers, setAnswers] = useState<Record<string, { answer: boolean; details: string }>>({});

  const handleAnswer = (id: string, value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [id]: { answer: value, details: prev[id]?.details || '' },
    }));
  };

  const handleDetails = (id: string, details: string) => {
    setAnswers(prev => ({
      ...prev,
      [id]: { ...prev[id], details },
    }));
  };

  const handleSubmit = () => {
    router.push('/donate/consent');
  };

  const allQuestionsAnswered = MEDICAL_QUESTIONS.every(q => answers[q.id]?.answer !== undefined);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <AlertCircle size={32} color="#E53E3E" />
        <Text style={styles.title}>Medical History</Text>
        <Text style={styles.subtitle}>Please answer all questions accurately</Text>
      </View>

      {MEDICAL_QUESTIONS.map((q, index) => (
        <Animated.View 
          key={q.id}
          entering={FadeInUp.delay(index * 100)}
          style={styles.questionCard}
        >
          <Text style={styles.question}>{q.question}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[
                styles.answerButton,
                answers[q.id]?.answer === true && styles.selectedButton,
              ]}
              onPress={() => handleAnswer(q.id, true)}
            >
              <Text style={[
                styles.answerText,
                answers[q.id]?.answer === true && styles.selectedText,
              ]}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.answerButton,
                answers[q.id]?.answer === false && styles.selectedButton,
              ]}
              onPress={() => handleAnswer(q.id, false)}
            >
              <Text style={[
                styles.answerText,
                answers[q.id]?.answer === false && styles.selectedText,
              ]}>No</Text>
            </TouchableOpacity>
          </View>

          {answers[q.id]?.answer && (
            <View style={styles.followUpContainer}>
              <TextInput
                style={styles.followUpInput}
                placeholder={q.followUp}
                value={answers[q.id]?.details}
                onChangeText={(text) => handleDetails(q.id, text)}
                multiline
              />
            </View>
          )}
        </Animated.View>
      ))}

      <View style={styles.additionalSection}>
        <Text style={styles.additionalTitle}>Additional Information</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={20} color="#E53E3E" />
          <Text style={styles.addButtonText}>Add Other Medical Conditions</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.submitButton,
          !allQuestionsAnswered && styles.disabledButton,
        ]}
        onPress={handleSubmit}
        disabled={!allQuestionsAnswered}
      >
        <Text style={styles.submitButtonText}>Continue</Text>
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
  questionCard: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    backgroundColor: '#F7FAFC',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  question: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#2D3748',
    marginBottom: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  answerButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#E53E3E',
    borderColor: '#E53E3E',
  },
  answerText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#4A5568',
  },
  selectedText: {
    color: '#fff',
  },
  followUpContainer: {
    marginTop: 16,
  },
  followUpInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#2D3748',
    minHeight: 80,
    textAlignVertical: 'top',
  },
  additionalSection: {
    padding: 20,
  },
  additionalTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#2D3748',
    marginBottom: 12,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FED7D7',
    gap: 8,
  },
  addButtonText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
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
});