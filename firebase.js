const firebaseConfig = {
    apiKey: "AIzaSyAIN4vtsDbgzu5wFugUrZJMTFx4iEL51wo",
    authDomain: "tuvawebsite.firebaseapp.com",
    projectId: "tuvawebsite",
    storageBucket: "tuvawebsite.appspot.com",
    messagingSenderId: "757289211872",
    appId: "1:757289211872:web:80d6f06d1bcbcc07bbbd85",
    measurementId: "G-1HZHZ0GMT6"
  };

  firebase.initializeApp(firebaseConfig);

  if (firebase.analytics) {
    firebase.analytics();
  }
