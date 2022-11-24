import React from "react";

interface IWithNoPrintProps
{
    
}
  
const withNoPrint = 
<P extends object>(Component: React.ComponentType<P>) =>
{
    return class WithNoPrint extends React.Component<P & IWithNoPrintProps>
    {
        render()
        {
            return <Component className="no-print" {...(this.props as P)} />
        }
    };
}

export default withNoPrint;