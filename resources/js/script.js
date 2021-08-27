// function myFunction() {
//     document.getElementById("btn").innerHTML ="ipsita.rao@gmail.com";
// }

// let arrowBtn = document.querySelector(".arrowButton")

// arrowBtn.addEventListener("click", function(){
//     document.getElementById('howtosec').scrollIntoView();
// })

var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
var friend;

input.onkeypress = function(event) {
  if (event.key == "Enter" || event.keyCode == 13) {
    friend =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
  }
};


var changeText = function(words) {
  text.innerHTML = words.replace("Your friend", friend);
};

var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};

var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button class = 'story-button' onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  }
};

var advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};


scenario = {}
var scenario = {
  one: {
    image: "https://s9.postimg.org/eceo9mp73/5860028206_d66810105f_b.jpg", 
    text:  "Your best friend and you are on vacation! It's been a long time since you spent time together and you're very excited. You decide to go on a scenic hike in the woods together. What is your friend's name?\n",
  },
  two: {
    image: "https://s9.postimg.org/9p8m7v1u7/6899639786_d517c4cce3_z.jpg", //house
    text: "Your're both having a great time. The weather is beautiful. Suddenly, Your friend pulls on your arm. You both hear dogs barking and scratching at the door and see an old abandoned house. The dogs busts through the door and now it's wide open. What do you want to do?",
    buttons: [["Run back home to safety!", "advanceTo(scenario.three)"],["Check out the house. I love a mystery!", "advanceTo(scenario.four)"]]
  },
  three: {
    image: "https://s4.postimg.org/t1g20apst/261819008_d4316c1bdf_o.jpg",
    text: "Unfortunately, Your friend is afraid of dogs and runs inside to avoid them. You can't leave now. You decide to go inside and make sure your friend is safe",
    buttons: [["Continue", "advanceTo(scenario.four)"]]
  },
  four: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "The door slams shut right as you enter and you can't seem to get it open. Your friend is no where to be found, but you hear sounds from the basement.",
    buttons: [["Look for your friend in the basement.", "advanceTo(scenario.ten)"],["Search for a tool to pry the door open.", "advanceTo(scenario.five)"]]
  },
  five: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "You find a kitchen knife and start trying to pry the door open. You're almost there, but then you hear Your friend scream and cry for help! There's footsteps coming from above. You are scared. what do you do now?",
    buttons: [["Rush downstairs to your friend!", "advanceTo(scenario.seven)"],["Open the door and run out. It's ok you can call for help afterwards.", "advanceTo(scenario.six)"]]
  },
  six: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "You can't get the door open and you see a man running downstairs with a knife in hand! ",
    buttons: [["Run downstairs fast!!", "advanceTo(scenario.seven)"],["Wait to see what he wants", "advanceTo(scenario.eight)"]]
  },
  seven: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "You lock te basement door behind you as you rush downstairs. Good thing because there's an armmed man banging on the door now. Your friend is happy to see you and hugs you. You both see the entry to a hidden tunnel. A sign says 'All your dreams will come true if you make it alive' What do you do?",
    buttons: [["Enter the tunnel, obvoiusly.", "advanceTo(scenario.eight)"],["Hide in the closet. The tunnel seems too dangerous", "advanceTo(scenario.nine)"]]
  },
  eight: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "TO BE CONTINUED...",
    buttons: []
  },
  nine: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "The man with a knife breaks through the basement door and is running straight towards both of you. What will you do?",
    buttons: [["Run into the tunnel. It's the only way to save our lives!", "advanceTo(scenario.eight)"],["Wait and see what he wants. Maybe he's on our side. Or maybe not...", "advanceTo(scenario.eight)"]]
  },
  ten: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "You're about to go downstairs but decide to call for help as well. Suddenly you hear banging sounds from upstairs and drop your phone! What do you want to do?",
    buttons: [["Run downstairs!", "advanceTo(scenario.seven)"],["Try to get the door open!", "advanceTo(scenario.six)"]]
  }

};

advanceTo(scenario.one)