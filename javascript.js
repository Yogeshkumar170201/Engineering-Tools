// const number = document.getElementsByClassName('num').value;
// console.log(number);

// var num = document.getElementsByClassName('num');

// document.getElementsByClassName('num').addEventListener('input', function inp(){
//     console.log(this.value);
// });

// function Convert_Bin() 
// 	{
// 		num = document.conv.num.value;
// 		if( num=="" )
// 			return;
// 		num = parseInt(num,2);
// 		document.conv.oct.value = num.toString(8);
// 		document.conv.dec.value = num.toString(10);
// 		num = num.toString(16);
// 		document.conv.hex.value = num.toUpperCase();
// 	}

function Convert_Bin() 
	{
		let num = document.getElementById("binn").value;
		if( num=="" )
            return;
        console.log(num);
        num = parseInt(num,2);
        console.log(num);
		document.getElementById("octt").value = num.toString(8);
		document.getElementById("decc").value = num.toString(10);
		num = num.toString(16);
		document.getElementById("hexx").value = num.toUpperCase();
    }

    function Convert_Oct() 
	{
		num = document.getElementById("octt").value;
		if( num=="" )
			return;
		num = parseInt(num,8);
		document.getElementById("binn").value = num.toString(2);
		document.getElementById("decc").value = num.toString(10);
		num = num.toString(16);
		document.getElementById("hexx").value = num.toUpperCase();
	}
	function Convert_Dec() 
	{
		num = document.getElementById("decc").value;
		if( num=="" )
			return;
		num = parseInt(num,10);
		if( num<0 ) {
			if( num>=-32768 )
				num+=65536;
			else if( num>=-Math.pow(2,31))
				num+=Math.pow(2,32);
			else if( num>=-Math.pow(2,63) )
				num+=Math.pow(2,64);
		}
		document.getElementById("binn").value = num.toString(2);
		document.getElementById("octt").value = num.toString(8);
		num = num.toString(16);
		document.getElementById("hexx").value = num.toUpperCase();
	}
	function Convert_Hex() 
	{
		num = document.getElementById("hexx").value;
		if( num=="" )
			return;
		num = parseInt(num,16);
		document.getElementById("binn").value = num.toString(2);
		document.getElementById("octt").value = num.toString(8);
		document.getElementById("decc").value = num.toString(10);
    }    
    
    function reset(){
        document.getElementById("binn").value = "";
        document.getElementById("hexx").value = "";
        document.getElementById("decc").value = "";
        document.getElementById("octt").value = "";

    }