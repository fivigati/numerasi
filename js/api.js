// ======================================================
// API NUMERA
// ======================================================

async function getClasses() {

    const { data, error } = await sb
        .from("v_classes")
        .select("*")
        .order("class_name");

    if (error) {

        console.error(error);
        return [];

    }

    return data;

}


// ======================================================
// GET STUDENTS BY CLASS
// ======================================================

async function getStudentsByClass(className) {

    const { data, error } = await sb
        .from("v_students")
        .select("*")
        .eq("class_name", className)
        .order("student_name");

    if (error) {

        console.error(error);
        return [];

    }

    return data;

}
