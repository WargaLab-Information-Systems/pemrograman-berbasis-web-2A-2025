function toggleMode() {
  document.body.classList.toggle("dark-mode"); //mengubah warna body
  document.getElementById("moon-icon").classList.toggle("hidden"); // menyembunyikan icon
  document.getElementById("sun-icon").classList.toggle("hidden"); // menyembunyikan icon
  document.getElementById("desk-dark-1").classList.toggle("text-white"); //merubah warna text
  document.getElementById("desk-dark-2").classList.toggle("text-white"); //merubah warna text
  document.getElementById("desk-dark-3").classList.toggle("text-white"); //merubah warna text
  document.getElementById("text-1").classList.toggle("text-black"); //merubah warna text
  document.getElementById("text-2").classList.toggle("text-black"); //merubah warna text
  document.getElementById("text-3").classList.toggle("text-black"); //merubah warna text
  document.getElementById("text-4").classList.toggle("text-black"); //merubah warna text
  document.getElementById("price").classList.toggle("text-black"); //merubah warna text
}

function validasi() {
  let email = document.getElementById("email").value;
  let nama = document.getElementById("nama").value;
  let password = document.getElementById("password").value;

  if (email == "") {
    document.getElementById("email-error").style.display = "block";
  }

  if (nama == "") {
    document.getElementById("nama-error").style.display = "block";
  }

  if (password == "") {
    document.getElementById("password-error").style.display = "block";
  }
  return true;
}
