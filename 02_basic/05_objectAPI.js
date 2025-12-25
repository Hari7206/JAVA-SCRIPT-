// today we are learn about the api and code destructure

let Game = {
    GameName: " Brual Gaming",
    GameId: " 534343434",
    Hasloogedin: true,
    lastedateoflogin: '23/12/2004'
}

//know we know the old method to print the any element but what if we want to give it a new name so 
const {GameId: GamerId} = Game  // so this is the basic syntax how we change any stucture name to anothe name
console.log(GamerId) // now our game id is change to gamer id 


// some react syntax also for about the destructure

// const nav = ({vigli})  => {}

// nav(companyname = "hagli")   // so this is nothing and the not use in the java script but it is for the react to know that that also have the destrcture syntax

// now some talk about the api 
// so basically api is the menu of anything we dont have to worry about the how the food will make which ingridiant are they using we only have to handle the api 

// in old coding era the api are written in the xml format but it create a lot of problem that why we make the api in the json

// json are written in the format as 
// {
//     name = " Hari "
//     class = " Bca "
//     section = " A"      // i know it look like the object but it is json and we also have to know that json will both right in the semicolon form that make it the api 
// }


// {
//     "name" = " Hari "
//     "class" = " Bca "
//     "section" = " A"      // this is how key and the value should written in the semi colon
// }

// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }