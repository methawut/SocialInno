//? Terminal --> npm run dev

import axios from 'axios';

//! Url API
let mainURL = "https://script.google.com/macros/s/AKfycbwrcLx1RKgmrEw8KJqjdZ6xhPKA5ffU9_AnDmf3zwdWfODyfBlIN8AGI0qi7-npfai6/exec?"
// let DeleteRowURL = "https://script.google.com/macros/s/AKfycbzgahZXvdpfm3CEN07KsFXxI9S2sZZQ0Ad8L20t2gJdbxtHugU2LENSw0vguIfro46f/exec?read=Nadate&deleteRow=2" 
// let CreateNewSheet = "https://script.google.com/macros/s/AKfycbzgahZXvdpfm3CEN07KsFXxI9S2sZZQ0Ad8L20t2gJdbxtHugU2LENSw0vguIfro46f/exec?createNewSheet=TestCreate"

//! Query selector
let deleteButton = document.querySelector(".Delete_Button")
let sheetNameInput = document.querySelector(".SheetName_input")
let rowNumberInput = document.querySelector(".RowNumber_input")

// TODO>>>
deleteButton.addEventListener('click', func_deleteRow)


function func_deleteRow(){ 
    let CompleteUrl = mainURL + "read=" + sheetNameInput.value + "&deleteRow=" + rowNumberInput.value
    // console.log(CompleteUrl)
    axios.get(CompleteUrl)
}
