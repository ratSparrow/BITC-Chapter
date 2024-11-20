

export default function SignUp() {
    return (
        <div className="w-1/2 mx-auto mt-10 p-2">
        <label className="input input-bordered flex items-center gap-2">
            Name
            <input type="text"  className="grow py-4" placeholder="Daisy" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text"  className="grow py-4" placeholder="daisy@site.com" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
            <input type="text"  className="grow py-4" placeholder="Search" />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
        </label>
        <label className="input input-bordered flex items-center gap-2">
            <input type="text"  className="grow py-4" placeholder="Search" />
            <span className="badge badge-info">Optional</span>
        </label>
    </div>
    )
}
