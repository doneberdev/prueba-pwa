if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso yeah!', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
      caches.open('miCache-v1')
  }
  if( window.caches){
  }