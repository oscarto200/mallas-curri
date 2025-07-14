document.addEventListener('DOMContentLoaded', () => {
    
    // --- ELEMENTOS DEL DOM ---
    const grid = document.getElementById('course-grid');
    const resetButton = document.getElementById('reset-button');
    const approvedCreditsEl = document.getElementById('approved-credits');
    const weightedAverageEl = document.getElementById('weighted-average');

    // --- DATOS DE CURSOS (MÚSICA - VIENTOS) ---
    const coursesData = [
        // Ciclo I
        { id: 'EG0125', name: 'Humanidades I', cycle: 1, credits: 3, req: [], coreq: [] },
        { id: 'AM0001', name: 'Curso de Arte', cycle: 1, credits: 3, req: [], coreq: [] },
        { id: 'RP1110', name: 'Repertorios I', cycle: 1, credits: 3, req: [], coreq: [] },
        { id: 'AM1223', name: 'Teoría Musical I', cycle: 1, credits: 2, req: [], coreq: [] },
        { id: 'AM1225', name: 'Entrenamiento Auditivo I', cycle: 1, credits: 2, req: [], coreq: [] },
        { id: 'AM1001', name: 'Flauta I', cycle: 1, credits: 4, req: [], coreq: [] },

        // Ciclo II
        { id: 'EG0126', name: 'Humanidades II', cycle: 2, credits: 3, req: ['EG0125'], coreq: [] },
        { id: 'AM1224', name: 'Teoría Musical II', cycle: 2, credits: 2, req: ['AM1223'], coreq: [] },
        { id: 'AM1226', name: 'Entrenamiento Auditivo II', cycle: 2, credits: 2, req: ['AM1225'], coreq: [] },
        { id: 'AM1002', name: 'Flauta II', cycle: 2, credits: 4, req: ['AM1001'], coreq: [] },
        { id: 'AM1311', name: 'Música de Cámara I', cycle: 2, credits: 1, req: ['AM1001'], coreq: [] },
        { id: 'AM0115', name: 'Coro', cycle: 2, credits: 2, req: [], coreq: [] },

        // Ciclo III
        { id: 'AM2323', name: 'Teoría Musical III', cycle: 3, credits: 2, req: ['AM1224'], coreq: [] },
        { id: 'AM2325', name: 'Entrenamiento Auditivo III', cycle: 3, credits: 2, req: ['AM1226'], coreq: [] },
        { id: 'AM2001', name: 'Flauta III', cycle: 3, credits: 4, req: ['AM1002'], coreq: [] },
        { id: 'AM2312', name: 'Música de Cámara II', cycle: 3, credits: 1, req: ['AM1311'], coreq: [] },
        { id: 'AM1121', name: 'H apreciación Musical Occ.', cycle: 3, credits: 3, req: [], coreq: [] },

        // Ciclo IV
        { id: 'AM2324', name: 'Teoría Musical IV', cycle: 4, credits: 2, req: ['AM2323'], coreq: [] },
        { id: 'AM2326', name: 'Entrenamiento Auditivo IV', cycle: 4, credits: 2, req: ['AM2325'], coreq: [] },
        { id: 'AM2002', name: 'Flauta IV', cycle: 4, credits: 4, req: ['AM2001'], coreq: [] },
        { id: 'AM2313', name: 'Música de Cámara III', cycle: 4, credits: 1, req: ['AM2312'], coreq: [] },
        { id: 'AM1122', name: 'H Apreciación Musical L y CR', cycle: 4, credits: 3, req: [], coreq: [] },

        // Ciclo V
        { id: 'AM3001', name: 'Flauta V', cycle: 5, credits: 5, req: ['AM2002'], coreq: [] },
        { id: 'AM3314', name: 'Música de Cámara IV', cycle: 5, credits: 1, req: ['AM2313'], coreq: [] },
        { id: 'AM2223', name: 'Armonía I', cycle: 5, credits: 2, req: ['AM2324', 'AM2326'], coreq: [] },
        { id: 'AM3211', name: 'H Música Medieval y Renac.', cycle: 5, credits: 3, req: [], coreq: [] },
        { id: 'AM2411', name: 'Conjunto de Vientos I', cycle: 5, credits: 1, req: [], coreq: [] },

        // Ciclo VI
        { id: 'AM3002', name: 'Flauta VI', cycle: 6, credits: 5, req: ['AM3001'], coreq: [] },
        { id: 'AM3315', name: 'Música de Cámara V', cycle: 6, credits: 1, req: ['AM3314'], coreq: [] },
        { id: 'AM2224', name: 'Armonía II', cycle: 6, credits: 2, req: ['AM2223'], coreq: [] },
        { id: 'AM3212', name: 'H Música Barroca', cycle: 6, credits: 3, req: [], coreq: [] },
        { id: 'AM2412', name: 'Conjunto de Vientos II', cycle: 6, credits: 1, req: ['AM2411'], coreq: [] },

        // Ciclo VII
        { id: 'AM4001', name: 'Flauta VII', cycle: 7, credits: 5, req: ['AM3002'], coreq: [] },
        { id: 'AM4316', name: 'Música de Cámara VI', cycle: 7, credits: 1, req: ['AM3315'], coreq: [] },
        { id: 'AM3121', name: 'Contrapunto I', cycle: 7, credits: 2, req: ['AM2224'], coreq: [] },
        { id: 'AM4213', name: 'H Música Clásica', cycle: 7, credits: 3, req: [], coreq: [] },

        // Ciclo VIII
        { id: 'AM4002', name: 'Flauta VIII', cycle: 8, credits: 5, req: ['AM4001'], coreq: [] },
        { id: 'AM4111', name: 'Análisis Musical I', cycle: 8, credits: 2, req: ['AM3121'], coreq: [] },
        { id: 'AM4214', name: 'H Música Siglo XIX', cycle: 8, credits: 3, req: [], coreq: [] },
        { id: 'SR2120', name: 'Seminario de Realidad Nac. I', cycle: 8, credits: 2, req: [], coreq: [] },

        // Ciclo IX
        { id: 'AM4215', name: 'H Música Siglo XX y XXI', cycle: 9, credits: 3, req: [], coreq: [] },
        { id: 'SR2121', name: 'Seminario de Realidad Nac. II', cycle: 9, credits: 2, req: ['SR2120'], coreq: [] },
        { id: 'AM4510', name: 'Trabajo Final de Graduación I', cycle: 9, credits: 3, req: ['AM4002'], coreq: [] },

        // Ciclo X
        { id: 'AM4511', name: 'Trabajo Final de Graduación II', cycle: 10, credits: 3, req: ['AM4510'], coreq: [] },
    ];
    
    let courses = [];

    const loadCourses = () => {
        courses = coursesData.map(course => {
            const rawData = localStorage.getItem(course.id);
            let savedData = null;
            if (rawData) {
                try {
                    savedData = JSON.parse(rawData);
                } catch (e) {
                    if (rawData === 'approved') {
                        savedData = { status: 'approved', grade: null };
                    }
                }
            }
            return { ...course, status: savedData?.status || 'locked', grade: savedData?.grade !== undefined ? savedData.grade : null };
        });
    };

    const renderCourses = () => {
        document.querySelectorAll('.cycle-column').forEach(col => col.innerHTML = '');
        courses.forEach(course => {
            const cycleColumn = document.getElementById(`cycle-${course.cycle}`);
            if (cycleColumn) {
                const courseBox = document.createElement('div');
                courseBox.className = `course-box ${course.status}`;
                courseBox.dataset.id = course.id;
                let gradeIndicator = '';
                if (course.status === 'approved' && course.grade !== null) {
                    gradeIndicator = `<div class="course-grade">${course.grade}</div>`;
                }
                courseBox.innerHTML = `${gradeIndicator}<div class="course-code">${course.id}</div><div class="course-name">${course.name}</div><div class="course-credits">${course.credits} créditos</div>`;
                cycleColumn.appendChild(courseBox);
            }
        });
    };

    const updateStats = () => {
        const approvedCourses = courses.filter(c => c.status === 'approved');
        const totalCredits = approvedCourses.reduce((sum, course) => sum + course.credits, 0);
        
        const coursesForAverage = approvedCourses.filter(c => c.credits > 0 && c.grade !== null);
        const weightedSum = coursesForAverage.reduce((sum, course) => sum + (course.grade * course.credits), 0);
        const totalCreditsForAverage = coursesForAverage.reduce((sum, course) => sum + course.credits, 0);

        const weightedAverage = totalCreditsForAverage > 0 ? (weightedSum / totalCreditsForAverage).toFixed(2) : 'N/A';
        
        approvedCreditsEl.textContent = totalCredits;
        weightedAverageEl.textContent = weightedAverage;
    };

    const updateUI = () => {
        courses.forEach(course => {
            if (course.status === 'approved') return;
            const allReqsMet = course.req.every(reqId => {
                const reqCourse = courses.find(c => c.id === reqId);
                return reqCourse && reqCourse.status === 'approved';
            });
            course.status = allReqsMet ? 'available' : 'locked';
        });
        renderCourses();
        updateStats();
    };

    const handleCourseClick = (e) => {
        const courseBox = e.target.closest('.course-box');
        if (!courseBox) return;
        const courseId = courseBox.dataset.id;
        const course = courses.find(c => c.id === courseId);
        if (course && course.status === 'available') {
            let gradeInput;
            if (course.credits > 0) {
                gradeInput = prompt(`Ingresa la nota obtenida en "${course.name}" (1-10):`);
                if (gradeInput === null) return;
                const grade = parseFloat(gradeInput.replace(',', '.'));
                if (!isNaN(grade) && grade >= 1 && grade <= 10) {
                    course.grade = grade;
                } else {
                    alert("Por favor, ingresa una nota válida entre 1 y 10.");
                    return;
                }
            }
            course.status = 'approved';
            localStorage.setItem(course.id, JSON.stringify({ status: 'approved', grade: course.grade }));
            updateUI();
        }
    };

    const resetGrid = () => {
        if (confirm("¿Estás seguro de que quieres reiniciar toda la malla? Se perderán todos los cursos y notas.")) {
            localStorage.clear();
            loadCourses();
            updateUI();
        }
    };

    // --- INICIALIZACIÓN ---
    grid.addEventListener('click', handleCourseClick);
    resetButton.addEventListener('click', resetGrid);
    
    loadCourses();
    updateUI();
});