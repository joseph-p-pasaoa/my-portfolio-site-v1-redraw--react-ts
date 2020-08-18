import { useEffect } from 'react'


/**
 * Hook that alerts clicks outside of the passed ref
 * From https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */

export default function useOutsideAlerter(ref: any) {
   useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
         if (ref.current && !ref.current.contains(event.target)) {
               alert("You clicked outside of me!");
         }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         // Unbind the event listener on clean up
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [ref]);
}
