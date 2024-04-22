let first_slide = document.querySelector('.main')
let second_slide = document.querySelector('.game')
let Start = document.querySelector('.upg-btn')


let sec = document.querySelector('.next')
let fir = document.querySelector('.nnext')


let firs_upg = document.querySelector('.first-upgrade')
let second_upg = document.querySelector('.sec-upgrade')


let coin_valut = document.querySelector('.coin')
let first_car = document.querySelector('.first-car')
let second_car = document.querySelector('.second-car')




first_car.addEventListener('click', function(){
    coin++
coin_valut.innerHTML = coin

})


document.querySelector('.coin').innerHTML =  document.querySelector('.coin').innerHTML


let coin = 10000000



second_car.addEventListener('click', function(){
    coin++
    coin++

    coin_valut.innerHTML = coin
  
    })


    
Start.addEventListener('click', function(){
    first_slide.style.display = 'none'
    second_slide.style.display = 'flex'
    firs_upg.style.display = 'flex'
})





fir.addEventListener('click', function(){
    firs_upg.style.display = 'flex'
    second_upg.style.display = 'none'
   
})

let cockie = document.cookie = `user-name=${coin_valut.innerHTML};max-age=100000000`

let cockieSaved = false

// let btnForUpg = document.querySelectorAll('.but')


// let youAlredyBuyIt = 'dont'

//  class User{
//    constructor(namebtn, price,) {
//        this.namebtn = namebtn
//        this.price= price

//    }
// }

// let btn1 = new User('Buy New wheels', 200 )
// let btn2 = new User('Buy motor', 5000 )
// let btn3 = new User('Buy suvenirs', 50 )
// let btn4 = new User('Buy new Garage', 5000 )



// btnForUpg.forEach((item) => {
//     item.addEventListener('click', function(){

//        if(coin_valut.innerHTML <= '4'){
//             alert('you haven`t enought money')
//         } 
       
        
// if(youAlredyBuyIt === 'dont'){
//     if(coin_valut.innerHTML >= '5'){

             
//         youAlredyBuyIt = 'Buy'

//         first_car.addEventListener('click', function(){
//             coin++
//         coin_valut.innerHTML = coin
       

    
//         })
//         item.innerHTML = 'you alredy buy this'
//     }

   
// }
     

            
//         }
//     )
//     })



let newGarage = document.querySelector('.garage')
let newMotor = document.querySelector('.motor')
let newWheels = document.querySelector('.wheels')
let newSuvenirs = document.querySelector('.suvenirs')



        let buyy = 'buyy'

        newMotor.addEventListener('click', function(){
            if(buyy === 'buyy'){
                if(coin_valut.innerHTML >= 10000){
                    coin = coin - 10000
                    coin_valut.innerHTML = coin

                    first_car.addEventListener('click', function(){
                                   coin++
                                   coin++
                                   coin++
                            coin_valut.innerHTML = coin
                    })

                    newMotor.innerHTML = 'You bought it'
                    newMotor.style.background = 'gray'
    
                    buyy = 'lol'
                    
                }else{
                   
                    coin_valut.style.color = 'red'
                    coin_valut.style.scale = '1.2'
                    setTimeout(function(){
                        coin_valut.style.color = 'gold'
                        coin_valut.style.scale = '1'
                    },500)
                    setTimeout(function(){
                        coin_valut.style.color = 'red'
                        coin_valut.style.scale = '1.2'
                    },1000)
                    setTimeout(function(){
                        coin_valut.style.color = 'gold'
                        coin_valut.style.scale = '1'
                    },1500)
                }
           
            
            }})


            let buyyy = 'buyyy'

            newSuvenirs.addEventListener('click', function(){
                if(buyyy === 'buyyy'){
                    if(coin_valut.innerHTML >= 100){
                        coin = coin - 100
                        coin_valut.innerHTML = coin
    
                        first_car.addEventListener('click', function(){
                                       coin = coin + 1
                                
                                coin_valut.innerHTML = coin
                        })
    
                        newSuvenirs.innerHTML = 'You bought it'
                        newSuvenirs.style.background = 'gray'
        
                        buyyy = 'lol'
                        
                    }else{
                      
                        coin_valut.style.color = 'red'
                        coin_valut.style.scale = '1.2'
                        setTimeout(function(){
                            coin_valut.style.color = 'gold'
                            coin_valut.style.scale = '1'
                        },500)
                        setTimeout(function(){
                            coin_valut.style.color = 'red'
                            coin_valut.style.scale = '1.2'
                        },1000)
                        setTimeout(function(){
                            coin_valut.style.color = 'gold'
                            coin_valut.style.scale = '1'
                        },1500)
                    }
               
                
                }})




                let buyyyy = 'buyyyy'

                newWheels.addEventListener('click', function(){
                    if(buyyyy === 'buyyyy'){
                        if(coin_valut.innerHTML >= 1000){
                            coin = coin - 1000
                            coin_valut.innerHTML = coin
        
                            first_car.addEventListener('click', function(){
                                           coin++
                                           coin++
                                    
                                    coin_valut.innerHTML = coin
                            })
        
                            newWheels.innerHTML = 'You bought it'
                            newWheels.style.background = 'gray'
            
                            buyyyy = 'lol'
                            
                        }else{
                          
                           coin_valut.style.color = 'red'
                    coin_valut.style.scale = '1.2'
                    setTimeout(function(){
                        coin_valut.style.color = 'gold'
                        coin_valut.style.scale = '1'
                    },500)
                    setTimeout(function(){
                        coin_valut.style.color = 'red'
                        coin_valut.style.scale = '1.2'
                    },1000)
                    setTimeout(function(){
                        coin_valut.style.color = 'gold'
                        coin_valut.style.scale = '1'
                    },1500)
                        }
                   
                    
                    }})




                    let buy = 'buy'
                    let newwGarage = 'Nogarage'



    newGarage.addEventListener('click', function(){
        if(buy === 'buy'){
            if(coin_valut.innerHTML >= 50000){
                coin = coin - 50000
                coin_valut.innerHTML = coin
            
                newGarage.innerHTML = 'You bought it'
                newGarage.style.background = 'gray'
                newwGarage = 'garage'
                buy = 'lol'
                
            }else{
              
                coin_valut.style.color = 'red'
                coin_valut.style.scale = '1.2'
                setTimeout(function(){
                    coin_valut.style.color = 'gold'
                    coin_valut.style.scale = '1'
                },500)
                setTimeout(function(){
                    coin_valut.style.color = 'red'
                    coin_valut.style.scale = '1.2'
                },1000)
                setTimeout(function(){
                    coin_valut.style.color = 'gold'
                    coin_valut.style.scale = '1'
                },1500)
            }
       
        
        }})


    
        
        
        sec.addEventListener('click', function(){

            if(newwGarage === 'garage'){

                firs_upg.style.display = 'none'
                second_upg.style.display = 'flex'
                
            }else{
                newGarage.style.background = 'red'
                setTimeout(function(){
                    newGarage.style.background =  'rgb(101, 156, 211)'
                },1000)

            }
            
          
       
         } )







      


         let cookies = document.cookie.split('; ')
         let isCookieSaved = false
        
         for (let i = 0; i < cookies.length; i += 1) {
             if (cookies[i].split('=')[0] == 'coin') {
                 isCookieSaved = true
                 coin = cookies[i].split('=')[1]
                 console.log(coin)
                 break
             }
         }
        




