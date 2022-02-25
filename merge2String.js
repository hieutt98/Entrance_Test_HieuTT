function Hello(fullName, numberString) {// hàm gồm 2 đối số là fullName và numberString 

    const numberArray = numberString.split('')// đổi chuỗi 1 thành mảng gồm các phần tử 

    const name = fullName.split('')// đổi chuỗi  2 thành mảng gồm các phần tử

    let i = 0;// tạo ra biến i

    let index = 0;// tạo ra biến index

    const c = [] // tạo 1 mảng rỗng

    let ic = 0; // tạo biến có tên là ic

    while (i < numberArray.length && index < name.length) { // xét điều kiện nếu i < độ dài của numberArray và index < độ dai của name
        
        c[ic++] = numberArray[i++] // nếu nhỏ hơn thì thêm vào mảng rỗng c

        c[ic++] = name[index++];// nếu nhỏ hơn thì thêm vào mảng rỗng c
    }
    while (i < numberArray.length) { // trường hợp đặc biệt : nếu i vẫn nhỏ hơn độ dài của numberArray thì ta thêm vào cuối mảng

        c[ic++] = numberArray[i++] // thêm vào cuối mảng
    }
    while (index < name.length) {//trường hợp đặc biệt : nếu index vẫn nhỏ hơn độ dài của numberArray thì ta thêm vào cuối mảng

        c[ic++] = name[index++]// thêm vào cuối mảng
    }
    c.toString()// đổi mảng ra dạng chuỗi

    console.log(c.join('')); // bỏ dấu "," khỏi chuỗi 
}

Hello("TrầnHiếu", "123456789")