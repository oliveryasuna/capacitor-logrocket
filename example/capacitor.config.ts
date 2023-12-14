import type {CapacitorConfig} from '@capacitor/cli';

const CONFIG: CapacitorConfig = {
  appId: 'com.oliveryasuna.capacitor.logrocket',
  appName: 'Capacitor LogRocket',
  bundledWebRuntime: false,
  webDir: './dist',
  android: {
    appendUserAgent: 'android wv'
  }
};

if(process.env['MODE'] === 'dev') {
  if(process.env['PLATFORM'] === 'android') {
    CONFIG.server = {
      url: 'http://10.0.2.2:5173',
      cleartext: true
    };
  } else if(process.env['PLATFORM'] === 'ios') {
    CONFIG.server = {
      url: 'http://localhost:5173',
      cleartext: true
    };
  }
}

export default CONFIG;
