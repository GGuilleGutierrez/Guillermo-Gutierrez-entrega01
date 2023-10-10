const getExperience = async () => {
    const data = await fetch("https://my-json-server.typicode.com/GGuilleGutierrez/db-portfolio-digitalers/experience");
    if (data.ok) {
        return data.json();
    } else {
        return new Error("No se pudo conectar con el servidor.");
    }
};

(async () => {
    try {
        const experience = await getExperience();
        if (experience instanceof Error) throw experience;

        const exp1 = experience[0];
        const img1 = document.getElementById("img-exp1");
        img1.src = exp1.src;
        img1.alt = exp1.alt;
        const date1 = document.getElementById("date-text1");
        date1.textContent = exp1.date;
        const job1 = document.getElementById("job1");
        job1.textContent = exp1.job;
        const desc1 = document.getElementById("description1");
        desc1.textContent = exp1.description;

        const exp2 = experience[1];
        const img2 = document.getElementById("img-exp2");
        img2.src = exp2.src;
        img2.alt = exp2.alt;
        const date2 = document.getElementById("date-text2");
        date2.textContent = exp2.date;
        const job2 = document.getElementById("job2");
        job2.textContent = exp2.job;
        const desc2 = document.getElementById("description2");
        desc2.textContent = exp2.description;

        const exp3 = experience[2];
        const img3 = document.getElementById("img-exp3");
        img3.src = exp3.src;
        img3.alt = exp3.alt;
        const date3 = document.getElementById("date-text3");
        date3.textContent = exp3.date;
        const job3 = document.getElementById("job3");
        job3.textContent = exp3.job;
        const desc3 = document.getElementById("description3");
        desc3.textContent = exp3.description;

    } catch (error) {
        console.log(error);
    }
})();

const getCertificates = async () => {
    const data = await fetch("https://my-json-server.typicode.com/GGuilleGutierrez/db-portfolio-digitalers/certificates");
    if (data.ok) {
        return data.json();
    } else {
        return new Error("No se pudo conectar con el servidor.");
    }
};

(async () => {
    try {
        const certificates = await getCertificates();
        if (certificates instanceof Error) throw certificates;

        const cert1 = certificates[0];
        const img1 = document.getElementById("img-cert1");
        img1.src = cert1.src;
        img1.alt = cert1.alt;
        const title1 = document.getElementById("title1");
        title1.textContent = cert1.title;
        const date1 = document.getElementById("date1");
        date1.textContent = cert1.date;

        const cert2 = certificates[1];
        const img2 = document.getElementById("img-cert2");
        img2.src = cert2.src;
        img2.alt = cert2.alt;
        const title2 = document.getElementById("title2");
        title2.textContent = cert2.title;
        const date2 = document.getElementById("date2");
        date2.textContent = cert2.date;

        const cert3 = certificates[2];
        const img3 = document.getElementById("img-cert3");
        img3.src = cert3.src;
        img3.alt = cert3.alt;
        const title3 = document.getElementById("title3");
        title3.textContent = cert3.title;
        const date3 = document.getElementById("date3");
        date3.textContent = cert3.date;

    } catch (error) {
        console.log(error);
    }
})();

const getProjects = async () => {
    const data = await fetch("https://my-json-server.typicode.com/GGuilleGutierrez/db-portfolio-digitalers/projects");
    if (data.ok) {
        return data.json();
    } else {
        return new Error("No se pudo conectar con el servidor.");
    }
};

(async () => {
    try {
        const projects = await getProjects();
        if (projects instanceof Error) throw projects;

        const imgProj1 = document.getElementById("img-proj1");
        const tags1 = document.getElementById("tags1");
        const title1 = document.getElementById("title-proj1");
        const text1 = document.getElementById("text1");
        const imgProj2 = document.getElementById("img-proj2");
        const tags2 = document.getElementById("tags2");
        const title2 = document.getElementById("title-proj2");
        const text2 = document.getElementById("text2");
        const imgProj3 = document.getElementById("img-proj3");
        const tags3 = document.getElementById("tags3");
        const title3 = document.getElementById("title-proj3");
        const text3 = document.getElementById("text3");
        const imgProjMobile = document.getElementById("img-proj-mobile");
        const tagsMobile = document.getElementById("tags-mobile");
        const titleMobile = document.getElementById("title-proj-mobile");
        const textMobile = document.getElementById("text-proj-mobile");

        const responsiveBtn = document.getElementById("projects-option1");
        const jsBtn = document.getElementById("projects-option2");
        const reactBtn = document.getElementById("projects-option3");

        const responsive = projects.responsive;
        const js = projects.javascript;
        const react = projects.react;

        const defaultContent = () => {
            imgProj1.src = responsive[0].src;
            imgProj1.alt = responsive[0].alt;
            tags1.textContent = responsive[0].tags;
            title1.textContent = responsive[0].title;
            text1.textContent = responsive[0].description;
            imgProj2.src = responsive[1].src;
            imgProj2.alt = responsive[1].alt;
            tags2.textContent = responsive[1].tags;
            title2.textContent = responsive[1].title;
            text2.textContent = responsive[1].description;
            imgProj3.src = responsive[2].src;
            imgProj3.alt = responsive[2].alt;
            tags3.textContent = responsive[2].tags;
            title3.textContent = responsive[2].title;
            text3.textContent = responsive[2].description;
            imgProjMobile.src = responsive[0].src;
            imgProjMobile.alt = responsive[0].alt;
            tagsMobile.textContent = responsive[0].tags;
            titleMobile.textContent = responsive[0].title;
            textMobile.textContent = responsive[0].description;
        };

        defaultContent();

        responsiveBtn.addEventListener("focus", defaultContent);

        jsBtn.addEventListener("focus", () => {
            imgProj1.src = js[0].src;
            imgProj1.alt = js[0].alt;
            tags1.textContent = js[0].tags;
            title1.textContent = js[0].title;
            text1.textContent = js[0].description;
            imgProj2.src = js[1].src;
            imgProj2.alt = js[1].alt;
            tags2.textContent = js[1].tags;
            title2.textContent = js[1].title;
            text2.textContent = js[1].description;
            imgProj3.src = js[2].src;
            imgProj3.alt = js[2].alt;
            tags3.textContent = js[2].tags;
            title3.textContent = js[2].title;
            text3.textContent = js[2].description;
            imgProjMobile.src = js[0].src;
            imgProjMobile.alt = js[0].alt;
            tagsMobile.textContent = js[0].tags;
            titleMobile.textContent = js[0].title;
            textMobile.textContent = js[0].description;
        })

        reactBtn.addEventListener("focus", () => {
            imgProj1.src = react[0].src;
            imgProj1.alt = react[0].alt;
            tags1.textContent = react[0].tags;
            title1.textContent = react[0].title;
            text1.textContent = react[0].description;
            imgProj2.src = react[1].src;
            imgProj2.alt = react[1].alt;
            tags2.textContent = react[1].tags;
            title2.textContent = react[1].title;
            text2.textContent = react[1].description;
            imgProj3.src = react[2].src;
            imgProj3.alt = react[2].alt;
            tags3.textContent = react[2].tags;
            title3.textContent = react[2].title;
            text3.textContent = react[2].description;
            imgProjMobile.src = react[0].src;
            imgProjMobile.alt = react[0].alt;
            tagsMobile.textContent = react[0].tags;
            titleMobile.textContent = react[0].title;
            textMobile.textContent = react[0].description;
        })

    } catch (error) {
        console.log(error);
    }
})();