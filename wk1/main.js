// consts
const listViewContainer = document.querySelector(".list-group--accumulated");
const lastUpdateDate = document.getElementById("last-update-date");

// process data
let accData = {};

if (listViewContainer) {
  d3.csv(
    "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv"
  ).then(function (data) {
    let processedStates = Object.keys(accData);

    let numData = data.length;
    let index = 0;

    data.forEach((dataItem) => {
      if (processedStates.indexOf(dataItem.state) === -1) {
        accData[dataItem.state] = {
          fips: parseInt(dataItem.fips),
          cases: parseInt(dataItem.cases),
          deaths: parseInt(dataItem.deaths),
        };
      } else {
        accData[dataItem.state] = {
          fips: parseInt(dataItem.fips) + accData[dataItem.state]["fips"],
          cases: parseInt(dataItem.cases) + accData[dataItem.state]["cases"],
          deaths: parseInt(dataItem.deaths) + accData[dataItem.state]["deaths"],
        };
      }

      processedStates = Object.keys(accData);

      if (++index === numData) {
        lastUpdateDate.innerHTML = dataItem.date;
      }
    });

    // fill in list
    const keys = Object.keys(accData);
    keys.forEach((key) => {
      let listItem = `<li class="list-group-item"><h3>${key}</h3><span class="list-group-item__detail">fips: ${accData[key].fips}</span><span class="list-group-item__detail">cases: ${accData[key].cases}</span><span class="list-group-item__detail">deaths: ${accData[key].deaths}</span></li>`;

      listViewContainer.innerHTML += listItem;
    });
  });
}
