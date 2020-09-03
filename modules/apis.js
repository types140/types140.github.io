Object.defineProperty(Object.prototype, 'loadMissions',{
    value : async function(){
        if (!window.sessionStorage.hasOwnProperty('api_credits_cache') ||
        JSON.parse(window.sessionStorage.api_credits_cache).lastUpdate < (new Date().getTime() - 5 * 1000 * 60))
        await fetch('/einsaetze.json')
            .then(res => res.json())
            .then(data => window.sessionStorage.setItem('api_credits_cache',JSON.stringify({lastUpdate: new Date().getTime(),value: data})));
    },
    enumerable : false
});
