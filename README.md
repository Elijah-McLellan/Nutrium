<center><img src="/www/Assets/logo.svg" width="200">

![](https://shields.io/badge/Open-source-brightgreen) ![](https://shields.io/badge/License-MIT-blue)
</center>

## Nutrium 🐾

The nutrition & workout tracker for the fluffy ones~

Tired of boring corporate fitness apps? Nutrium tracks your macros, water, floof scale (weight), and gains without the cringe. Black, white, and pawsitively aesthetic.

![Screenshot](/www/Assets/Screenshots.jpg)
### Paws on the Keyboard (Setup)

    Make sure you have Node.js and Android Studio installed.
    Clone this den:

    git clone <your-repo-url>cd nutrium-app

    Install the magic beans:
    bash
     
    npm install
     
    Add the Android yard:
    bash

    npx cap add android
    npx cap sync


### Running the App

Fast way (Live Reload - saves so much time):
bash
npx cap run android --livereload
 
 

Slow way (Manual Build):

    npx cap sync
    npx cap open android
 
 

(Then click the green play button in Android Studio)

### Building the APK

    Open Android Studio: npx cap open android
    Top menu: Build -> Build Bundle(s) / APK(s) -> Build APK(s)
    Grab the APK from android/app/build/outputs/apk/debug/ and send it to the pack~

### Data Storage

We use @capacitor/preferences instead of localStorage so Android doesn't randomly wipe your hard-earned stats. Your data stays safe on your device.

Stay swole, stay fluffy~