import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { User, Mail, Phone, MapPin, Calendar, Scale, Droplet } from 'lucide-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export default function PersonalInfoScreen() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    weight: '',
    bloodType: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName) newErrors.fullName = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.weight) newErrors.weight = 'Weight is required';
    if (!formData.bloodType) newErrors.bloodType = 'Blood type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      router.push('/donate/medical-history');
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Personal Information</Text>
        <Text style={styles.subtitle}>Please fill in your details accurately</Text>
      </View>

      <Animated.View entering={FadeInUp.delay(200)} style={styles.form}>
        <View style={styles.inputGroup}>
          <User size={20} color="#4A5568" />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={formData.fullName}
            onChangeText={(text) => setFormData({ ...formData, fullName: text })}
          />
        </View>
        {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

        <View style={styles.inputGroup}>
          <Mail size={20} color="#4A5568" />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />
        </View>
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <View style={styles.inputGroup}>
          <Phone size={20} color="#4A5568" />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
          />
        </View>
        {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

        <View style={styles.inputGroup}>
          <MapPin size={20} color="#4A5568" />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={formData.address}
            onChangeText={(text) => setFormData({ ...formData, address: text })}
          />
        </View>
        {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}

        <View style={styles.inputGroup}>
          <Calendar size={20} color="#4A5568" />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth (DD/MM/YYYY)"
            value={formData.dateOfBirth}
            onChangeText={(text) => setFormData({ ...formData, dateOfBirth: text })}
          />
        </View>
        {errors.dateOfBirth && <Text style={styles.errorText}>{errors.dateOfBirth}</Text>}

        <View style={styles.inputGroup}>
          <Scale size={20} color="#4A5568" />
          <TextInput
            style={styles.input}
            placeholder="Weight (kg)"
            keyboardType="numeric"
            value={formData.weight}
            onChangeText={(text) => setFormData({ ...formData, weight: text })}
          />
        </View>
        {errors.weight && <Text style={styles.errorText}>{errors.weight}</Text>}

        <View style={styles.bloodTypeSection}>
          <View style={styles.bloodTypeHeader}>
            <Droplet size={20} color="#4A5568" />
            <Text style={styles.bloodTypeTitle}>Blood Type</Text>
          </View>
          <View style={styles.bloodTypeGrid}>
            {BLOOD_TYPES.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.bloodTypeButton,
                  formData.bloodType === type && styles.selectedBloodType,
                ]}
                onPress={() => setFormData({ ...formData, bloodType: type })}
              >
                <Text style={[
                  styles.bloodTypeText,
                  formData.bloodType === type && styles.selectedBloodTypeText,
                ]}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {errors.bloodType && <Text style={styles.errorText}>{errors.bloodType}</Text>}
      </Animated.View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
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
  form: {
    padding: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#2D3748',
    paddingVertical: 12,
    marginLeft: 12,
  },
  errorText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#E53E3E',
    marginTop: -8,
    marginBottom: 12,
    marginLeft: 4,
  },
  bloodTypeSection: {
    marginTop: 8,
  },
  bloodTypeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bloodTypeTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#2D3748',
    marginLeft: 8,
  },
  bloodTypeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  bloodTypeButton: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedBloodType: {
    backgroundColor: '#E53E3E',
    borderColor: '#E53E3E',
  },
  bloodTypeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#2D3748',
  },
  selectedBloodTypeText: {
    color: '#fff',
  },
  submitButton: {
    margin: 20,
    backgroundColor: '#E53E3E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
});