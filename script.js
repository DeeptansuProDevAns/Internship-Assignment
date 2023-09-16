const token =
  "BQCcjvXRhP-dgCBunmaLdsKaErx80hI731y3yL4LI6zEU9ecpAG6SFvqtVMD-JGUvC0BuDd5kZR0xIbinPhQRasEox7L1iHoUI7QyW6xoPcCixl40HH8kNijGPTct7ioA5sIXNAAgLDN9weLmvrt6GV-08PcvORasjpbMTLW6tQk2WrXILjbggCQotkmdpn3tgAXpjKJtFXo1xErYLADIdR-zW1gvhrdYKINrnPpklLVGh-JoLie3B-_fJyTh-9DVJbYrO2rX0lRA4ueiDjfdxIX";
var artistList = [
  "4YRxDV8wJFPHPTeXepOstw",
  "0TnOYISbd1XYRBk9myaseg",
  "1mUl05hT77FrwVFW51wOlr",
  "0xWGBvlwCBHAgXyR7TmPwp",
  "2CIMQHirSU0MQqyYHq0eOx",
  "57dN52uHvrHOxijzpIgu3E",
  "1vCWHaC5f2uS3yhpwWbIA6",
  "7o7doCwqft91WC690aglWC",
];
const url = `https://api.spotify.com/v1/artists?ids=${artistList}`;
const request = new Request(
  url,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
  "GET"
);

async function getData() {
  try {
    const response = await fetch(request);
    const data = await response.json();
    if (response.status == 200) {
      showData(data.artists);
    } else {
      console.log("Server Error : ", data.error.message);
    }
  } catch (error) {
    console.log("ERROR : ", error);
  }
}
getData();
function showData(num) {
  let doc = document.getElementById("name");
  const data = num;
  for (let i in num) {
    console.log("times");
    doc.insertAdjacentHTML(
      "beforeend",
      `<div class="container"><div class="main">
    <div class="head">
      <div class="row">
        <div class="col-md-6 image">
          <img
            src=${num[i].images[0].url}
            alt="Image of Artist"
          />
        </div>
        <div class="col-md-6 paragraph">
          <p>Name: ${num[i].name}</p><br />
          <p>Follower: ${num[i].followers.total}</p><br />
          <p>Popularity: ${num[i].popularity}</p><br />
          <p>Music Kind:${num[i].genres?.find((element) => {
        return element;
      })}
          </p><br />
        </div>
      </div></div>`
    );
    console.log(num[i]);
  }
}
showData();
