/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// console.info('Service worker disabled for development, will be generated at build time.');
// console.log('Started', self);
self.addEventListener('install', function (event) {
    self.skipWaiting();
    // console.log('Installed', event);
});
self.addEventListener('activate', function (event) {
    // console.log('Activated', event);
});
self.addEventListener('push', function (event) {
    // console.log('Push message', event);
    var title = 'iPonzi';
    event.waitUntil(
        self.registration.showNotification(title, {
            body: 'Your friend, Jacqueline Wen, has signed up through your referral! \n\nCongratulations!',
            icon: '/images/manifest/icon-72x72.png',
            tag: 'my-tag'
        }));
});