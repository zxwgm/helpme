const API_KEY = "test_97ced6b4e97fb289fc622eed2d0000715cc4be5be7a6e998f968ef6a7d7ade9e5fec49e63508ef9593e5360d01be762f";
const characterName = "29420f760887105c3a4d13b738095eb5";
const urlString = "https://open.api.nexon.com/heroes/v1/id?character_name=" + characterName;

const answer = fetch(urlString, {
    headers:{
      "x-nxopen-api-key": API_KEY
    }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

console.log(answer)