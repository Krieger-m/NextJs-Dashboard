

function Inv(){
    return <a  href="http://localhost:3000/dashboard/invoices">  - Invoices Page </a>;
    <br/>
}
function Cust(){
    return <a  href="http://localhost:3000/dashboard/invoices">  - Customers Page </a>;
    <br/>
}
function Back(){
    return (<div>
            <br/>
            <a  href="http://localhost:3000/"> - Back</a>
        </div>
    );
}


export default function Page(){
    return (
        <div>
            <p>Dashboard Page</p>
            <br/>
            <Inv /> | 
            <Cust />
            <Back />
        </div>
    );
}