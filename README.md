<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


# YouTube API Test Application

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/test-youtube-api.svg)](https://www.npmjs.com/package/test-youtube-api) [![Downloads](https://img.shields.io/npm/dt/test-youtube-api.svg)](https://www.npmjs.com/package/test-youtube-api)

> Test Youtube API NodeJS module


This is an example application how to use the [`youtube-api`](https://github.com/IonicaBizau/youtube-api) library and explore the YouTube API resources.

## Before you start

 1. You need a [Google Account](https://www.google.com/accounts/NewAccount) to access the Google APIs Console, request an API key, and register your application.
 2. [Register your application](https://console.developers.google.com/project) with Google so that it can submit API requests:
 3. After registering your application, select **YouTube Data API** as one of the services that your application uses.

     - Go to the [APIs Console](https://console.developers.google.com/project) and select the project that you just registered.
     - Click on *APIs & auth* on the left side. Then a dropdown will be opened.
     - Select *APIs*.
     - Search for *YouTube Data API v3*, click it and click <kbd>Enable API</kbd>



## Installation and usage

 1. Download this repository by running:
    ```sh
    git clone http://github.com/IonicaBizau/test-youtube-api
    ```
 2. Enter in the downloaded directory and run `npm install`:
    ```sh
    cd test-youtube-api
    npm install
    ```
 3. Go back in your Google app and click again on *APIs & auth* and then select *Credentials*.
 4. Click <kbd>Create new Client ID</kbd>. This will create new OAuth 2.0 credentials:

     - Select *Web application*
     - Click <kbd>Configure consent screen</kbd>
     - Complete the required fields:

         - Product name: what ever you want (e.g. "Youtube API Test")
         - Product logo is optional
         - Home page is optional
         - Save the changes

     - Now you will have to set the auth urls. This test application uses the following urls:

         - Authorized JavaScript origins: `http://localhost:5000/` (paste it in the first textarea)
         - Authorized redirect URIs: `http://localhost:5000/oauth2callback` (paste it in the second textarea)

     - Finally, click <kbd>Create Client ID</kbd>


OK, at this step you have the credentials (in your Google app). Now you have to use them in this test application:

 1. Rename `credentials.templ.json` into `credentials.json`.
 2. Open `credentials.json` and replace `yourClientId` with the **client id** and `yourSecretKey` with **client secret** generated previously.
 3. Now you are ready. Start the script (`npm start`) and open `http://localhost:5000`.


## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2013#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
