var button = document.getElementById('button-container')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var buttonTrack = document.getElementById('my-button')

var where = document.getElementById('info-p-m')
var boxgroup1 = document.getElementById('infoboxcontainer1')
var boxgroup2 = document.getElementById('infoboxcontainer2')

var buttonState = true;
var boxGroup = document.getElementById('box-container')
var group1 = [];
var group2 = [];
group1.push('Understanding of English Fundamentals')
group1.push('Computer with internet connection')
group1.push('High School Diploma+')
group1.push('Flexible Hours')
group1.push('Self Paced Projects')
group1.push('Microsoft Cybersecurity Course')
group1.push('Online Labs')
group1.push('Minimum Growth in Network Visibility')
group1.push('Certificate of Completion')
group1.push('Understanding of basic concepts')

group2.push('Slack/Discord/GDrive Knowledge')
group2.push('Ability to create Virtual Machines')
group2.push('Fluency in English')
group2.push('Bachelors Degree+')
group2.push('Advanced Level Projects')
group2.push('Access to VTF Cloud')
group2.push('Configure Servers and Firewalls')
group2.push('Maximum Growth in Network Visibility')
group2.push('Tailored Certificate of Completion')
group2.push('Letter of Recommendation')

//go into box-container, change each nth value of p to group1[index]

function changeBeginner(){
  document.getElementById("comp-1").innerHTML = "Advanced"
    for(i = 0; i <= 10; i++){
        index = 'p' + (i + 1);
        document.getElementById(index).innerHTML = group2[i];
    }
}

function changeAdvanced(){
  document.getElementById("comp-1").innerHTML = "Beginner"
    for(i = 0; i < 10; i++){
        index = 'p' + (i + 1);
        document.getElementById(index).innerHTML = group1[i];
    }
}

button.addEventListener('click', function(){
  if (buttonState) {
    console.log('ON 2')
    document.getElementById("my-button").style.transform = "translateX(100px)"; 
    buttonState = false;
    option1.innerText = 'Advanced'
    option2.innerText = 'Beginner'
    option2.style.transform = "translateX(-100px)";
    where.innerHTML = 'Our Advanced Internships are for those looking to get the best education in the field of cybersecurity. Requirements include a Bachelor’s degree or above, advanced computer knowledge, English fluency, accountability and professionalism, the ability to create virtual machines, and an understanding of applications such as Slack, Discord, and GDrive. Upon completion, a tailored certificate will be given, along with a letter or reccomendation. There is also a 15 day probation period for the interns. An interview and college credit documentation is required.'
    buttonTrack.style.borderRadius = "0px 20px 20px 0px";
    changeBeginner()
  } else {
    console.log('ON 1')
    document.getElementById("my-button").style.transform = "translateX(0px)";
    buttonState = true;
    option1.innerText = 'Beginner'
    option2.innerText = 'Advanced'
    option2.style.transform = "translateX(0px)";
    where.innerHTML = 'Our beginner internships serve as a way for students to start their journey into the professional world of cybersecurity. Beginner Interns will be required to have a high school deploma or above, a computer with internet, and must understand english fundamentals. An interview is not required, and upon completion, a certificate will be given.'
    buttonTrack.style.borderRadius = "20px 0px 0px 20px";
    changeAdvanced()
  }
  
})