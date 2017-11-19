# zaf-examples
Example ZAF v2 apps using react, redux, vue and deku
=====================

## Run the app example e.g. preact

```
gem install zendesk_apps_tools

cd preact-example
yarn install
npm run dev
```

- This runs `webpack --watch` and `zat server` which means you can work on your app in the `src` folder, and it will be built into the `dist/assets` folder.

 - This will allow you to test your zendesk app locally. In these examples the app location is the ticket_sidebar,

- In your browser's private or incognito window, navigate to any ticket in Zendesk Support. Append `?zat=true` to the ticket URL e.g. `https://subdomain.zendesk.com/agent/tickets/1?zat=true`.

- In your browser's Address bar, click the shield icon on the left (Chrome) or lock icon on the right (Firefox) and agree to load an unsafe script (Chrome) or to disable protection (Firefox).

- Check this [zendesk guide](https://help.zendesk.com/hc/en-us/articles/229137287#topic_egv_qv4_lw) for more info on getting started.

## Running tests, lint and flow check

```
yarn install
npm run lint
npm run test
npm run flow
```
