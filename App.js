import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        source={{ uri: 'https://classy-chebakia-d4a465.netlify.app/' }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
