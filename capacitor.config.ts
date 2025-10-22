import type { CapacitorConfig } from '@capacitor/cli';

const config: {
  webDir: string;
  appName: string;
  plugins: { LiveUpdates: { autoUpdateMethod: string; appId: string; channel: string; maxVersions: number } };
  appId: string;
  android: { fullscreen: boolean }
} = {
  appId: 'io.ionic.starter',
  appName: 'Driver App',
  webDir: 'www',
  android: {
    fullscreen: false
  },
  plugins: {
    LiveUpdates: {
      appId: 'f95de631',         // <-- Appflow app id (copy from dashboard)
      channel: 'Production',     // <-- exact channel name (case-sensitive)
      autoUpdateMethod: 'background', // 'background' | 'alwaysLatest' | 'force' | 'none'
      maxVersions: 2
    }
  }
};

export default config;
