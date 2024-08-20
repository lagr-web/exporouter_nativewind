//app/index.js

import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';

import React, { useState, useEffect } from "react";

export default function HomeScreen(){

    const [text, onChangeText] = useState("http://192.168.1.106:8080");

    return(

        <>

        <View className="flex-1 items-center justify-center bg-white">
          
          <Text style={styles.tText}>Indtast din server adresse</Text>

          <TextInput
            style={styles.mInput}
            onChangeText={onChangeText}
            value={text}
          />

          <TouchableOpacity
            style={styles.mBut}
          >

<Link style={styles.mText}
        href={{
          pathname: '/mWebview',
          params: { id: text }
        }}>
        Hent Webview
        </Link>


             {/* <Link style={styles.mText} href="/mWebview">webview</Link> */}
           
          </TouchableOpacity>
        </View>
           
        
        </>


    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      
    },
    tText: {
      color: "#000",
      fontSize: 20,
      fontWeight: "bold",
    },
    mInput: {
      height: 50,
      width: 400,
      borderColor: "gray",
      borderWidth: 1,
      textAlign: "center",
      fontSize: 20,
    },
    mBut: {
      alignItems: "center",
      backgroundColor: "#426A8C",
      borderRadius: 8,
      marginTop: 10,
      padding: 10,
    },
    mText: {
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: 20,
    },
  });