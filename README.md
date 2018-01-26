# Vue YouTube Searchinator

### DEMO [jordanboston.github.io/vue-youtube-search](https://jordanboston.github.io/vue-youtube-search/)

![youtube-searchinator](https://user-images.githubusercontent.com/1487071/35446254-fbe9d950-0268-11e8-9da3-56ab5d6c47c4.png)

A Vue.js app based on a React version from [Stephen Grider's](https://github.com/StephenGrider) React/Redux tutorial.  The React version I built from the tutorial is in the react-version branch of this repo.  I wanted to compare the two frameworks via a simple app which would have the same basic functionality.

## Build Setup

This app won't work on domains other than my own.
To start using this you will need your own API Key from https://console.developers.google.com/apis/
add this to your own config.js _(gitignored)_ file in the src directory with this:

    export const YOUTUBE_API_KEY = 'YOUR API KEY HERE';

Install dependencies

    npm install

Serve with hot reload at localhost:8081

    npm run dev

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).