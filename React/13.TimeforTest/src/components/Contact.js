
const Contact = () => {

    return (  
        <div>
            <h1 className="font-bold text-3xl p-4 m-4" >Contact Us Page</h1>

            <form>
                <input type="text" className="border-black p-2 m-2 " placeholder="Enter name"/>
                <input type="text" className="border-black p-2 m-2" placeholder="Enter email"/>
                <input type="text" className="border-black p-2 m-2" placeholder="Enter phonenumber"/>
                <button className="border border-black p-2 m-3 bg-gray-100 rounded-lg">Submit</button>
            </form>

        </div>
    );

};

export default Contact;