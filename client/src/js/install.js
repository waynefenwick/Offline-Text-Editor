const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser install prompt from appearing
  event.preventDefault();

  // Store the `beforeinstallprompt` event for later use
  const deferredPrompt = event;

  // Show your own custom install prompt or button
  butInstall.style.display = 'block';

  // Add a click event listener to the custom install button
  butInstall.addEventListener('click', () => {
    // Hide the custom install button
    butInstall.style.display = 'none';

    // Show the browser install prompt programmatically
    deferredPrompt.prompt();

    // Wait for the user to respond to the install prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      // Clear the deferred prompt reference
      deferredPrompt = null;
    });
  });
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App was installed.');
});

if ('serviceWorker' in navigator) {
  // Register the service worker
  navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      console.log('Service worker registered:', registration);

      // Listen for the 'updatefound' event
      registration.addEventListener('updatefound', () => {
        // Handle updates when a new service worker is found
        const newWorker = registration.installing;
        console.log('New service worker found:', newWorker);

        newWorker.addEventListener('statechange', () => {
          // Handle different states of the new service worker
          console.log('Service worker state:', newWorker.state);
        });
      });

      // Listen for the 'controllerchange' event
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        // Handle when the service worker becomes the active worker
        console.log('Controller changed:', navigator.serviceWorker.controller);
      });
    })
    .catch((error) => {
      console.error('Error registering service worker:', error);
    });
}
