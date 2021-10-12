# pwa-updater

## Install
> npm install --save pwa-updater
> 
## Usage
In `/src/index.js`
```js
import { swRegister } from 'pwa-updater';
...
serviceWorkerRegistration.register(swRegister);
```

In `/src/App.js` or your root component
```js
import { PwaUpdater } from 'pwa-updater';

function App() {
	return (
		<div>
			<PwaUpdater notify={true} />
			... your components
		</div>
	)
}
```

### Props
| Props | Value | Description |
| ----- | ------- | ----------- |
| notify | Boolean | if its `true` will show a popup notification, if it's `false` will straight update instead of showing notification |

### Introduction

In ReactJS, all we have to do to opt in for Progressive Web App is we would change to `serviceWorkerRegistration.unregister()` to `serviceWorkerRegistration.register()` in `/src/index.js` file.

But all it does is that it will store the document in cache, this will make your application loads faster and would load even if your server is offline. So what happens if we have new updates to our application? Browser will serve cached files first before loading files from server, this means it would load the files that's stored in the cached, which is the older version instead of the newer version, which is from our server.

So to update our application to the updated version, we would need to refresh our cache. But to do that require manual works like calling functions in
```
serviceWorkerRegistration.register({
	onUpdate: reg => {handler},
	onSuccess: reg => {handler}
})
```
But this package will handle all that for you :)