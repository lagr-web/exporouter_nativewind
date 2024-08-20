//app/mWebview.js

import { View, Text, StyleSheet } from "react-native";
import { Link, useLocalSearchParams  } from 'expo-router';
import { WebView } from "react-native-webview";

export default function webviewScreen() {

    //const router = useRouter();

    const {id} = useLocalSearchParams();

  return (


    <WebView 
    style = {styles.container} 
    source={{uri:id }} />

  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  
     }
   })
