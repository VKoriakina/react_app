import React from "react";

export const Head =({id, clas, children})=> {
    console.log('children:>>', children)
    return (
    <>
        {children}
        <p className={clas} id={id}>
            I am Head
        </p>
    </>
    )
}
