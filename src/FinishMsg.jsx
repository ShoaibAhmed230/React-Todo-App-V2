const FinishMsg = ({displayInput}) => {
    return <>
    {displayInput.lenght == 0 && <h3 className={`${styles['msg']} text-white text-center mt-3`}> List is Empty :/</h3>}
    </>
}

export default FinishMsg