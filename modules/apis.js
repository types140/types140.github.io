Object.defineProperty(Object.prototype, 'loadMissions',{
  value : function(){
    if (!window.sessionStorage.hasOwnProperty('aMissions') ||
        JSON.parse(window.sessionStorage.aMissions).lastUpdate < (new Date().getTime() - 5 * 1000 * 60))
      fetch('/einsaetze.json')
        .then(res => res.json())
        .then(data => window.sessionStorage.setItem('aMissions',JSON.stringify({lastUpdate: new Date().getTime(),value: data})));

    return JSON.parse(sessionStorage.aMissions).value;
  },
  enumerable : false
});
