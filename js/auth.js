const kelas = document.getElementById("kelas");
const murid = document.getElementById("murid");
const btnLogin = document.getElementById("btnLogin");

murid.addEventListener("change", () => {
    btnLogin.disabled = !murid.value;
});
