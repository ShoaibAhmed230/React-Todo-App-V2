import styles from './ErrorMsg.module.css'

const ErrorMsg = ({item}) => {
    return <>
    {item.length === 0 && <h3 className={`${styles['msg']} text-white text-center mt-3`}> List is Empty :/</h3>}
    </>
}

export default ErrorMsg