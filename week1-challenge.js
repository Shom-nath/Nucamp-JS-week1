const GENERAL_ADMISSION_TCKT_COST = 20;
const CHILD_SENIOR_ADMISSION_TCKT_COST = 10;
const MATINEE_DISCOUNT = 3;

function buyTicket(){
    const age = prompt("What is your age?");
    let cost =  getBaseTicketCost(age);

    const isMatinee = prompt("Are you attending a matinee show?");
    // const discount = prompt("Are you attending a matinee show?");
    let discount = matineeDiscount(isMatinee);
    cost -= discount;



    alert("The ticket price is:$" + cost);
}
function getBaseTicketCost(age){
    if (age < 12 || age > 65) {
        return CHILD_SENIOR_ADMISSION_TCKT_COST;
    }
    return GENERAL_ADMISSION_TCKT_COST;

}

function matineeDiscount(isMatinee){
    // alert("Inside matineeDiscount");

    if ((isMatinee.toLowerCase() === "yes") || (isMatinee.toLowerCase() ==="y")){
    // if((isMatinee === "yes") || (isMatinee ==="y")){
        // alert("discount: " + MATINEE_DISCOUNT);
        return MATINEE_DISCOUNT;
    }
    return 0;

}
