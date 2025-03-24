//3. Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış 
// massivi geri qaytaran sortArray() funksiyasını yazın.

let array = [
    1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22,
  ];
  const sortArray = array.sort((a,b) =>{
     return a-b
  });
  console.log(sortArray);
  