/* 頁面資料定時儲存Storage */

$(function() {
  inputLoad());
  setInterval(inputSave, 1000);
});

function inputSave() {
  window.localStorage["local_input"] = document.getElementById("input_local").value;
  window.sessionStorage["session_input"] = document.getElementById("input_session").value;
}

function inputLoad() {
  if (window.localStorage["local_input"] != "") document.getElementById("input_local").value = window.localStorage["local_input"];
  if (window.sessionStorage["session_input"] != "") document.getElementById("input_session").value = window.sessionStorage["session_input"];
}

/*
HTML5的Storage主要分為兩種：localStorage與sessionStorage
這兩者主要在生命週期上有較明顯的差別
localStorage的生命週期較長，原則上要等到透過Javascript將內容清掉或者使用者清空Cache時才會消失
sessionStorage則是在Browser/Tab關閉時就會清空
Link: http://www.dotblogs.com.tw/jimmyyu/archive/2011/03/27/html5-client-storage.aspx
*/
