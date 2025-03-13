import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { router } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ONBOARDING_DATA = [
  {
    title: 'Find Blood Donors & Banks Easily',
    description: 'Locate nearby blood banks and connect with donors in your area instantly.',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'Track Your Donations Securely',
    description: 'Keep track of your donation history and impact with blockchain security.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'Transparent & Safe System',
    description: 'Experience a fully transparent and secure blood donation process.',
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&auto=format&fit=crop&q=80',
  },
];

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace('/(auth)/login');
    }
  };

  const handleSkip = () => {
    router.replace('/(auth)/login');
  };

  return (
    <View style={styles.container}>
      <Animated.View 
        entering={FadeIn}
        style={styles.content}
      >
        <Image
          source={{ uri: ONBOARDING_DATA[currentIndex].image }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{ONBOARDING_DATA[currentIndex].title}</Text>
          <Text style={styles.description}>{ONBOARDING_DATA[currentIndex].description}</Text>
        </View>
        <View style={styles.dotsContainer}>
          {ONBOARDING_DATA.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: index === currentIndex ? '#E53E3E' : '#CBD5E0' },
              ]}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
            <Text style={styles.nextText}>
              {currentIndex === ONBOARDING_DATA.length - 1 ? 'Get Started' : 'Next'}
            </Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 20,
    marginBottom: 40,
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
    color: '#1A202C',
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#4A5568',
    lineHeight: 24,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'space-between',
  },
  skipButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  skipText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#4A5568',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#E53E3E',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  nextText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
});