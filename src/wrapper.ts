export const wrap = (input: string, col: number): string => {
  if (input.length <= col){
    return input;
  }else{
    return input.replace(/\s/g, "\n");
  }
}
