let mapA = new Map();

mapA.set("acer","acpire");
mapA.set("dell","inspiron");
mapA.set("lenovo","ideapad");
mapA.set("macbook","pro");

let mapB = new Map();

mapB.set("acer",13000);
mapB.set("dell",15000);
mapB.set("lenovo",12000);
mapB.set("mackbook",30000);

let mapC = new Map();

mapC.set("acer",3);
mapC.set("dell",4);
mapC.set("lenovo",2);
mapC.set("macbook",1);

let lowPrice = function() {
    let a = mapB.get("acer")
    let b = mapB.get("dell")
    let c = mapB.get("lenovo")
    let d = mapB.get("macbook")

    if(a == Math.min(a, b, c, d)) {
        console.log(`${mapA.get("acer")} / ${mapB.get("acer")} / ${mapC.get("acer")}day`)
    }else if(b == Math.min(b, a, c, d)) {
        console.log(`${mapA.get("dell")} / ${mapB.get("dell")} / ${mapC.get("dell")}day`)
    }else if(c == Math.min(a, b, c, d)) {
        console.log(`${mapA.get("lenovo")} / ${mapB.get("lenovo")} / ${mapC.get("lenovo")}day`)
    }else if(d == Math.min(a, b, c, d)) {
        console.log(`${mapA.get("macbook")} / ${mapB.get("macbook")} / ${mapC.get("macbook")}day`)
    }

}

let lowTime = function() {
    let a = mapC.get("acer")
    let b = mapC.get("dell")
    let c = mapC.get("lenovo")
    let d = mapC.get("macbook")

    if(a == Math.min(a, b, c, d)) {
        console.log(`${mapA.get("acer")} / ${mapB.get("acer")} / ${mapC.get("acer")}day`)
    }else if(b == Math.min(b, a, c, d)) {
        console.log(`${mapA.get("dell")} / ${mapB.get("dell")} / ${mapC.get("dell")}day`)
    }else if(c == Math.min(a, b, c, d)) {
        console.log(`${mapA.get("lenovo")} / ${mapB.get("lenovo")} / ${mapC.get("lenovo")}day`)
    }else if(d == Math.min(a, b, c, d)) {
        console.log(`${mapA.get("macbook")} / ${mapB.get("mackbook")} / ${mapC.get("mackbook")}day`)
    }

}

let maxPrice = function() {
    let a = mapB.get("acer")
    let b = mapB.get("dell")
    let c = mapB.get("lenovo")
    let d = mapB.get("macbook")

    if(a == Math.max(a, b, c, d)) {
        console.log(`${mapA.get("acer")} / ${mapB.get("acer")} / ${mapC.get("acer")}day`)
    }else if(b == Math.max(b, a, c, d)) {
        console.log(`${mapA.get("dell")} / ${mapB.get("dell")} / ${mapC.get("dell")}day`)
    }else if(c == Math.max(a, b, c, d)) {
        console.log(`${mapA.get("lenovo")} / ${mapB.get("lenovo")} / ${mapC.get("lenovo")}day`)
    }else if(d == Math.max(a, b, c, d)) {
        console.log(`${mapA.get("macbook")} / ${mapB.get("mackbook")} / ${mapC.get("macbook")}day`)
    }

}

let maxTime = function() {
    let a = mapC.get("acer")
    let b = mapC.get("dell")
    let c = mapC.get("lenovo")
    let d = mapC.get("macbook")

    if(a == Math.max(a, b, c, d)) {
        console.log(`${mapA.get("acer")} / ${mapB.get("acer")} / ${mapC.get("acer")}day`)
    }else if(b == Math.max(b, a, c, d)) {
        console.log(`${mapA.get("dell")} / ${mapB.get("dell")} / ${mapC.get("dell")}day`)
    }else if(c == Math.max(a, b, c, d)) {
        console.log(`${mapA.get("lenovo")} / ${mapB.get("lenovo")} / ${mapC.get("lenovo")}day`)
    }else if(d == Math.max(a, b, c, d)) {
        console.log(`${mapA.get("macbook")} / ${mapB.get("mackbook")} / ${mapC.get("macbook")}day`)
    }

}

lowPrice();

lowTime();

maxPrice();

maxTime();