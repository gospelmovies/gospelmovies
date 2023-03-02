import { ReactNode } from "react";
import './styles/index.css'

interface Props {
    children : ReactNode
}

const DashboardContainer =( {children}:Props ) => {
    return (
        <>

         <div className="dashboard-container">
          {children}
         </div>
        
        </>
    )
}

export default DashboardContainer;