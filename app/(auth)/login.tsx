import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Mail, Lock, ArrowRight } from 'lucide-react-native';

export default function LoginScreen() {
  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  const handleSignUp = () => {
    router.push('/(auth)/signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue donating</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Mail size={20} color="#4A5568" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Lock size={20} color="#4A5568" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign In</Text>
          <ArrowRight size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.guestButton} onPress={handleLogin}>
          <Text style={styles.guestButtonText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: '#1A202C',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#1A202C',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontFamily: 'Inter_500Medium',
    color: '#E53E3E',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#E53E3E',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
  guestButton: {
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  guestButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#4A5568',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontFamily: 'Inter_400Regular',
    color: '#4A5568',
    fontSize: 14,
  },
  signUpText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#E53E3E',
    fontSize: 14,
  },
});