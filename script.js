function hun() {
  document.getElementById('hun').style.display = 'block';
  document.getElementById('eng').style.display = 'none';
  document.getElementById('fr').style.display = 'none';
}

function eng() {
  document.getElementById('hun').style.display = 'none';
  document.getElementById('eng').style.display = 'block';
  document.getElementById('fr').style.display = 'none';
}

function fr() {
  document.getElementById('hun').style.display = 'none';
  document.getElementById('eng').style.display = 'none';
  document.getElementById('fr').style.display = 'block';
}