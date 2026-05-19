/* =========================================================
   HK Global Market & Services
   Firebase Configuration
   File: firebase-config.js
   ========================================================= */

/*
  مهم جداً:
  1) هذا الملف يعمل مع Firebase Web SDK.
  2) ضع بيانات مشروعك من Firebase Console مكان القيم الموجودة بالأسفل.
  3) لا تضع Admin SDK أو private key داخل الموقع.
  4) إذا لم تضع بيانات Firebase، سيعمل الموقع بوضع localStorage فقط.
*/

(function () {
  "use strict";

  const HK_FIREBASE_CONFIG = {
    apiKey: "PUT_YOUR_API_KEY_HERE",
    authDomain: "PUT_YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "PUT_YOUR_PROJECT_ID",
    storageBucket: "PUT_YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "PUT_YOUR_MESSAGING_SENDER_ID",
    appId: "PUT_YOUR_APP_ID"
  };

  const SETTINGS = {
    useFirebase: true,
    useAuth: true,
    useFirestore: true,
    useStorage: true,

    collections: {
      users: "users",
      ads: "ads",
      messages: "messages",
      favorites: "favorites",
      reports: "reports"
    }
  };

  function isPlaceholder(value) {
    return !value || String(value).includes("PUT_YOUR_");
  }

  function hasValidFirebaseConfig(config) {
    return Boolean(
      config &&
      !isPlaceholder(config.apiKey) &&
      !isPlaceholder(config.authDomain) &&
      !isPlaceholder(config.projectId) &&
      !isPlaceholder(config.appId)
    );
  }

  function markFirebaseStatus(status, message) {
    window.HK_FIREBASE_STATUS = {
      status,
      message,
      ready: status === "ready",
      localMode: status !== "ready",
      checkedAt: new Date().toISOString()
    };

    document.documentElement.dataset.firebaseStatus = status;
  }

  function getFirebaseConfig() {
    return { ...HK_FIREBASE_CONFIG };
  }

  function getFirebaseSettings() {
    return { ...SETTINGS };
  }

  function isFirebaseReady() {
    return Boolean(window.HK_FIREBASE_STATUS && window.HK_FIREBASE_STATUS.ready);
  }

  function firebaseLocalMode() {
    return !isFirebaseReady();
  }

  function initStatus() {
    if (!SETTINGS.useFirebase) {
      markFirebaseStatus("disabled", "Firebase is disabled. The website will use localStorage only.");
      return;
    }

    if (!hasValidFirebaseConfig(HK_FIREBASE_CONFIG)) {
      markFirebaseStatus(
        "local",
        "Firebase configuration is missing or still contains placeholders. The website will use localStorage only."
      );
      return;
    }

    markFirebaseStatus("configured", "Firebase configuration is available.");
  }

  window.HK_FIREBASE_CONFIG = HK_FIREBASE_CONFIG;
  window.HK_FIREBASE_SETTINGS = SETTINGS;

  window.HK_FIREBASE = {
    config: HK_FIREBASE_CONFIG,
    settings: SETTINGS,
    getFirebaseConfig,
    getFirebaseSettings,
    hasValidFirebaseConfig,
    isFirebaseReady,
    firebaseLocalMode
  };

  initStatus();
})();
