var bdayinput = document.getElementsByTagName("input")[0];
var button = document.getElementsByTagName("input")[1];

button.addEventListener("click", calculateTotal);

function calculateTotal() {
  let number = 0;
  let value = bdayinput.value;
  let date = new Date(value);
  let day = date.getDate().toString();
  let year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  
  for(i in day) {
    console.log(day[i]);
    number = number + parseInt(day[i]);
  }
  for(i in month) {
    console.log(month[i]);
    number = number + parseInt(month[i]);
  }
  for(i in year) {
    console.log(year[i]);
    number = number + parseInt(year[i]);
  }
  
  alert("YOUR DATE'S TOTAL IS: " + number);
}