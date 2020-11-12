export const wrap = (input: string, col: number): string => {
  if (input.length <= col){
    return input;
  }else{
    return (input.substring(0, col) + "\n" + input.substring(col));
  }
}
