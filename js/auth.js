// ======================================================
// Login Page
// ======================================================

const kelasSelect = document.getElementById("kelas");

const muridSelect = document.getElementById("murid");

const btnLogin = document.getElementById("btnLogin");

const loginForm = document.getElementById("loginForm");



// ===========================================
// LOAD KELAS
// ===========================================

document.addEventListener("DOMContentLoaded", async () => {

    const classes = await getClasses();

    kelasSelect.innerHTML =
        '<option value="">-- Pilih Kelas --</option>';

    classes.forEach(kelas => {

        kelasSelect.innerHTML += `
<option value="${kelas.class_name}">
    ${kelas.class_name}
</option>
`;

});



// ===========================================
// LOAD MURID
// ===========================================

kelasSelect.addEventListener("change", async () => {

    const classId = kelasSelect.value;

    muridSelect.disabled = true;

    muridSelect.innerHTML =
        '<option>Memuat...</option>';

    btnLogin.disabled = true;

    const students = await getStudentsByClass(classId);

    muridSelect.innerHTML =
        '<option value="">-- Pilih Nama --</option>';

    students.forEach(student => {

        muridSelect.innerHTML +=

        `<option value="${student.id}">
            ${student.student_name}
        </option>`;

    });

    muridSelect.disabled = false;

});



// ===========================================
// AKTIFKAN BUTTON
// ===========================================

muridSelect.addEventListener("change", () => {

    btnLogin.disabled = muridSelect.value === "";

});



// ===========================================
// LOGIN
// ===========================================

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const student = {

        classId: kelasSelect.value,

        className:
            kelasSelect.options[kelasSelect.selectedIndex].text,

        studentId: muridSelect.value,

        studentName:
            muridSelect.options[muridSelect.selectedIndex].text

    };

    localStorage.setItem(
        "numera_student",
        JSON.stringify(student)
    );

    window.location.href = "dashboard.html";

});
