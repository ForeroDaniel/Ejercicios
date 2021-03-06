//Ejercicios parte 1
//Agrega las porciones de código faltantes para que el código se ejecute sin errores. El código faltante esta indicado por ???

//EJERCICIO 1
const myPromise =  new Promise((res, rej) => {
  setTimeout(() => {
    res('Success')
  }, 850)
})

??? function getResult() {
  const result = ??? myPromise
  
  console.log('Result:', result) // log: 'Result: Success'
}

getResult()
//RESOLVED
const myPromise =  new Promise((res, rej) => {
  setTimeout(() => {
    res('Success')
  }, 850)
})

async function getResult() {
  const result = await myPromise
  
  console.log('Result:', result) // log: 'Result: Success'
}

getResult()






//EJERCICIO 2
const myPromise =  new Promise((success, reject) => {
  setTimeout(() => {
    success(1)
  }, 1000)
})

??? function getResult() {
  const result = ??? myPromise
 
  const result2 = result + 2

  console.log('Result:', ???) // log: 'Result: 3'
}

getResult()
//RESOLVED
const myPromise =  new Promise((success, reject) => {
  setTimeout(() => {
    success(1)
  }, 1000)
})

async function getResult() {
  const result = await myPromise
 
  const result2 = result + 2

  console.log('Result:', result2) // log: 'Result: 3'
}

getResult()


  
  
  

//EJERCICIO 3
const myPromise =  new Promise((success, reject) => {
  setTimeout(() => {
    success(1)
  }, 1000)
})

??? function getResult() {
  const result = ??? myPromise
 
  const result2 = result + 2

  return result2
}

getResult().???((result) => {
  console.log('Result:', result) // log: 'Result: 3'
})
//RESOLVED
const myPromise =  new Promise((success, reject) => {
  setTimeout(() => {
    success(1)
  }, 1000)
})

async function getResult() {
  const result = await myPromise
 
  const result2 = result + 2

  return result2
}

getResult().then((result) => {
  console.log('Result:', result) // log: 'Result: 3'
})


  
  
  

//EJERCICIO 4
const myPromise =  new Promise((success, reject) => {
  setTimeout(() => {
    reject('error!')
  }, 1000)
})

??? function getResult() {
  ??? {
    const result = ??? myPromise 
    console.log(result)
  } catch(???) {
    console.error(err)
  }
}

getResult()
//RESOLVED
const myPromise =  new Promise((success, reject) => {
  setTimeout(() => {
    reject('error!')
  }, 1000)
})

async function getResult() {
  try {
    const result = await myPromise 
    console.log(result)
  } catch(err) {
    console.error(err)
  }
}

getResult()






//Ejercicios parte 2
//Reescribe los bloques de código para usar async/await

//EJERCICIO 1
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('success')
  }, 500)
})

myPromise
  .then((result) => {
    return 'This is a ' + result
  })
  .then((result) => {
    console.log(result)
  })
  //RESOLVED
  const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('success')
  }, 500)
})

async function getResult() {
    const result = await myPromise 
    console.log(result)
 }
 getResult()  
  
  
  
  //EJERCICIO 2
  const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(1)
    } else {
      reject('An error has occurred')
    }
  }, 500)
})

myPromise
  .then((result) => {
    return result + 1
  })
  .then((result) => {
   console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })

  //RESOLVED
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(1)
    } else {
      reject('An error has occurred')
    }
  }, 500)
})

async function getResult() {
    try {
    const result = await myPromise 
    console.log(result)
  } catch(err) {
    console.error(err)
  }
}
 getResult() 
