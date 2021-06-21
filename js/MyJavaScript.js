var Scene_number_1 = 1;
var present_scene_1 = 1;
var Scene_number_2 = 1;
var present_scene_2 = 1;
var CH_channel_base = 0;
function Change_Background_Color(num) {
  var x = document.getElementsByClassName("picker")[num].id;
  document.body.style.backgroundColor = x;
}
function DarkTheme() {
  document.body.style.backgroundColor = "black";
}
function LightTheme() {
  document.body.style.backgroundColor = "white";
}
function DefaultTheme() {
  document.body.style.backgroundColor = "LightGrey";
}
function SetProfilePic(element) {
  //alert("select");
  document.getElementById("DisplayPic").src = element.src;
}
function trial() {
  alert("Keep trying");
  //document.write("Hello World!!!!");
}
function NextScene() {
  if (CH_channel_base == 0) {
    present_scene_1 = (Scene_number_1) % 5;
    switch (present_scene_1) {
      case 0:
        document.getElementById("SceneNum").innerHTML = "5/5"
        document.getElementById("TV1").src = "../img/TV7.gif";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_1 += 1;
        break;
      case 1:
        document.getElementById("SceneNum").innerHTML = "1/5"
        document.getElementById("TV1").src = "../img/TV3.gif";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_1 += 1;
        break;
      case 2:
        document.getElementById("SceneNum").innerHTML = "2/5"
        document.getElementById("TV1").src = "../img/TV4.gif";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_1 += 1;
        break;
      case 3:
        document.getElementById("SceneNum").innerHTML = "3/5"
        document.getElementById("TV1").src = "../img/TV5.gif";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_1 += 1;
        break;
      case 4:
        document.getElementById("SceneNum").innerHTML = "4/5"
        document.getElementById("TV1").src = "../img/TV6.gif";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_1 += 1;
        break;
    }
  }
  if (CH_channel_base == 1) {
    present_scene_2 = (Scene_number_2) % 5;
    switch (present_scene_2) {
      case 0:
        document.getElementById("SceneNum").innerHTML = "5/5"
        document.getElementById("TV1").src = "../img/CH5.jpg";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_2 += 1;
        break;
      case 1:
        document.getElementById("SceneNum").innerHTML = "1/5"
        document.getElementById("TV1").src = "../img/CH1.jpg";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_2 += 1;
        break;
      case 2:
        document.getElementById("SceneNum").innerHTML = "2/5"
        document.getElementById("TV1").src = "../img/CH2.jpg";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_2 += 1;
        break;
      case 3:
        document.getElementById("SceneNum").innerHTML = "3/5"
        document.getElementById("TV1").src = "../img/CH3.jpg";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_2 += 1;
        break;
      case 4:
        document.getElementById("SceneNum").innerHTML = "4/5"
        document.getElementById("TV1").src = "../img/CH4.jpg";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_2 += 1;
        break;
    }
  }

}
function TurnOff() {
  Scene_number_1 = 1;
  present_scene_1 = 1;
  Scene_number_2 = 1;
  present_scene_2 = 1;
  document.getElementById("TV1").src = "../img/off.png";
}
function Replay() {
  if (CH_channel_base == 0) {
    Scene_number_1 = 1;
    present_scene_1 = 1;
    document.getElementById("TV1").src = "../img/TV3.gif";
  }
  else {
    Scene_number_2 = 1;
    present_scene_2 = 1;
    document.getElementById("TV1").src = "../img/CH1.jpg";
  }
}
function Previous() {
  if (CH_channel_base == 0) {
    present_scene_1 = (Scene_number_1) % 5;
    switch (present_scene_1) {
      case 0:
        document.getElementById("SceneNum").innerHTML = "4/5"
        document.getElementById("TV1").src = "../img/TV6.gif";
        document.getElementById("TV1").className = "OnScreen";
        Scene_number_1 = 4;
        break;
      case 1:
        document.getElementById("SceneNum").innerHTML = "5/5"
        document.getElementById("TV1").src = "../img/TV7.gif";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_1 = 0;
        break;
      case 2:
        document.getElementById("SceneNum").innerHTML = "1/5"
        document.getElementById("TV1").src = "../img/TV3.gif";
        document.getElementById("TV1").className = "OnScreen";
        Scene_number_1 = 1;
        break;
      case 3:
        document.getElementById("SceneNum").innerHTML = "2/5"
        document.getElementById("TV1").src = "../img/TV4.gif";
        document.getElementById("TV1").className = "OnScreen";
        Scene_number_1 = 2;
        break;
      case 4:
        document.getElementById("SceneNum").innerHTML = "3/5"
        document.getElementById("TV1").src = "../img/TV5.gif";
        document.getElementById("TV1").className = "OnScreen";
        Scene_number_1 = 3;
        break;
    }
  }
  else{
    present_scene_2 = (Scene_number_2) % 5;
    switch (present_scene_2) {
      case 0:
        document.getElementById("SceneNum").innerHTML = "4/5"
        document.getElementById("TV1").src = "../img/CH4.jpg";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_2 = 4;
        break;
      case 1:
        document.getElementById("SceneNum").innerHTML = "5/5"
        document.getElementById("TV1").src = "../img/CH5.jpg";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_2 = 5;
        break;
      case 2:
        document.getElementById("SceneNum").innerHTML = "1/5"
        document.getElementById("TV1").src = "../img/CH1.jpg";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_2 = 1;
        break;
      case 3:
        document.getElementById("SceneNum").innerHTML = "2/5"
        document.getElementById("TV1").src = "../img/CH2.jpg";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_2 = 2;
        break;
      case 4:
        document.getElementById("SceneNum").innerHTML = "3/5"
        document.getElementById("TV1").src = "../img/CH3.jpg";
        document.getElementById("TV1").className = "OnScreen"
        Scene_number_2 = 3;
        break;
    }
  }
}
function SwitchChannel() {
  if (CH_channel_base == 0) {
    document.getElementById("SceneNum").innerHTML = "1/5"
    document.getElementById("TV1").src = "../img/CH1.jpg";
    Scene_number_2 += 1;
    CH_channel_base = 1;
  }
  else {
    document.getElementById("SceneNum").innerHTML = "1/5"
    document.getElementById("TV1").src = "../img/TV3.gif";
    Scene_number_1 += 1;
    CH_channel_base = 0;
  }
}
function Volume_Dec(){
  alert("You are decreasing the volume");
}
function Volume_Inc(){
  alert("You are increasing the volume");
}
function Add_to_table(){
  var table = document.getElementById("Data");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = document.forms["myForm"]["entry1"].value;
  cell2.innerHTML = document.forms["myForm"]["entry2"].value;
  cell3.innerHTML = document.forms["myForm"]["entry3"].value;
  document.forms["myForm"]["entry1"].value = "";
  document.forms["myForm"]["entry2"].value = "";
  document.forms["myForm"]["entry3"].value = "";
}

