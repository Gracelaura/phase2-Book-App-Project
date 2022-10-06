import { createContext, useContext } from "react";
import { useState } from "react";


const AppContext = createContext(null)

export function useAppContext() {
   const context =  useContext(AppContext)

   if(context === undefined){
    
    throw new Error(`Appcontext must be within appContextProvider`)
   }

   return context
}

function AppContextProvider({children}) {
    const [favorites, setFavorites] = useState([])


    function addToFavorites() {

    }

    function removeFromFavorites(id) {

    }



    return(
        <AppContextProvider value={(favorites,addToFavorites,removeFromFavorites)}>
            {children}
        </AppContextProvider>
    )
}

export default AppContextProvider