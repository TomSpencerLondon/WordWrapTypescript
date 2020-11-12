export const wrap = (input: string, col: number): string => {
  if (input.length <= col){
    return input;
  }else if (input.charAt(col - 1) == " "){
    return (input.substring(0, col-1) + "\n" + wrap(input.substring(col), col));
  } else{
    return (input.substring(0, col) + "\n" + wrap(input.substring(col), col));
  }
}
