let max = +prompt("Введите число", "5");
        let s = "";
        for (let i = 1; i <= max; i++) {
            for (let j = 1; j <= i; j++) {
                s += "*";
            }
            s += "\n";
        }
        alert("Треугольник\n" + s);
