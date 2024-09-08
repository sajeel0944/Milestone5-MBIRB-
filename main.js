var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilepictureinput = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var lastNameelemement = document.getElementById('lastname');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var userelement = document.getElementById('username');
    if (profilepictureinput && nameElement && lastNameelemement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && userelement) {
        var name_1 = nameElement.value;
        var lastname = lastNameelemement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = userelement.value;
        var uniquipath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var profilepicturefile = (_a = profilepictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureurl = profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";
        var resumeoutput = "\n        <h2>Resume</h2>\n        ".concat(profilepictureurl ? "<img src=\"".concat(profilepictureurl, "\" alt=\"profile picture\" class=\"profilepicture\">") : '', "\n        <p><strong>FRIST NAME:</strong> ").concat(name_1, " </p>\n        <p><strong>LAST NAME:</strong> ").concat(lastname, " </p>\n        <p><strong>EMAIL:</strong> ").concat(email, " </p>\n        <p><strong>PHONE NUMBER:</strong> ").concat(phone, " </p>\n\n        <h3>EDUCATION</h3>\n        <p> ").concat(education, " </p>\n\n        <h3>WORD EXPERIENCE</h3>\n        <p> ").concat(experience, " </p>\n        \n        <h3>SKILLS</h3>\n        <p> ").concat(skills, " </p>\n        ");
        var donwloadlink = document.createElement('a');
        donwloadlink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeoutput);
        donwloadlink.download = uniquipath;
        donwloadlink.textContent = 'Download your 2024 Resume';
        var resumeoutputelement = document.getElementById('resumeoutput');
        if (resumeoutputelement) {
            resumeoutputelement.innerHTML = resumeoutput;
            resumeoutputelement.appendChild(donwloadlink);
        }
        else {
            console.error('the resume output element are missing');
        }
    }
    else {
        console.error('one or more element are missing');
    }
});
