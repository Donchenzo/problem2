const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

function grandTotal(price, refill, subscription, coupon){
    let total = price * refill
    console.log(subscription && coupon? `Your grand total is ${(total)-((total*.25)+10)}` : subscription? `Your grand total is ${(total)-(total*.25)}` :
    coupon? `Your grand total is ${(total)-(10)}` : `${total}`)
}

grandTotal(
    timmy.pricePerRefill,
    timmy.refills,
    timmy.subscription,
    timmy.coupon
)

grandTotal(
    sarah.pricePerRefill,
    sarah.refills,
    sarah.subscription,
    sarah.coupon
)
grandTotal(
    rocky.pricePerRefill,
    rocky.refills,
    rocky.subscription,
    rocky.coupon
)

console.log `things are not going great`