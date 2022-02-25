function findOppositeNumber(n, inputNumber) {

    // Tìm số chính giữa dãy số n
    const middle = n / 2;

    // biến lấy output
    let x;


    if (inputNumber === middle) {   // Nếu số đầu vào đúng bằng số chính giữa
        x = middle; // Thì số đối với chính nó là middle
    }

    if (inputNumber < middle) { // Nếu số đầu vào nhỏ hơn middle
        x = middle + inputNumber // Nghĩa là nó đang nằm bên phải middle nên x bằng middle + inputnumber
    } else { // Ngược lại, tức là nó nằm bên trái số middle
        x = inputNumber - middle // Nên x bằng middle - số inputnumber
    }

    console.log(x);

    return x;

}

findOppositeNumber(10, 7)