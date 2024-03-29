import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'eg.com.alriyadhmisr.ds1csre',
  appName: 'Al Riyadh Misr',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    "PushNotifications": {
      "presentationOptions": ["badge", "sound", "alert"]
    },
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: false,
      backgroundColor: "#174c14",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "inverse",
      iosSpinnerStyle: "small",
      spinnerColor: "#ffffff",
      splashFullScreen: true,
      splashImmersive: true,
    },
  }
};

export default config;
