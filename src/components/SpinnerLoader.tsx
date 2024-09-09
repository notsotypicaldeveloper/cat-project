type SpinnerProps = {
    showSpinner: boolean
}
const SpinnerLoader = (props: SpinnerProps) => {  
    console.log("props.showSpinner===", props.showSpinner) 
    return (
        <>  
            {props.showSpinner ?(
                <img src='./svg-spinners--90-ring-with-bg.svg' />
            ) : (
                <></>
            )
            }
        </>
    )
}

export default SpinnerLoader