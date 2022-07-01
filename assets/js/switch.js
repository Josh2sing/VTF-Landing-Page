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

group2.push('Time commitment 9-3p pacific Mon-Fri')
group2.push('A stable internet and latest PC or laptop')
group2.push('Existing knowledge of virtual machines, powershell, python etc')
group2.push('College reference letter')
group2.push('Access to private and public clouds')
group2.push('Access to online labs')
group2.push('Advance cybersecurity real-world projects')
group2.push('Increase network visibility')
group2.push('Earn certificate of completion')
group2.push('Gain industry level professional experience')

//go into box-container, change each nth value of p to group1[index]

function changeBeginner(){
  document.getElementById("comp-1").innerHTML = "Advanced"
  document.getElementById("comparison-section").classList.add("ADV");
    for(i = 0; i < 10; i++)
    {
      index = 'p' + (i + 1);
      document.getElementById(index).innerHTML = group2[i];
    }
    openBoxes();
  document.getElementById('box1').style.height = "290px"
  document.getElementById('box2').removeAttribute('hidden')
  document.getElementById('box3').removeAttribute('hidden')
}

function changeAdvanced(){
  document.getElementById("comp-1").innerHTML = "Beginner"
  document.getElementById("comparison-section").classList.remove("ADV");

    for(i = 0; i < 4; i++){
        index = 'p' + (i + 1);
        document.getElementById(index).innerHTML = group1[i];        
      }
      document.getElementById('box1').style.height = "255px"
      document.getElementById('box4').style.backgroundColor = "#2F6292"
    document.getElementById('box2').classList.remove('ease1');
    document.getElementById('box3').classList.remove('ease2');
    document.getElementById('box4').classList.remove('ease4');
    document.getElementById('box2').hidden = true
    document.getElementById('box3').hidden = true
    //4BA4F4
}

button.addEventListener('click', function(){
  if (buttonState) {
    console.log('ON 2')
    document.getElementById("my-button").style.transform = "translateX(100px)"; 
    buttonState = false;
    option1.innerText = 'Advanced'
    option2.innerText = 'Beginner'
    option2.style.transform = "translateX(-100px)";
    where.innerHTML = 'Effort Is Both Costly and Valued. If you are self motivated, ready to commit the time 9a to 5p pacific between Mon to Fri, then advance internship at VTF can give you a real opportunity to allow you enhance your cybersecurity skills.'
    buttonTrack.style.borderRadius = "0px 20px 20px 0px";
    changeBeginner()
  } else {
    console.log('ON 1')
    document.getElementById("my-button").style.transform = "translateX(0px)";
    buttonState = true;
    option1.innerText = 'Beginner'
    option2.innerText = 'Advanced'
    option2.style.transform = "translateX(0px)";
    where.innerHTML = "Beginner internships at VTF is open to all level of skills with flexible hour commitment. Interns attending beginner internship at VTF gain real world industry experience while having the flexibility to work on during their own schedule. It is ideal for college students, transitioning professionals and even for those who are advancing cybersecurity career."
    buttonTrack.style.borderRadius = "20px 0px 0px 20px";
    changeAdvanced()
  }
  
})