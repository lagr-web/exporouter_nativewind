//app/_layout.js

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout(){

    return(

        <>
        <StatusBar hidden={true} />

        <Stack>
            <Stack.Screen name= "index" options = {{headerShown:false}} />
            <Stack.Screen name= "mWebview" options = {{headerShown:false}} />
        </Stack>
        
        </>

    )

}