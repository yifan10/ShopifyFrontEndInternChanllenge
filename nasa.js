//"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=500&api_key="
//https://api.nasa.gov/planetary/apod?api_key=
sendApiRequest("first");
sendApiRequest("second");
async function sendApiRequest(temp) {
  const username = "tNm4ifUUtta2vX0AwsqvWE7aCnGkhKHGrVbyVfcU";
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=" + username
  );
  if (temp == "second") {
    const response = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=" +
        username
    );
  }
  const data = await response.json();
  useApiData(data, temp);
}

function useApiData(data, temp) {
  document.querySelector("#" + temp + "MyImg").src = data.url;
  document.querySelector("#" + temp + "Description").innerHTML =
    data.explanation;
  document.querySelector("#" + temp + "Date").innerHTML = data.date;
  document.querySelector("#" + temp + "Title").innerHTML = data.title;
}

function myFunction(temp) {
  const name = "#" + temp + "B";
  if (document.querySelector(name).innerHTML == "Liked") {
    document.querySelector(name).innerHTML = "Like";
  } else {
    document.querySelector(name).innerHTML = "Liked";
  }
}
const facebook = document.querySelector("#facebook");


async function share(temp) {
    const username = "tNm4ifUUtta2vX0AwsqvWE7aCnGkhKHGrVbyVfcU";
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=" + username
    );
    if (temp == "second") {
      const response = await fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=" +
          username
      );
    }
    const data = await response.json();
    const shareUrl = 'http://www.facebook.com/sharer/sharer.php?u='+data.url;
    window.open(shareUrl, "NewWindow");
}

//document.getElementById("firstButton").onclick = function () {
//  myFunction();
//};
