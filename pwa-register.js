/* HK Global Market & Services - PWA Register */

(function () {
  "use strict";

  const APP_NAME = "HK Global Market & Services";
  const SW_FILE = "service-worker.js";
  const UPDATE_CHECK_DELAY = 1200;

  let refreshing = false;
  let newWorker = null;

  function getBaseUrl() {
    const path = window.location.pathname;
    const lastSlash = path.lastIndexOf("/");
    const basePath = path.substring(0, lastSlash + 1);

    return window.location.origin + basePath;
  }

  function getServiceWorkerUrl() {
    return new URL(SW_FILE, getBaseUrl()).href;
  }

  function createToast() {
    let toast = document.getElementById("pwaToast");

    if (toast) return toast;

    toast = document.createElement("div");
    toast.id = "pwaToast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");

    toast.style.position = "fixed";
    toast.style.left = "50%";
    toast.style.bottom = "24px";
    toast.style.transform = "translateX(-50%) translateY(20px)";
    toast.style.opacity = "0";
    toast.style.pointerEvents = "none";
    toast.style.zIndex = "9999";
    toast.style.maxWidth = "calc(100% - 28px)";
    toast.style.background = "#101828";
    toast.style.color = "#ffffff";
    toast.style.borderRadius = "999px";
    toast.style.padding = "13px 18px";
    toast.style.fontFamily = "Arial, Helvetica, sans-serif";
    toast.style.fontSize = "14px";
    toast.style.fontWeight = "900";
    toast.style.boxShadow = "0 18px 55px rgba(16, 24, 40, 0.22)";
    toast.style.transition = "0.25s ease";
    toast.style.display = "flex";
    toast.style.alignItems = "center";
    toast.style.gap = "10px";

    document.body.appendChild(toast);

    return toast;
  }

  function showToast(message, options = {}) {
    const toast = createToast();

    toast.innerHTML = "";

    const text = document.createElement("span");
    text.textContent = message;

    toast.appendChild(text);

    if (options.actionText && typeof options.onAction === "function") {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = options.actionText;

      button.style.border = "0";
      button.style.borderRadius = "999px";
      button.style.background = "#ff8b26";
      button.style.color = "#ffffff";
      button.style.fontWeight = "900";
      button.style.cursor = "pointer";
      button.style.padding = "8px 12px";

      button.addEventListener("click", options.onAction);

      toast.appendChild(button);
      toast.style.pointerEvents = "auto";
    } else {
      toast.style.pointerEvents = "none";
    }

    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";

    if (!options.sticky) {
      window.setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(-50%) translateY(20px)";
        toast.style.pointerEvents = "none";
      }, options.duration || 2600);
    }
  }

  function appLang() {
    return String(localStorage.getItem("amg_country_lang") || document.documentElement.lang || "en")
      .slice(0, 2)
      .toLowerCase();
  }

  function t(key) {
    const lang = appLang();

    const dict = {
      en: {
        ready: "App is ready for offline use.",
        updated: "A new version is available.",
        refresh: "Refresh",
        offline: "You are offline.",
        online: "Connection restored.",
        installReady: "App can be installed from your browser menu."
      },

      ar: {
        ready: "التطبيق جاهز للاستخدام بدون اتصال.",
        updated: "توجد نسخة جديدة من الموقع.",
        refresh: "تحديث",
        offline: "أنت غير متصل بالإنترنت.",
        online: "عاد الاتصال بالإنترنت.",
        installReady: "يمكن تثبيت التطبيق من قائمة المتصفح."
      },

      sv: {
        ready: "Appen är redo för offline-användning.",
        updated: "En ny version är tillgänglig.",
        refresh: "Uppdatera",
        offline: "Du är offline.",
        online: "Anslutningen är tillbaka.",
        installReady: "Appen kan installeras från webbläsarens meny."
      },

      de: {
        ready: "Die App ist offline bereit.",
        updated: "Eine neue Version ist verfügbar.",
        refresh: "Aktualisieren",
        offline: "Du bist offline.",
        online: "Verbindung wiederhergestellt.",
        installReady: "Die App kann über das Browsermenü installiert werden."
      },

      tr: {
        ready: "Uygulama çevrimdışı kullanıma hazır.",
        updated: "Yeni bir sürüm mevcut.",
        refresh: "Yenile",
        offline: "Çevrimdışısın.",
        online: "Bağlantı geri geldi.",
        installReady: "Uygulama tarayıcı menüsünden yüklenebilir."
      }
    };

    return (dict[lang] && dict[lang][key]) || dict.en[key] || key;
  }

  function sendSkipWaiting() {
    if (!newWorker) return;

    newWorker.postMessage({
      type: "SKIP_WAITING"
    });
  }

  function listenForControllerChange() {
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;

      refreshing = true;
      window.location.reload();
    });
  }

  function handleRegistration(registration) {
    if (!registration) return;

    if (registration.waiting && navigator.serviceWorker.controller) {
      newWorker = registration.waiting;

      showToast(t("updated"), {
        sticky: true,
        actionText: t("refresh"),
        onAction: sendSkipWaiting
      });

      return;
    }

    registration.addEventListener("updatefound", () => {
      const installingWorker = registration.installing;

      if (!installingWorker) return;

      installingWorker.addEventListener("statechange", () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            newWorker = installingWorker;

            showToast(t("updated"), {
              sticky: true,
              actionText: t("refresh"),
              onAction: sendSkipWaiting
            });
          } else {
            showToast(t("ready"));
          }
        }
      });
    });

    window.setTimeout(() => {
      registration.update().catch(() => {});
    }, UPDATE_CHECK_DELAY);
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;

    const swUrl = getServiceWorkerUrl();

    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(swUrl, {
          scope: getBaseUrl()
        })
        .then((registration) => {
          handleRegistration(registration);
          listenForControllerChange();
        })
        .catch((error) => {
          console.warn(`[${APP_NAME}] Service Worker registration failed:`, error);
        });
    });
  }

  function watchConnection() {
    window.addEventListener("offline", () => {
      showToast(t("offline"));
    });

    window.addEventListener("online", () => {
      showToast(t("online"));
    });
  }

  function handleInstallPrompt() {
    let deferredPrompt = null;

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredPrompt = event;

      window.HK_GLOBAL_INSTALL_APP = async function () {
        if (!deferredPrompt) return false;

        deferredPrompt.prompt();

        const result = await deferredPrompt.userChoice;
        deferredPrompt = null;

        return result.outcome === "accepted";
      };

      showToast(t("installReady"), {
        duration: 3200
      });
    });

    window.addEventListener("appinstalled", () => {
      deferredPrompt = null;
      window.HK_GLOBAL_INSTALL_APP = null;
    });
  }

  function clearPwaCache() {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.ready
      .then((registration) => {
        if (registration.active) {
          registration.active.postMessage({
            type: "CLEAR_CACHE"
          });
        }
      })
      .catch(() => {});
  }

  window.HK_GLOBAL_PWA = {
    clearCache: clearPwaCache,
    checkUpdate: function () {
      if (!("serviceWorker" in navigator)) return;

      navigator.serviceWorker.ready
        .then((registration) => registration.update())
        .catch(() => {});
    }
  };

  registerServiceWorker();
  watchConnection();
  handleInstallPrompt();
})();
