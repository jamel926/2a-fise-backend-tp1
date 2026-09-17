// ceci est une fonction
x => x * 2;

// ceci est strictement équivalent
function double(x) {
    return x * 2;
}

// Le problème : comment appeler la fonction x => x * 2 ?
// Mettons-la dans une variable !

let double_anonyme = x => x * 2;

let doubled = double_anonyme(3);
console.log("Doubled = " + doubled);

// Ou ce qui est équivalent (par interpolation)
console.log(`Doubled = ${doubled}`);


function j_applique_a_chaque_chiffre(appliquer) {
    let chiffres =[0,1,2,3,4,5,6,7,8,9];
    for(const chiffre of chiffres){
        appliquer(chiffre);
    }
}
j_applique_a_chaque_chiffre(double_anonyme);
j_applique_a_chaque_chiffre(x => console.log(x*10));
j_applique_a_chaque_chiffre(x => console.log(x*100));

//ou excellent !

[0,1,2,3,4,5,6,7,8,9].forEach(item => console.log(item/10));