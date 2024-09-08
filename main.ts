document.getElementById('resumeform')?.addEventListener('submit',function(event){
    event.preventDefault();

    const profilepictureinput=document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement=document.getElementById('name') as HTMLInputElement;
    const lastNameelemement=document.getElementById('lastname') as HTMLInputElement;
    const emailElement=document.getElementById('email') as HTMLInputElement;
    const phoneElement=document.getElementById('phone') as HTMLInputElement;
    const educationElement=document.getElementById('education') as HTMLInputElement;
    const experienceElement=document.getElementById('experience') as HTMLInputElement;
    const skillsElement=document.getElementById('skills') as HTMLInputElement;
    const userelement=document.getElementById('username') as HTMLInputElement;


    if(profilepictureinput  && nameElement && lastNameelemement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && userelement){
        const name=nameElement.value;
        const lastname=lastNameelemement.value;
        const email=emailElement.value;
        const phone=phoneElement.value;
        const education=educationElement.value;
        const experience=experienceElement.value;
        const skills=skillsElement.value;

        const username=userelement.value;
        const uniquipath =`resumes/${username.replace(/\s+/g,'_')}_cv.html`


        const profilepicturefile=profilepictureinput.files?.[0]
        const profilepictureurl=profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";


        const resumeoutput= `
        <h2>Resume</h2>
        ${profilepictureurl ? `<img src="${profilepictureurl}" alt="profile picture" class="profilepicture">` : ''}
        <p><strong>FRIST NAME:</strong> ${name} </p>
        <p><strong>LAST NAME:</strong> ${lastname} </p>
        <p><strong>EMAIL:</strong> ${email} </p>
        <p><strong>PHONE NUMBER:</strong> ${phone} </p>

        <h3>EDUCATION</h3>
        <p> ${education} </p>

        <h3>WORD EXPERIENCE</h3>
        <p> ${experience} </p>
        
        <h3>SKILLS</h3>
        <p> ${skills} </p>
        `;

        const donwloadlink=document.createElement('a')
        donwloadlink.href='data:text/html;charset=utf-8,' + encodeURIComponent(resumeoutput)
        donwloadlink.download = uniquipath;
        donwloadlink.textContent='Download your 2024 Resume';

        const resumeoutputelement=document.getElementById('resumeoutput')
        if(resumeoutputelement){
            resumeoutputelement.innerHTML = resumeoutput;
            resumeoutputelement.appendChild(donwloadlink)
        } else {
            console.error('the resume output element are missing')
        } 

    }else {
            console.error('one or more element are missing')
    }

})