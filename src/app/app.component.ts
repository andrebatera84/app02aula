import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfigProvider } from '../providers/config/config';
import { SlidePage } from '../pages/slide/slide';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    ConfigProvider:ConfigProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      let config = ConfigProvider.getConfig();

      if (config == null) {
        this.rootPage = SlidePage;
        ConfigProvider.setConfig(false);
      } else { 
        this.rootPage = TabsPage;
      }
    });
  }
}
