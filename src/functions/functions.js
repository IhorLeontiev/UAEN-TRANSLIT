 /**
 * Translit from Ukrainian to English
 * @customfunction 
 * @param {string} input String to Translit
 * @returns {string} Transliterated value.
 */
function Translit(nameVal) {
  
  //Dictionary valid for 28/03/2020 and based on https://pasport.org.ua/vazhlivo/transliteratsiya
  ua_to_en = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'h',
    'ґ': 'g',
    'д': 'd',
    'е': 'e',
    'є': 'ie',
    'ё': 'jo',
    'ж': 'zh',
    'з': 'z',
    'и': 'y',
    'і': 'i',
    'ї': 'i',
    'й': 'i',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'kh',
    'ц': 'ts',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'shch',
    'ъ': '',
    'ы': 'y',
    'ь': '',
    'э': 'e',
    'ю': 'iu',
    'я': 'ia',
    'і': 'i',
    'ї': 'i',            
    'А': 'A',
    'Б': 'B',
    'В': 'V',
    'Г': 'H',
    'Ґ': 'G',
    'Д': 'D',
    'Е': 'E',
    'Ё': 'Jo',
    'Ж': 'Zh',
    'З': 'Z',
    'И': 'Y',
    'Й': 'Y',
    'К': 'K',
    'Л': 'L',
    'М': 'M',
    'Н': 'N',
    'О': 'O',
    'П': 'P',
    'Р': 'R',
    'С': 'S',
    'Т': 'T',
    'У': 'U',
    'Ф': 'F',
    'Х': 'Kh',
    'Ц': 'Ts',
    'Ч': 'Ch',
    'Ш': 'Sh',
    'Щ': 'Shch',
    'Ъ': '',
    'Ы': 'Y',
    'Ь': '',
    'Э': 'E',
    'Ю': 'Yu',
    'Я': 'Ya',
    '’': '',
    'І': 'I',
    'Ї': 'Yi',
    'Є': 'Ye',
    '.':'.'
  };
  
  //Replace spaces with .
  nameVal = nameVal.replace(/\s/g, '.');
  nameVal = trim(nameVal);
  nameVal = nameVal.split("");
  var trans ="";
  
  //Translit string with dictionary
  for (i = 0; i < nameVal.length; i++) {
    let symb = nameVal[i];
    trans += ua_to_en[symb]
  }
  trans = trans.toLowerCase();
 
  console.log(trans)
  return trans;
}
 
function trim(string) {
  //Delete Space and all unneceasry symbols in begining
  string = string.replace(/(^\s+)|'|"|<|>|\!|\||@|#|$|%|^|\^|\$|\\|\/|&|\*|\(\)|\|\/|;|\+|№|,|\?|:|{|}|\[|\]/g, "");
  return string;

} 
