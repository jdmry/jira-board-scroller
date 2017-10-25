function save_options() {
  var speed = document.getElementById('speed').value;
  var textBigger = document.getElementById('textbigger').checked;
  chrome.storage.sync.set({
    speed: speed*1000,
    textBigger: textBigger
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    speed: '60000',
    textBigger: true
  }, function(items) {
    document.getElementById('speed').value = items.speed/1000;
    document.getElementById('textbigger').checked = items.textBigger;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);