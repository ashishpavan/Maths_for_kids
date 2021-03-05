let curr_operator="Addition";
const submit=document.querySelector(".practise_button");
const operators_dom=document.querySelectorAll(".operator");
const check=document.querySelector(".question_button");
let remark=document.querySelector(".remark");
let lang_change_list=document.querySelectorAll(".change");
let dropdown_contents=document.querySelectorAll(".dropdown-content a");
//console.log(lang_change_list);

let no_of_questions;
let no_of_digits;
let details;
remark.classList.add("hidden");
//console.log(submit);
//console.log(operators_dom);
//console.log(check);

for (let i=0;i<dropdown_contents.length;i++){
    dropdown_contents[i].addEventListener("click",event=>{
        if(dropdown_contents[i].textContent=="English")
        {
            location.hash="eng";
        }
        else if(dropdown_contents[i].textContent=="Hindi"){
            location.hash="hin";
        }
        else if(dropdown_contents[i].textContent=="Marathi"){
            location.hash="mar";
        }
        location.reload();
    });
}

dict={
    Addition:'+',
    Subtraction:'-',
    Multiplication:'*',
    Division:'/'
}
language={
    english:[
        "Addition","Subtraction","Multiplication","Division","No of questions","No of Digits","Create Practise List"
    ],
    hindi:[
        "जोड़","घटाना","गुणा","विभाजन","सवाल संख्या","अंक संख्या","अभ्यास सूची बनाएं"
    ],
    marathi:[
        "बेरीज","वजा बाकी","गुणाकार","भागाकार","प्रश्न संख्या","अंक संख्या","चाचणी निर्माण करणे"
    ]
}

for(let i=0;i<operators_dom.length;i++){
    operators_dom[i].addEventListener("click",event=>{
    curr_operator= event.currentTarget.text;
    });
};

submit.addEventListener("click",event=>{
    let form=document.querySelector(".questions");
    form.classList.add("visible");

    no_of_questions=document.getElementById("no_of_questions").value;
    no_of_digits=document.getElementById("no_of_digits").value;
    let list=document.querySelector(".questions ul")
    list.innerHTML="";
    for(let i=0;i<no_of_questions;i++)
    {
        let x = Math.floor((Math.random() * 10*no_of_digits) );
        let y = Math.floor((Math.random() * 10*no_of_digits) );
        let z;
        switch(curr_operator){
            case "Addition":
                z="+";
                break
            case "Subtraction":
                z="-";
                break;
            case "Multiplication":
                z="x";
                break;
            case "Division":
                z="/";
                break;
        }
        let str="<li>"+
                       "<p>"+"0"+x+"</p>"+
                       "<p>"+z+" "+y+"</p>"+
                       "<input type=\"number\" class=answer_"+i+">"+
                "</li>"
        list.innerHTML += str;
        
    }
    details = document.querySelector(".practice_info");
    //console.log(details);
    details.classList.add("hidden");
});

check.addEventListener("click",event=>{
    let form=document.querySelector(".practice_info");
    let questions=document.querySelector(".questions");
    let remark=document.querySelector(".remark");
    //console.log(remark);
    //console.log(form);
    //console.log(questions);
    remark.classList.remove("hidden");
    questions.classList.remove("visible");
    form.classList.remove("hidden");

    let marks=0;
    let list= document.querySelectorAll("#questions li");
    //console.log(list);
    for(let i=0;i<list.length;i++){
        let user_answer=list[i].childNodes[2].value;
        s1= list[i].childNodes[0].innerText.slice(0,no_of_digits+1);
        s2= list[i].childNodes[1].innerText;
        s=s1+s2;
        //console.log(eval(s));
        //console.log(user_answer);
        ans=eval(s)
        if(user_answer==ans){
            marks+=1;
        }
    }

    if(marks>no_of_questions/2){
        remark.innerText="Congratulations! you did very well";
    }
    else{
        remark.innerText="U scored less than 50% ,Better luck next Time";
    }
    setTimeout(()=>{
        let remark=document.querySelector(".remark");
        remark.classList.add("hidden");
    },1000);
});

function changeLanguage(lang) { 
    location.hash = lang; 
    location.reload(); 
} 

if (location.hash) { 
  
    // Set the content of the webpage  
    // depending on the hash value
    console.log(location.hash); 
    if (window.location.hash == "#hin") { 
      for(let i=0;i<lang_change_list.length-1;i++){
          lang_change_list[i].textContent=language.hindi[i];
      }
      lang_change_list[lang_change_list.length-1].value=language.hindi[lang_change_list.length-1];
    } 
    else if (window.location.hash == "#mar") { 
        for(let i=0;i<lang_change_list.length-1;i++){
            lang_change_list[i].textContent=language.marathi[i];
        }
        lang_change_list[lang_change_list.length-1].value=language.marathi[lang_change_list.length-1];
    }
    else if (window.location.hash == "#eng") { 
        for(let i=0;i<lang_change_list.length-1;i++){
            lang_change_list[i].textContent=language.english[i];
        }
        lang_change_list[lang_change_list.length-1].value=language.english[lang_change_list.length-1];
    }
} 














