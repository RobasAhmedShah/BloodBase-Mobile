import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { CircleAlert as AlertCircle, CircleCheck as CheckCircle2, Circle as XCircle } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const ELIGIBILITY_QUESTIONS = [
  {
    id: 'age',
    question: 'Are you between 18 and 65 years old?',
    critical: true,
  },
  {
    id: 'weight',
    question: 'Do you weigh more than 50kg?',
    critical: true,
  },
  {
    id: 'lastDonation',
    question: 'Has it been more than 56 days since your last donation?',
    critical: true,
  },
  {
    id: 'health',
    question: 'Are you in good health today?',
    critical: true,
  },
  {
    id: 'medication',
    question: 'Are you currently taking any medication?',
    critical: false,
  },
  {
    id: 'pregnancy',
    question: 'Are you pregnant or have you given birth in the last 6 months?',
    critical: true,
    failOnYes: true,
  },
  {
    id: 'surgery',
    question: 'Have you had any surgery in the last 6 months?',
    critical: true,
    failOnYes: true,
  },
  {
    id: 'illness',
    question: 'Do you have any chronic medical conditions?',
    critical: true,
    failOnYes: true,
  },
];

export default function EligibilityScreen() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (id: string, value: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const isEligible = () => {
    return ELIGIBILITY_QUESTIONS.every(q => {
      if (!q.critical) return true;
      const answer = answers[q.id];
      return q.failOnYes ? !answer : answer;
    });
  };

  const handleComplete = () => {
    setShowResult(true);
    if (isEligible()) {
      setTimeout(() => {
        router.push('/donate/personal-info');
      }, 2000);
    }
  };

  const allQuestionsAnswered = ELIGIBILITY_QUESTIONS.every(q => answers[q.id] !== undefined);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {!showResult ? (
        <>
          <View style={styles.header}>
            <AlertCircle size={32} color="#E53E3E" />
            <Text style={styles.title}>Eligibility Check</Text>
            <Text style={styles.subtitle}>Please answer all questions honestly</Text>
          </View>

          {ELIGIBILITY_QUESTIONS.map((q, index) => (
            <Animated.View 
              key={q.id}
              entering={FadeIn.delay(index * 100)}
              style={styles.questionCard}
            >
              <Text style={styles.question}>{q.question}</Text>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={[
                    styles.answerButton,
                    answers[q.id] === true && styles.selectedButton,
                  ]}
                  onPress={() => handleAnswer(q.id, true)}
                >
                  <Text style={[
                    styles.answerText,
                    answers[q.id] === true && styles.selectedText,
                  ]}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.answerButton,
                    answers[q.id] === false && styles.selectedButton,
                  ]}
                  onPress={() => handleAnswer(q.id, false)}
                >
                  <Text style={[
                    styles.answerText,
                    answers[q.id] === false && styles.selectedText,
                  ]}>No</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          ))}

          <TouchableOpacity
            style={[
              styles.completeButton,
              !allQuestionsAnswered && styles.disabledButton,
            ]}
            onPress={handleComplete}
            disabled={!allQuestionsAnswered}
          >
            <Text style={styles.completeButtonText}>Complete Check</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Animated.View 
          entering={FadeIn}
          style={styles.resultContainer}
        >
          {isEligible() ? (
            <>
              <CheckCircle2 size={64} color="#48BB78" />
              <Text style={[styles.resultTitle, styles.successText]}>
                You're Eligible!
              </Text>
              <Text style={styles.resultMessage}>
                Great news! You meet all the requirements to donate blood. We'll redirect you to the registration form.
              </Text>
            </>
          ) : (
            <>
              <XCircle size={64} color="#E53E3E" />
              <Text style={[styles.resultTitle, styles.errorText]}>
                Not Eligible
              </Text>
              <Text style={styles.resultMessage}>
                Based on your answers, you're not eligible to donate blood at this time. Please check back after the deferral period or consult with a healthcare provider.
              </Text>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
              >
                <Text style={styles.backButtonText}>Go Back</Text>
              </TouchableOpacity>
            </>
          )}
        </Animated.View>
      )}
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
  completeButton: {
    margin: 20,
    backgroundColor: '#E53E3E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#CBD5E0',
  },
  completeButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
  resultContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  resultTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    marginTop: 16,
    marginBottom: 8,
  },
  successText: {
    color: '#48BB78',
  },
  errorText: {
    color: '#E53E3E',
  },
  resultMessage: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
    textAlign: 'center',
    marginTop: 8,
  },
  backButton: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#E53E3E',
    borderRadius: 12,
    minWidth: 200,
    alignItems: 'center',
  },
  backButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
});