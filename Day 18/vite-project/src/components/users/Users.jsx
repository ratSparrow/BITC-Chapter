import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(data => data.json())
            .then(data => setUsers(data))

    }, [])

    const student = {
        id: 1, name: "Zuthi"
    }
    console.log(student.name)
    //    console.log(users)
    return (
        <div className="max-w-[1000px] mx-auto">
            <h1 className='text-3xl text-center text-red-500 my-4'>Our Users</h1>

            <div className="grid grid-cols-3 gap-4">
                {
                    users.map((user) => <div key={user.id} className="card bg-base-100 my-4 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title"> {user.name} </h2>
                            <h2 className="card-title"> {user.email} </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Contact Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    )
}
