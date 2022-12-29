var denishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 30;

//      nested conditon
if (denishPrice < myBudget) {
    console.log("Danish kheye denish jabo.")
} else if (butterBreadPrice < myBudget) {
    console.log("Butter bon diye cha khamu")
} else if (toastBiscuitPrice < myBudget) {
    console.log("Toast biscuit khamu")
} else {
    console.log("Batash diye cha khamu")
}

// 
var myBudget = 100;
var packedWell = false;

if (denishPrice < myBudget) {
    if (packedWell == true) {
        console.log("Denish khabo")
    } else {
        console.log("Denish khamu na! karon ami khaoar age machi ordek kheye felse.")
    }
}