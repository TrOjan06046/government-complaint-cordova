cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-appversion/www/app-version.js",
        "id": "cordova-plugin-appversion.RareloopAppVersion",
        "pluginId": "cordova-plugin-appversion",
        "clobbers": [
            "AppVersion"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/test/tests.js",
        "id": "cordova-plugin-x-toast.tests",
        "pluginId": "cordova-plugin-x-toast"
    },
    {
        "file": "plugins/cordova.custom.plugins.exitapp/www/ExitApp.js",
        "id": "cordova.custom.plugins.exitapp.exitApp",
        "pluginId": "cordova.custom.plugins.exitapp",
        "merges": [
            "navigator.app"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-appversion": "1.0.0",
    "cordova-plugin-x-toast": "2.6.0",
    "cordova.custom.plugins.exitapp": "1.0.0"
}
// BOTTOM OF METADATA
});