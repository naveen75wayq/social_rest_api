
interface Result<T> {
    success: boolean;
    message: string;
    data?: T;
  }
  
  export default Result;