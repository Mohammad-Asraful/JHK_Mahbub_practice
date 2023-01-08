// JavaScript Object Notation
// JSON
const user = { id: 11, name: 'Gorib Amir', job: 'actor' }
console.log(user)

const stringify = JSON.stringify(user)
console.log(stringify)

const shop = {
   name: 'Alia Store',
   address: 'Ranbir road',
   products: ['laptop', 'mobile', 'pepsi'],
   owner: {
      name: 'Alia Bhatt',
      propession: 'Actor'
   },
   isExpensive: false
}
// javascript er object ke string korte chaile JSON.stringify diye object theke string a rupantor kora jabe
const shopStingified = JSON.stringify(shop)
console.log(shopStingified)

// javascript er object ke string theke abar ager object type a nite chaile JSON.parse diye abar ager moto object a rupantor kora jabe
const converted = JSON.parse(shopStingified)
console.log(converted)