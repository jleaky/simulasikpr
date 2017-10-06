const hitung = function() {
  var nilai1,
    nilai2,
    nilai3 = 0;

  nilai1 = document.getElementById("Luas").value;
  nilai2 = document.getElementById("HargaTanah").value;

  nilai3 = parseInt(nilai1) * parseInt(nilai2);

  document.getElementById("HargaProperti").value = nilai3;
};

const persen = function() {
  var xpersen,
    xjumlah = 0;
  e = document.getElementById("persen");
  xpersen = e.options[e.selectedIndex].text;
  xjumlah = document.getElementById("HargaProperti").value * xpersen / 100;
  document.getElementById("UangMuka").value = xjumlah;
  hitungplafon();
};

const hitungplafon = function() {
  var plafon1,
    plafon2,
    plafon3,
    angsuran,
    xtenor = 0;

  plafon1 = document.getElementById("HargaProperti").value;
  plafon2 = document.getElementById("UangMuka").value;

  plafon3 = parseInt(plafon1) - parseInt(plafon2);

  document.getElementById("Plafon").value = plafon3;
  e = document.getElementById("Tenor");
  xtenor = e.options[e.selectedIndex].text;
  angsuran = document.getElementById("Plafon").value / xtenor;

  document.getElementById("Angsuran").value = angsuran;
};

const tenor = function() {
  var xtenor2 = 0;

  e = document.getElementById("Tenor");
  xtenor2 = e.options[e.selectedIndex].text;
  angsuran = document.getElementById("Plafon").value / xtenor2;
  document.getElementById("Angsuran").value = angsuran;
};
