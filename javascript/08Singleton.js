/**
 * Immediately Invoked Function Expression  
 */
var appSingleton  = (function(){
      return {
          appName:"Sample App",
          appVersion : 1.0
      }
})();
console.log(appSingleton.appName);
console.log(appSingleton.appVersion);
