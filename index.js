let cars = [
    {
        name: "malibu",
        price: 31000
    },
    {
        name: "nexia",
        price: 12000
    },
    {
        name: "onix",
        price: 21000
    },
    {
        name: "tahoe",
        price: 100000
    },
    {
        name: "cobalt",
        price: 13000
    },
    {
        name: "tracker",
        price: 26000
    },
    {
        name: "kia k5",
        price: 43000
    },
    {
        name: "santafe",
        price: 50000
    },
    {
        name: "elantra",
        price: 35000
    },
    {
        name: "tico",
        price: 2500
    }
]

let from = prompt('от') // 10000
let up = prompt('до') // 40000

for(let item of cars){
    if(item.price >= from && item.price <= up){
        console.log(`${item.name} - цена: $${item.price} `)

        let buy_car = prompt('какую машину')
            if(buy_car == item.name){
                let pay = prompt('оплатить')
                if(pay > item.price){
                    alert(`Машиа куплена, сдачи:${pay - item.price}`)
                }else if(pay < item.price){
                    alert('недостаточно денег')
                }else{
                    alert('машина ваша')
                }
            }
    }
    
}
