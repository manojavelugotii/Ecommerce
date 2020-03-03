import React from 'react';
import Button from '@material-ui/core/Button';
 
export const ButtonComponent = ({ color,variant,name,onClick, btnStyle }) => {
    
        return (
            <React.Fragment>
                <Button 
                    onClick={onClick}
                    variant={variant} 
                    color={color}
                    style={btnStyle}>
                    {name}
                </Button>
            </React.Fragment>
        )
}