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



async function getStudentsByClass(classId) {

    const { data, error } = await sb
        .from("v_students")
        .select("*")
        .eq("class_id", classId)
        .order("student_name");

    if (error) {

        console.error(error);
        return [];

    }

    return data;

}
