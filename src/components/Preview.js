
export default function Preview(props){
    return(
        <>
            <div className="box">
                <table className="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{props.fullname}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{props.email}</td>
                    </tr>
                    <tr>
                        <td>DOB</td>
                        <td>{props.dob}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </>
    )
}