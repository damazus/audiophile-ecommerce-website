export function toKebabCase(inputString: string): string{
   let outputString = "";

   for (let i = 0; i < inputString.length; i++) {
      if (i > 0 && inputString[i] >= 'A' && inputString[i] <= 'Z') {
         outputString += "-" + inputString[i].toLowerCase();
      } else {
         outputString += inputString[i];
      }
   }

   return outputString
}