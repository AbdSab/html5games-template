const games = [
    {
      "_id": "5c6fbc4bb8a15d514da46c18",
      "title": "Soprano",
      "image": "https://picsum.photos/200/200?image=0"
    },
    {
      "_id": "5c6fbc4b0afaa676b14d54f1",
      "title": "Comvey",
      "image": "https://picsum.photos/200/200?image=1"
    },
    {
      "_id": "5c6fbc4beb5b24d63a8932d0",
      "title": "Aclima",
      "image": "https://picsum.photos/200/200?image=2"
    },
    {
      "_id": "5c6fbc4b9cc23ecb109d1c8f",
      "title": "Slofast",
      "image": "https://picsum.photos/200/200?image=3"
    },
    {
      "_id": "5c6fbc4b63ce391a89017991",
      "title": "Daido",
      "image": "https://picsum.photos/200/200?image=4"
    },
    {
      "_id": "5c6fbc4bc0831c009943ff3d",
      "title": "Brainclip",
      "image": "https://picsum.photos/200/200?image=5"
    },
    {
      "_id": "5c6fbc4b5b9e2573173f0089",
      "title": "Unisure",
      "image": "https://picsum.photos/200/200?image=6"
    },
    {
      "_id": "5c6fbc4b74d5be5985109101",
      "title": "Isosphere",
      "image": "https://picsum.photos/200/200?image=7"
    },
    {
      "_id": "5c6fbc4b05c6d93feec34b3f",
      "title": "Twiggery",
      "image": "https://picsum.photos/200/200?image=8"
    },
    {
      "_id": "5c6fbc4b6612fe8834b361af",
      "title": "Medalert",
      "image": "https://picsum.photos/200/200?image=9"
    },
    {
      "_id": "5c6fbc4b5a7c987cbe6114fb",
      "title": "Kidstock",
      "image": "https://picsum.photos/200/200?image=10"
    },
    {
      "_id": "5c6fbc4b2988227a5d535ce0",
      "title": "Quonata",
      "image": "https://picsum.photos/200/200?image=11"
    },
    {
      "_id": "5c6fbc4beda8bbe824a8c4f3",
      "title": "Zaphire",
      "image": "https://picsum.photos/200/200?image=12"
    },
    {
      "_id": "5c6fbc4b5d3e621e21df13b3",
      "title": "Bittor",
      "image": "https://picsum.photos/200/200?image=13"
    },
    {
      "_id": "5c6fbc4b1efc353db28185c8",
      "title": "Waterbaby",
      "image": "https://picsum.photos/200/200?image=14"
    },
    {
      "_id": "5c6fbc4b6a0aa45c0f4646ab",
      "title": "Anivet",
      "image": "https://picsum.photos/200/200?image=15"
    },
    {
      "_id": "5c6fbc4b35ab2fe1dddbc318",
      "title": "Bleendot",
      "image": "https://picsum.photos/200/200?image=16"
    },
    {
      "_id": "5c6fbc4b916cf0fae5f38775",
      "title": "Velos",
      "image": "https://picsum.photos/200/200?image=17"
    },
    {
      "_id": "5c6fbc4beaf37e18132f3753",
      "title": "Grupoli",
      "image": "https://picsum.photos/200/200?image=18"
    },
    {
      "_id": "5c6fbc4b5480b6ebe7f40171",
      "title": "Comtrak",
      "image": "https://picsum.photos/200/200?image=19"
    },
    {
      "_id": "5c6fbc4bf793c5700ce03da4",
      "title": "Insuron",
      "image": "https://picsum.photos/200/200?image=20"
    },
    {
      "_id": "5c6fbc4bee24f92a244f4d16",
      "title": "Eventage",
      "image": "https://picsum.photos/200/200?image=32"
    },
    {
      "_id": "5c6fbc4ba3326ae1ba67fcd2",
      "title": "Melbacor",
      "image": "https://picsum.photos/200/200?image=21"
    },
    {
      "_id": "5c6fbc4b70c2af7b7e57be98",
      "title": "Mantrix",
      "image": "https://picsum.photos/200/200?image=13"
    },
    {
      "_id": "5c6fbc4b56e537f50d90c800",
      "title": "Tingles",
      "image": "https://picsum.photos/200/200?image=32"
    },
    {
      "_id": "5c6fbc4bc226f64e7e312469",
      "title": "Sentia",
      "image": "https://picsum.photos/200/200?image=345"
    },
    {
      "_id": "5c6fbc4b9ebe9b529fec2eab",
      "title": "Qiao",
      "image": "https://picsum.photos/200/200?image=423"
    },
    {
      "_id": "5c6fbc4b457ae728d2f56b7f",
      "title": "Eplode",
      "image": "https://picsum.photos/200/200?image=43"
    },
    {
      "_id": "5c6fbc4bf95d77cd02207f3b",
      "title": "Xiix",
      "image": "https://picsum.photos/200/200?image=54"
    },
    {
      "_id": "5c6fbc4bf078ee8f8aec3586",
      "title": "Cytrek",
      "image": "https://picsum.photos/200/200?image=23"
    },
    {
      "_id": "5c6fbc4bd3016b389b1064c5",
      "title": "Nspire",
      "image": "https://picsum.photos/200/200?image=54"
    },
    {
      "_id": "5c6fbc4b260bb2991bf21d15",
      "title": "Imkan",
      "image": "https://picsum.photos/200/200?image=64"
    },
    {
      "_id": "5c6fbc4b3384fb748abb1141",
      "title": "Neteria",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4ba24de1523d4056b0",
      "title": "Zentime",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b8f582cf62f86482b",
      "title": "Snacktion",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4ba405d5bcd5449851",
      "title": "Flotonic",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4bc4cbafb2522973fa",
      "title": "Liquidoc",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b1d0ac5ab68ba5693",
      "title": "Visalia",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b01b6e7411f9b290d",
      "title": "Portalis",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b3afc35d900f99933",
      "title": "Premiant",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4bf27c27559c2342d3",
      "title": "Amril",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4bf011e5d1e9fd6367",
      "title": "Springbee",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4bf50eac47b9d047fa",
      "title": "Thredz",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b345c8f6ac6b9d4e1",
      "title": "Bluegrain",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b0df5c21a01b5e176",
      "title": "Zillanet",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b1e7529a6811a3984",
      "title": "Fleetmix",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b9ad4c1698c2ff4c9",
      "title": "Softmicro",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4bca4c29875b818853",
      "title": "Strezzo",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4ba65e7e71efaf5d96",
      "title": "Geostele",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b0acf8d50d30682b2",
      "title": "Endicil",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b7a3a3d66caba8286",
      "title": "Parcoe",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b2dc9748970823fef",
      "title": "Assistia",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b841f772d5e863e6c",
      "title": "Elita",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4ba8538b5161ff48cc",
      "title": "Barkarama",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b4eefd0377870b581",
      "title": "Entroflex",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4bce7c1fabcf612fea",
      "title": "Turnabout",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b1ab9f25a76a1d992",
      "title": "Kage",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b5606a01d1d5db09d",
      "title": "Kyaguru",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4bb646b0c898eeb32e",
      "title": "Sunclipse",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b33d1530af2746815",
      "title": "Artworlds",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b0adc972b0b8472b5",
      "title": "Conferia",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4bd1286db84e0bb540",
      "title": "Comcur",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4bf23eb8ce2d0d2c14",
      "title": "Gushkool",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b6d1546a858402ca3",
      "title": "Zaya",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4b92c911d23eb29de3",
      "title": "Globoil",
      "image": "https://picsum.photos/200/200?image="
    },
    {
      "_id": "5c6fbc4bd5c0a95707a2502d",
      "title": "Cytrex",
      "image": "https://picsum.photos/200/200?image="
    }
  ]

export default games;