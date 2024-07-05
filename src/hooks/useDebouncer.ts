import { useState, useEffect } from 'react'

export function useDebounce<T>(value:T, milliSeconds:number=250):T{
 const [debouncedValue, setDebouncedValue] = useState<T>(value);

 useEffect(() => {
   const handler = setTimeout(() => {
     setDebouncedValue(value);
   }, milliSeconds);

   return () => {
     clearTimeout(handler);
   };
 }, [value, milliSeconds]);

 return debouncedValue;
};