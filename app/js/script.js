const per = [
    document.getElementById("5per"),
    document.getElementById("10per"),
    document.getElementById("15per"),
    document.getElementById("25per"),
    document.getElementById("50per"),
    document.getElementById("custom")
]

const bill = document.getElementById("bill");
const people = document.getElementById("people");
const custom = document.getElementById("custom");
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("total");

allInputs = [bill, people, custom, tipAmount, total];

const resetBtn = document.getElementById("reset");

const numPpl = document.querySelector(".numOfPpl");

// Tip (button)
function tipCalc(t) {
    tipAmount.value = `$${Math.round(bill.value * t / people.value * 100) / 100}`;
    total.value = `$${Math.round(bill.value * (t + 1) / people.value * 100) / 100}`;
}

function btnResult(i) {
    switch(i) {
        case 0:
            tipCalc(0.05);
            break;
        case 1:
            tipCalc(0.1);
            break;
        case 2:
            tipCalc(0.15);
            break;
        case 3:
            tipCalc(0.25);
            break;
        case 4:
            tipCalc(0.5);
            break;
    }
}

for (let i = 0; i < per.length; i++) {
    per[i].addEventListener("click", function(){

        per.forEach(function(p) {
            p.style = null;
        })

        per[i].style.backgroundColor = "hsl(172, 67%, 45%)";
        per[i].style.color = "hsl(183, 100%, 15%)";
        resetBtn.style.opacity = "1";

        if (people.value === "") {
            numPpl.classList.add("err");
            people.classList.add("err");

            people.addEventListener("input", function(){
                numPpl.classList.remove("err");
                people.classList.remove("err");
                return btnResult(i);
            })
        }

        else {
            return btnResult(i);
        }  
    })
}

// Tip (custom)
function customResult(){
    tipAmount.value = `$${Math.round(bill.value * (custom.value / 100) / people.value * 100) / 100}`;
    total.value = `$${Math.round (bill.value * ((custom.value / 100) + 1)/ people.value * 100) / 100}`;
}

custom.addEventListener("input", function(){

    if (people.value === "") {
        numPpl.classList.add("err");
        people.classList.add("err");

        people.addEventListener("input", function(){
            numPpl.classList.remove("err");
            people.classList.remove("err");
            return customResult();
        })
    }
    else {
        return customResult();
    }
})

// reset button
reset.addEventListener("click", function(){
    // for (let i of allInputs) {
    //     i.value = null;
    // }
    allInputs.forEach(function(a){
        a.value = null;
    })

    per.forEach(function(p) {
        p.style= null;
    })

    numPpl.classList.remove("err");
    people.classList.remove("err");
    resetBtn.style = null;
})
