//Ecma 6'da önemli özelliklerden biride let ve const değişken atamaları
//let ve const ortak özelliği ikiside aynı scope içinde yer alırken
//farklılıkları bu iki anahtara atanan obje üzerinde değişiklik yapma 
//hakları farklılık arz eder.


var deneme = function(){
	var ali = "ismet";
	for(i=0; i < 1; i++)
		{
			let rakam = i;
			const ra = {bilgi : "alınacak"}
			console.log(ra);
			ra.bilgi = "alınmadı" //update
			console.log(ra);
			ra.ders = "bilgi"; // insert
			console.log(ra) 
			delete ra.bilgi; //delete
			console.log(ra);
			
			console.log(rakam);
		}
	console.log(ali);
	
	console.log("burası hata verecek çünkü bu değişken let keyword'üne atanmış ve let scope olarak kendine en yakın kıvırcık parantezleri alır. bu console.log ise bu scopetan çok uzaklarda", rakam);
}
deneme();